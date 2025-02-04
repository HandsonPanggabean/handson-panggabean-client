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
import gmf_logo from "../../assets/icons/work_experiences/gmf_logo.jpg";
import cloudxier_logo from "../../assets/icons/work_experiences/cloudxier_logo.png";

import github_icon_light from "../../assets/icons/skills/github_icon_light.svg";
import github_icon_dark from "../../assets/icons/skills/github_icon_dark.svg";
import vs_code_icon from "../../assets/icons/skills/vs_code_icon.svg";
import bootstrap_icon_light from "../../assets/icons/skills/bootstrap_icon_light.svg";
import bootstrap_icon_dark from "../../assets/icons/skills/bootstrap_icon_dark.svg";
import nodemailer_icon from "../../assets/icons/skills/nodemailer_icon.svg";
import airtable_icon from "../../assets/icons/skills/airtable_icon.svg";
import vitest_icon from "../../assets/icons/skills/vitest_icon.svg";
import figma_icon from "../../assets/icons/skills/figma_icon.svg";
import railway_icon_light from "../../assets/icons/skills/railway_icon_light.svg";
import railway_icon_dark from "../../assets/icons/skills/railway_icon_dark.svg";
import javascript_icon from "../../assets/icons/skills/javascript_icon.svg";
import typescript_icon from "../../assets/icons/skills/typescript_icon.svg";
import node_icon from "../../assets/icons/skills/node_icon.svg";
import postgre_icon from "../../assets/icons/skills/postgre_icon.svg";
import redis_icon from "../../assets/icons/skills/redis_icon.svg";
import jest_icon from "../../assets/icons/skills/jest_icon.svg";
import mongo_db_icon from "../../assets/icons/skills/mongo_db_icon.svg";
import google_cloud_icon from "../../assets/icons/skills/google_cloud_icon.svg";
import my_sql_icon from "../../assets/icons/skills/my_sql_icon.svg";
import postman_icon from "../../assets/icons/skills/postman_icon.svg";
import npm_icon from "../../assets/icons/skills/npm_icon.svg";
import vue_icon from "../../assets/icons/skills/vue_icon.svg";
import vite_icon from "../../assets/icons/skills/vite_icon.svg";
import tailwind_icon from "../../assets/icons/skills/tailwind_icon.svg";
import sass_icon from "../../assets/icons/skills/sass_icon.svg";
import redux_icon from "../../assets/icons/skills/redux_icon.svg";
import react_icon from "../../assets/icons/skills/react_icon.svg";
import jira_icon_light from "../../assets/icons/skills/jira_icon_light.svg";
import jira_icon_dark from "../../assets/icons/skills/jira_icon_dark.svg";
import homebrew_icon from "../../assets/icons/skills/homebrew_icon.svg";
import heroku_icon_light from "../../assets/icons/skills/heroku_icon_light.svg";
import heroku_icon_dark from "../../assets/icons/skills/heroku_icon_dark.svg";
import graphql_icon from "../../assets/icons/skills/graphql_icon.svg";
import gitlab_icon from "../../assets/icons/skills/gitlab_icon.svg";
import firebase_icon from "../../assets/icons/skills/firebase_icon.svg";
import docker_icon from "../../assets/icons/skills/docker_icon.svg";
import html_5_icon from "../../assets/icons/skills/html_5_icon.svg";
import css_3_icon from "../../assets/icons/skills/css_3_icon.svg";
import react_router_icon_light from "../../assets/icons/skills/react_router_icon_light.svg";
import react_router_icon_dark from "../../assets/icons/skills/react_router_icon_dark.svg";
import sequelize_icon from "../../assets/icons/skills/sequelize_icon.svg";
import express_icon from "../../assets/icons/skills/express_icon.svg";
import socket_io_icon from "../../assets/icons/skills/socket_io_icon.svg";
import yarn_icon from "../../assets/icons/skills/yarn_icon.svg";
import x_code_icon from "../../assets/icons/skills/x_code_icon.svg";
import vuetify_icon from "../../assets/icons/skills/vuetify_icon.svg";
import nodemon_icon from "../../assets/icons/skills/nodemon_icon.svg";
import axios_icon from "../../assets/icons/skills/axios_icon.svg";
import android_studio_icon from "../../assets/icons/skills/android_studio_icon.svg";
import pinia from "../../assets/icons/skills/pinia.svg";

import cookie_parser_icon from "../../assets/icons/skills/cookie_parser_icon.png";
import js_cookie_icon from "../../assets/icons/skills/js_cookie_icon.png";
import jwt_icon from "../../assets/icons/skills/jwt_icon.png";
import bcrypt_icon from "../../assets/icons/skills/bcrypt_icon.jpg";
import cors_icon from "../../assets/icons/skills/cors_icon.png";
import responsive_web_design_icon from "../../assets/icons/skills/responsive_web_design_icon.jpg";
import restful_api_icon from "../../assets/icons/skills/restful_api_icon.jpg";

// Components
import InputHtmlEditor from "../inputs/InputHtmlEditor";
import LoadingAnimation from "../LoadingAnimation";

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

  const skills = [
    { url: javascript_icon, name: "Javascript" },
    { url: typescript_icon, name: "Typescript" },
    { url: node_icon, name: "Node" },
    { url: express_icon, name: "Express" },
    { url: sequelize_icon, name: "Sequelize" },
    { url: postgre_icon, name: "PostgreSQL" },
    { url: redis_icon, name: "Redis" },
    { url: my_sql_icon, name: "MySQL" },
    { url: mongo_db_icon, name: "MongoDB" },
    { url: graphql_icon, name: "GraphQL" },
    { url: docker_icon, name: "Docker" },
    { url: cookie_parser_icon, name: "Cookie Parser" },
    { url: jwt_icon, name: "JSON Web Token" },
    { url: bcrypt_icon, name: "BCrypt" },
    { url: cors_icon, name: "CORS" },
    { url: nodemailer_icon, name: "Nodemailer" },
    { url: nodemon_icon, name: "Nodemon" },
    { url: jest_icon, name: "Jest" },
    { url: restful_api_icon, name: "RESTful APIs" },
    { url: postman_icon, name: "Postman" },
    {
      url: theme && theme === "dark" ? railway_icon_dark : railway_icon_light,
      name: "Railway",
    },
    {
      url: theme && theme === "dark" ? heroku_icon_dark : heroku_icon_light,
      name: "Heroku",
    },
    { url: google_cloud_icon, name: "Google Cloud" },
    { url: socket_io_icon, name: "Socket IO" },
    { url: axios_icon, name: "Axios" },
    { url: npm_icon, name: "NPM" },
    { url: yarn_icon, name: "Yarn" },
    { url: html_5_icon, name: "HTML5" },
    { url: css_3_icon, name: "CSS3" },
    { url: react_icon, name: "React" },
    { url: redux_icon, name: "Redux" },
    {
      url:
        theme && theme === "dark"
          ? react_router_icon_dark
          : react_router_icon_light,
      name: "React Router",
    },
    { url: react_icon, name: "React Native" },
    { url: vue_icon, name: "Vue" },
    { url: vuetify_icon, name: "Vuetify" },
    { url: vite_icon, name: "Vite" },
    { url: vitest_icon, name: "Vitest" },
    { url: pinia, name: "Pinia" },
    { url: tailwind_icon, name: "Tailwind" },
    {
      url:
        theme && theme === "dark" ? bootstrap_icon_dark : bootstrap_icon_light,
      name: "Bootstrap",
    },
    { url: sass_icon, name: "Sass" },
    { url: figma_icon, name: "Figma" },
    { url: js_cookie_icon, name: "js-cookie" },
    { url: responsive_web_design_icon, name: "Responsive Web Design" },
    { url: firebase_icon, name: "Firebase" },
    {
      url: theme && theme === "dark" ? github_icon_dark : github_icon_light,
      name: "GitHub",
    },
    { url: gitlab_icon, name: "GitLab" },
    { url: x_code_icon, name: "Xcode" },
    { url: android_studio_icon, name: "Android Studio" },
    { url: vs_code_icon, name: "Virtual Studio code" },
    {
      url: theme && theme === "dark" ? jira_icon_dark : jira_icon_light,
      name: "Jira",
    },
    { url: airtable_icon, name: "Airtable" },
    { url: homebrew_icon, name: "Homebrew" },
  ];

  const experiences = [
    {
      company: "PT GMF AeroAsia Tbk",
      logo: gmf_logo,
      position: "Senior Aircraft Maintenance Technician",
      period: "Dec 2018 - May 2021",
      descriptions: [
        "Performed scheduled and unscheduled inspections to check flight readiness of aircraft.",
        "Maintained repair logs to document all corrective and preventive aircraft maintenance.",
        "Inspected all received aircraft parts to verify compliance with EASA & FAA regulations.",
      ],
    },
    {
      company: "Cloudxier",
      logo: cloudxier_logo,
      position: "Fullstack Developer",
      period: "Nov 2021 - Present",
      descriptions: [
        "Developed and maintained full-stack web applications using JavaScript, React, and Node.js, enhancing user experience and functionality.",
        "Implemented responsive web design principles to create mobile-friendly applications, increasing accessibility for users on various devices.",
        "Designed and implemented RESTful APIs, enabling effective communication between front-end and back-end systems.",
      ],
    },
  ];

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

      {skills && skills.length > 0 ? (
        <div className="max-w-4xl mx-auto py-32">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 dark:text-blue-400">
            Tech Stacks
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-10 mt-10 px-4">
            {/* <div className="mt-10 space-y-10 px-4 flex items-center justify-center gap-6"> */}
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={
                    skill &&
                    (skill.name === "Express" || skill.name === "Socket IO")
                      ? "dark:bg-gray-700 rounded-lg"
                      : ""
                  }
                >
                  <img
                    src={skill.url}
                    alt={skill.name}
                    className={`w-20 h-auto rounded-lg ${
                      skill &&
                      (skill.name === "Express" || skill.name === "Socket IO")
                        ? "m-1"
                        : ""
                    }`}
                  />
                </div>
                <div className="font-semibold text-md mt-1 text-black dark:text-white">
                  {skill.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <div className="max-w-4xl mx-auto py-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 dark:text-blue-400">
          Work Experiences
        </h2>
        <div className="mt-10 space-y-10 px-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex items-center flex-col md:flex-row p-4 bg-gray-100 dark:bg-gray-800 shadow rounded-lg"
            >
              <div className="flex items-center ml-0 md:ml-3 md:w-1/5">
                <img
                  src={exp.logo}
                  alt={`${exp.company}_logo`}
                  className="w-32 h-auto"
                />
              </div>
              <div className="mt-5 md:mt-0 md:w-4/5">
                <h3 className="text-black dark:text-white text-left font-bold text-xl md:text-2xl">
                  {exp.company}
                </h3>
                <p className="text-left text-blue-900 dark:text-blue-400 font-semibold">
                  {exp.position}
                </p>
                {exp && exp.descriptions && exp.descriptions.length > 0 ? (
                  <div className="text-left text-black dark:text-white mt-2 text-sm">
                    <ul className="list-disc ml-3">
                      {exp.descriptions.map((description, idx) => {
                        return <li key={idx}>{description}</li>;
                      })}
                    </ul>
                  </div>
                ) : null}
                <p className="text-sm text-black dark:text-white text-left mt-2 font-semibold">
                  {exp.period}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

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
