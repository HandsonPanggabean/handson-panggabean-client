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

// React toastify
import { ToastContainer, toast } from "react-toastify";

function App() {
  const initial = useRef(null);
  const initialConversation = useRef(null);
  const dispatch = useDispatch();
  const { showInfo, showError } = useToastMessage();
  const is_server_sleep = useSelector((state) => state.is_server_sleep);
  const [theme, setTheme] = useState(
    typeof window !== "undefined" && localStorage.getItem("theme") === "dark"
      ? "dark"
      : "light"
  );

  const handleWakeServer = async () => {
    toast.dismiss();
    try {
      showInfo({
        position: "top-right",
        message: "Server is waking up. Please wait a moment to use...",
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

      // for now just let is_server_sleep into false before integrate socket.io
      dispatch({
        type: "SET_SERVER_STATUS",
        is_server_sleep: false,
      });
    } catch (err) {
      showError(err.response.data.message);
    }
  };

  const handleCheckServer = async () => {
    try {
      await getServerStatus();
    } catch (err) {
      dispatch({
        type: "SET_SERVER_STATUS",
        is_server_sleep: true,
      });
      showInfo({
        message: (
          <div className="flex flex-col items-center justify-center gap-2 ml-3">
            <div className="font-semibold">Server is currently sleeping...</div>
            <button
              onClick={() => handleWakeServer()}
              className="px-5 py-1 font-semibold text-white bg-blue-900 rounded-md cursor-pointer dark:text-black dark:bg-yellow-400 focus:outline-none focus:ring-2 dark:focus:ring-blue-500"
            >
              Wake Server
            </button>
          </div>
        ),
        notAutoClose: true,
      });
    }
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
      <AIChat
        is_server_sleep={is_server_sleep}
        handleWakeServer={handleWakeServer}
        showError={showError}
        initialConversation={initialConversation}
      />
      <Footer />
    </div>
  );
}

export default App;
