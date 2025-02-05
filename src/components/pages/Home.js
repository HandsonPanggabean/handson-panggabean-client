import React, { useState } from "react";

// React router dom
// import { useNavigate } from "react-router-dom";

// Sweetalert
import Swal from "sweetalert2";

// Apis
import { sendMessageToMyEmail } from "../../apis/email";

// Images & Icons
import profile_picture_handson from "../../assets/images/profile_picture_handson.jpeg";
import linked_in_logo from "../../assets/icons/brands/linked_in_logo.avif";
import instagram_logo from "../../assets/icons/brands/instagram_logo.webp";

import github_icon_light from "../../assets/icons/skills/github_icon_light.svg";
import github_icon_dark from "../../assets/icons/skills/github_icon_dark.svg";

// Components
import InputHtmlEditor from "../inputs/InputHtmlEditor";
import LoadingAnimation from "../LoadingAnimation";
import Skills from "./Homes/Skills";
import WorkExperiences from "./Homes/WorkExperiences";
import PortfolioProjects from "./Homes/PortfolioProjects";

const Home = (props) => {
  const { theme } = props || {};
  // const navigate = useNavigate();

  const [isLoading, setLoading] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderEmailSubject, setSenderEmailSubject] = useState("");
  const [messageHtml, setMessageHtml] = useState(
    '<p style="text-align: left;"><span style="font-size: 18pt; font-family: verdana, geneva, sans-serif;">Greetings! 😁</span></p>'
  );

  const handleOnClickLogos = (url) => {
    window.open(url, "_blank");
  };

  const handleSendEmail = async () => {
    try {
      setLoading(true);
      const body = {
        name: senderName,
        email: senderEmail,
        subject: senderEmailSubject,
        message: messageHtml,
      };

      const response = await sendMessageToMyEmail(body);
      if (response && response.data && response.data.success) {
        Swal.fire({
          position: "center",
          title: response.data.message,
          icon: "success",
          showConfirmButton: false,
          timer: 3000,
          width: "90%",
          customClass: {
            popup:
              "bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg w-full max-w-xs",
            title: "text-lg font-semibold text-gray-800 dark:text-white",
            content: "text-sm text-gray-600",
            confirmButton:
              "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg",
          },
        });
      }
    } catch (err) {
      Swal.fire({
        position: "center",
        text: err,
        icon: "error",
        showConfirmButton: false,
        timer: 3000,
        width: "90%",
        customClass: {
          popup:
            "bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg w-full max-w-xs",
          title: "text-lg font-semibold text-gray-800 dark:text-white",
          content: "text-sm text-gray-600",
          confirmButton:
            "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-200 dark:bg-gray-900 text-white py-5 md:py-20">
      <div className="flex flex-col md:flex-row items-center justify-center py-20 px-4 md:px-60">
        <div className="md:w-2/5">
          <div className="flex ">
            <img
              src={profile_picture_handson}
              alt="Handson's Profile"
              className="rounded-lg shadow-lg w-80"
            />
          </div>
        </div>

        <div className="md:w-3/5 text-center md:text-left mt-10 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
            Hi, I'm{" "}
            <span className="text-blue-900 dark:text-blue-400">
              Handson Panggabean
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mt-2 text-black dark:text-white">
            Fullstack Developer
          </h2>
          <p className="text-black dark:text-gray-300 mt-4">
            Experienced in building and maintaining both front-end and back-end
            systems with knack for creating seamless user experiences.
            Enthusiastic about problem-solving, delivering clean, maintainable
            code, and collaborating within agile teams. Enjoy working with
            modern technologies to drive innovative solutions.
          </p>
          <div className="flex justify-center md:justify-start mt-6 gap-4">
            <div className="bg-gray-100 dark:bg-gray-700 hover:cursor-pointer rounded-xl">
              <div
                className="m-2"
                onClick={() =>
                  handleOnClickLogos("https://github.com/HandsonPanggabean")
                }
              >
                <img
                  src={
                    theme && theme === "dark"
                      ? github_icon_dark
                      : github_icon_light
                  }
                  alt="github_logo"
                  className="w-8 h-auto"
                />
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 hover:cursor-pointer rounded-xl">
              <div
                className="m-2"
                onClick={() =>
                  handleOnClickLogos(
                    "https://www.linkedin.com/in/handson-panggabean-781b6b222"
                  )
                }
              >
                <img
                  src={linked_in_logo}
                  alt="linked_in_logo"
                  className="w-8 h-auto"
                />
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 hover:cursor-pointer rounded-xl">
              <div
                className="m-2"
                onClick={() =>
                  handleOnClickLogos("https://www.instagram.com/handson.pgbn")
                }
              >
                <img
                  src={instagram_logo}
                  alt="instagram_logo"
                  className="w-8 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <PortfolioProjects />

      <Skills theme={theme} />

      <WorkExperiences />

      <div className="max-w-4xl mx-auto mt-28 p-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 dark:text-blue-400">
          Contact Me
        </h2>
        <div className="flex justify-center items-center mt-10">
          <div className="w-full p-4 md:p-8 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg space-y-10">
            <div className="space-y-4">
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="text-left block text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 bg-white dark:bg-gray-700 border border-gray-600 rounded-md text-black dark:text-white focus:outline-none focus:ring-2 dark:focus:ring-white"
                    onChange={({ target: { value } }) => setSenderName(value)}
                  />
                </div>
                <div className="w-1/2">
                  <label className="text-left block text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-2 bg-white dark:bg-gray-700 border border-gray-600 rounded-md text-black dark:text-white focus:outline-none focus:ring-2 dark:focus:ring-white"
                    onChange={({ target: { value } }) => setSenderEmail(value)}
                  />
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="w-full">
                  <label className="text-left block text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 bg-white dark:bg-gray-700 border border-gray-600 rounded-md text-black dark:text-white focus:outline-none focus:ring-2 dark:focus:ring-white"
                    onChange={({ target: { value } }) =>
                      setSenderEmailSubject(value)
                    }
                  />
                </div>
              </div>
              <div>
                <label className="text-left block text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <InputHtmlEditor
                  key={theme}
                  htmlContent={messageHtml}
                  setHtmlContent={setMessageHtml}
                  theme={theme}
                />
              </div>
              <div>
                <label className="text-left block text-gray-700 dark:text-gray-300 mb-1">
                  Message's preview
                </label>
                <div
                  className="p-4 break-words overflow-hidden bg-white dark:bg-gray-700 text-black dark:text-white rounded-lg min-h-[200px]"
                  dangerouslySetInnerHTML={{ __html: messageHtml }}
                />
              </div>
              <div className="flex justify-end">
                <div
                  className="px-6 py-2 dark:bg-blue-600 text-white font-semibold rounded-md focus:outline-none focus:ring-2 dark:focus:ring-blue-500"
                  onClick={() => handleSendEmail()}
                >
                  {isLoading ? <LoadingAnimation /> : "Send"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
