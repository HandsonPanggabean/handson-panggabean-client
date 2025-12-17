import React, { Suspense, useEffect, useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

// React router dom
import { Route, Routes } from "react-router-dom";

// Styles
import "./App.css";

// Pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AIChat from "./components/AIAssistants/AIChat";

// Apis
import { getServerStatus } from "./apis/initial";

// Helpers
import useToastMessage from "./helpers/toast-message";
import sendNotificationEmail from "./helpers/email";
import getServerURL from "./helpers/getServerUrl";

// React toastify
import { ToastContainer, toast } from "react-toastify";

// socket.io
import { io } from "socket.io-client";
const socket = io(getServerURL());

function App() {
  const initial = useRef(null);
  const initialConversation = useRef(null);

  const { showInfo, showError, showSuccess } = useToastMessage();

  const dispatch = useDispatch();
  const is_server_sleep = useSelector((state) => state.is_server_sleep);

  const [theme, setTheme] = useState(
    typeof window !== "undefined" && localStorage.getItem("theme") === "dark"
      ? "dark"
      : "light"
  );

  const handleCheckServer = async () => {
    try {
      await getServerStatus();
    } catch (err) {
      dispatch({
        type: "SET_SERVER_STATUS",
        is_server_sleep: true,
      });
      showInfo({
        // message: (
        //   <div className="flex flex-col items-center justify-center gap-2 mx-auto text-center">
        //     <div className="font-semibold">Server is currently sleeping...</div>
        //     <button
        //       onClick={() => handleWakeServer()}
        //       className="px-5 py-1 font-semibold text-white bg-blue-900 rounded-md cursor-pointer dark:text-black dark:bg-yellow-400 focus:outline-none focus:ring-2 dark:focus:ring-blue-500"
        //     >
        //       Wake Server
        //     </button>
        //   </div>
        // ),
        message: (
          <div className="flex flex-col items-center justify-center gap-1 mx-auto text-center">
            <div className="font-semibold">Server booting...</div>
            <div>Please wait a moment while the server gets ready.</div>
          </div>
        ),
        notAutoClose: true,
      });

      const body = {
        name: "Reminder",
        email: "hansenpanggabean8@gmail.com",
        title: "Request Awake Server",
        message: `
          <p style="text-align: left;">
            <span style="font-size: 18pt; font-family: verdana, geneva, sans-serif;">
              Someone is requesting to access server
              <a
                href="https://replit.com/@PaktuaBoedi/handson-panggabean-server"
                target="_blank"
              >
                Awake server
              </a>
            </span>
          </p>
        `,
      };
      await sendNotificationEmail(body);
    }
  };

  const showSocketNotification = (socketData) => {
    dispatch({
      type: "SET_SERVER_STATUS",
      is_server_sleep: socketData.is_server_sleep,
    });
    toast.dismiss();
    showSuccess("Server is good to go");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  useEffect(() => {
    if (!initial.current) {
      handleCheckServer();
      initial.current = true;
    } // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (is_server_sleep) {
      socket.on("server-awake-notification", (socketData) => {
        showSocketNotification(socketData);
      });
      return () => socket.off("server-awake-notification");
    } // eslint-disable-next-line
  }, [is_server_sleep]);

  return (
    <div className="flex flex-col min-h-screen App">
      <ToastContainer />
      <Navbar theme={theme} setTheme={setTheme} />
      <Suspense>
        <Routes>
          <Route
            path="/"
            name="Landing page"
            element={<Home theme={theme} />}
          />
          <Route path="/about" name="About page" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <AIChat showError={showError} initialConversation={initialConversation} />
      <Footer />
    </div>
  );
}

export default App;
