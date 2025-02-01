import React from "react";

// React router dom
// import { useNavigate } from "react-router-dom";

// Images & Icons
import profile_picture_handson from "../../assets/images/profile_picture_handson.jpeg";
import linked_in_logo from "../../assets/icons/linked_in_logo.avif";
import instagram_logo from "../../assets/icons/instagram_logo.webp";
import github_icon from "../../assets/icons/github_icon.png";
import gmf_logo from "../../assets/icons/gmf_logo.jpg";
import cloudxier_logo from "../../assets/icons/cloudxier_logo.png";

import javascript_icon from "../../assets/icons/javascript_icon.png";
import typescript_icon from "../../assets/icons/typescript_icon.png";
import node_icon from "../../assets/icons/node_icon.png";
import sequelize_icon from "../../assets/icons/sequelize_icon.png";
import postgre_icon from "../../assets/icons/postgre_icon.png";
import redis_icon from "../../assets/icons/redis_icon.png";
import cookie_parser_icon from "../../assets/icons/cookie_parser_icon.png";
import js_cookie_icon from "../../assets/icons/js_cookie_icon.png";
import jest_icon from "../../assets/icons/jest_icon.png";
import jwt_icon from "../../assets/icons/jwt_icon.png";
import mongo_db_icon from "../../assets/icons/mongo_db_icon.png";
import express_icon from "../../assets/icons/express_icon.png";
import socket_io_icon from "../../assets/icons/socket_io_icon.png";
import google_cloud_icon from "../../assets/icons/google_cloud_icon.png";
import my_sql_icon from "../../assets/icons/my_sql_icon.png";
import postman_icon from "../../assets/icons/postman_icon.png";
import npm_icon from "../../assets/icons/npm_icon.png";
import yarn_icon from "../../assets/icons/yarn_icon.png";
import x_code_icon from "../../assets/icons/x_code_icon.png";
import vue_icon from "../../assets/icons/vue_icon.png";
import vuetify_icon from "../../assets/icons/vuetify_icon.png";
import vite_icon from "../../assets/icons/vite_icon.png";
import vs_code_icon from "../../assets/icons/vs_code_icon.png";
import tailwind_icon from "../../assets/icons/tailwind_icon.png";
import sass_icon from "../../assets/icons/sass_icon.png";
import redux_icon from "../../assets/icons/redux_icon.png";
import react_icon from "../../assets/icons/react_icon.png";
import nodemon_icon from "../../assets/icons/nodemon_icon.png";
import jira_icon from "../../assets/icons/jira_icon.png";
import homebrow_icon from "../../assets/icons/homebrow_icon.png";
import heroku_icon from "../../assets/icons/heroku_icon.png";
import graphql_icon from "../../assets/icons/graphql_icon.png";
import gitlab_icon from "../../assets/icons/gitlab_icon.png";
import firebase_icon from "../../assets/icons/firebase_icon.png";
import docker_icon from "../../assets/icons/docker_icon.png";
import html_5_icon from "../../assets/icons/html_5_icon.png";
import ccs_3_icon from "../../assets/icons/ccs_3_icon.png";
import axios_icon from "../../assets/icons/axios_icon.png";
import bootstrap_icon from "../../assets/icons/bootstrap_icon.png";
import bcrypt_icon from "../../assets/icons/bcrypt_icon.jpg";
import cors_icon from "../../assets/icons/cors_icon.png";
import nodemailer_icon from "../../assets/icons/nodemailer_icon.svg";
import responsive_web_design_icon from "../../assets/icons/responsive_web_design_icon.jpg";
import restful_api_icon from "../../assets/icons/restful_api_icon.jpg";
import airtable_icon from "../../assets/icons/airtable_icon.png";
import android_studio_icon from "../../assets/icons/android_studio_icon.svg";

const Home = () => {
  // const navigate = useNavigate();

  const handleOnClickLogos = (url) => {
    window.open(url, "_blank");
  };

  const skills = [
    { url: javascript_icon, name: "Javascript" },
    { url: typescript_icon, name: "Typescript" },
    { url: npm_icon, name: "NPM" },
    { url: yarn_icon, name: "Yarn" },
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
    { url: heroku_icon, name: "Heroku" },
    { url: google_cloud_icon, name: "Google Cloud" },
    { url: socket_io_icon, name: "Socket IO" },
    { url: axios_icon, name: "Axios" },
    { url: html_5_icon, name: "HTML5" },
    { url: ccs_3_icon, name: "CCS3" },
    { url: react_icon, name: "React" },
    { url: react_icon, name: "React Native" },
    { url: redux_icon, name: "Redux" },
    { url: vue_icon, name: "Vue" },
    { url: vite_icon, name: "Vite" },
    { url: vuetify_icon, name: "Vuetify" },
    { url: tailwind_icon, name: "Tailwind" },
    { url: bootstrap_icon, name: "Bootstrap" },
    { url: sass_icon, name: "Sass" },
    { url: js_cookie_icon, name: "js-cookie" },
    { url: responsive_web_design_icon, name: "Responsive Web Design" },
    { url: firebase_icon, name: "Firebase" },
    { url: github_icon, name: "GitHub" },
    { url: gitlab_icon, name: "GitLab" },
    { url: x_code_icon, name: "Xcode" },
    { url: android_studio_icon, name: "Android Studio" },
    { url: vs_code_icon, name: "Virtual Studio code" },
    { url: jira_icon, name: "Jira" },
    { url: airtable_icon, name: "Airtable" },
    { url: homebrow_icon, name: "Homebrew" },
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

  return (
    <div className="bg-gray-300 dark:bg-gray-900 text-white">
      <div className="flex flex-col md:flex-row items-center justify-center py-40 px-4 md:px-60">
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
                  src={github_icon}
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
        <div className="max-w-4xl mx-auto my-10 md:my-0 md:mb-40 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 dark:text-blue-400">
            Mastered Tech Stacks
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-10 mt-10 px-4">
            {/* <div className="mt-10 space-y-10 px-4 flex items-center justify-center gap-6"> */}
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={
                    skill &&
                    (skill.name === "Express" ||
                      skill.name === "Socket IO" ||
                      skill.name === "GitHub")
                      ? "dark:bg-gray-700 rounded-lg"
                      : ""
                  }
                >
                  <img
                    src={skill.url}
                    alt={skill.name}
                    className={`w-20 h-auto rounded-lg ${
                      skill &&
                      (skill.name === "Express" ||
                        skill.name === "Socket IO" ||
                        skill.name === "GitHub")
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

      <div className="max-w-4xl mx-auto my-40 md:my-0 md:mb-40 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 dark:text-blue-400">
          Work Experiences
        </h2>
        <div className="mt-10 space-y-10 px-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex items-center flex-col md:flex-row p-4 bg-gray-100 dark:bg-gray-700 shadow rounded-lg"
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
                  <p className="text-left text-black dark:text-white mt-2 text-sm">
                    <ul class="list-disc ml-3">
                      {exp.descriptions.map((description, idx) => {
                        return <li key={idx}>{description}</li>;
                      })}
                    </ul>
                  </p>
                ) : null}
                <p className="text-sm text-black dark:text-white text-left mt-2 font-semibold">
                  {exp.period}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
