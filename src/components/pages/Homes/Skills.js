import React from "react";

// Icons
import github_icon_light from "../../../assets/icons/skills/github_icon_light.svg";
import github_icon_dark from "../../../assets/icons/skills/github_icon_dark.svg";
import vs_code_icon from "../../../assets/icons/skills/vs_code_icon.svg";
import bootstrap_icon_light from "../../../assets/icons/skills/bootstrap_icon_light.svg";
import bootstrap_icon_dark from "../../../assets/icons/skills/bootstrap_icon_dark.svg";
import nodemailer_icon from "../../../assets/icons/skills/nodemailer_icon.svg";
import airtable_icon from "../../../assets/icons/skills/airtable_icon.svg";
import vitest_icon from "../../../assets/icons/skills/vitest_icon.svg";
import figma_icon from "../../../assets/icons/skills/figma_icon.svg";
import railway_icon_light from "../../../assets/icons/skills/railway_icon_light.svg";
import railway_icon_dark from "../../../assets/icons/skills/railway_icon_dark.svg";
import javascript_icon from "../../../assets/icons/skills/javascript_icon.svg";
import typescript_icon from "../../../assets/icons/skills/typescript_icon.svg";
import node_icon from "../../../assets/icons/skills/node_icon.svg";
import postgre_icon from "../../../assets/icons/skills/postgre_icon.svg";
import redis_icon from "../../../assets/icons/skills/redis_icon.svg";
import jest_icon from "../../../assets/icons/skills/jest_icon.svg";
import mongo_db_icon from "../../../assets/icons/skills/mongo_db_icon.svg";
import google_cloud_icon from "../../../assets/icons/skills/google_cloud_icon.svg";
import my_sql_icon from "../../../assets/icons/skills/my_sql_icon.svg";
import postman_icon from "../../../assets/icons/skills/postman_icon.svg";
import npm_icon from "../../../assets/icons/skills/npm_icon.svg";
import vue_icon from "../../../assets/icons/skills/vue_icon.svg";
import vite_icon from "../../../assets/icons/skills/vite_icon.svg";
import tailwind_icon from "../../../assets/icons/skills/tailwind_icon.svg";
import sass_icon from "../../../assets/icons/skills/sass_icon.svg";
import redux_icon from "../../../assets/icons/skills/redux_icon.svg";
import react_icon from "../../../assets/icons/skills/react_icon.svg";
import jira_icon_light from "../../../assets/icons/skills/jira_icon_light.svg";
import jira_icon_dark from "../../../assets/icons/skills/jira_icon_dark.svg";
import homebrew_icon from "../../../assets/icons/skills/homebrew_icon.svg";
import heroku_icon_light from "../../../assets/icons/skills/heroku_icon_light.svg";
import heroku_icon_dark from "../../../assets/icons/skills/heroku_icon_dark.svg";
import graphql_icon from "../../../assets/icons/skills/graphql_icon.svg";
import gitlab_icon from "../../../assets/icons/skills/gitlab_icon.svg";
import firebase_icon from "../../../assets/icons/skills/firebase_icon.svg";
import docker_icon from "../../../assets/icons/skills/docker_icon.svg";
import html_5_icon from "../../../assets/icons/skills/html_5_icon.svg";
import css_3_icon from "../../../assets/icons/skills/css_3_icon.svg";
import react_router_icon_light from "../../../assets/icons/skills/react_router_icon_light.svg";
import react_router_icon_dark from "../../../assets/icons/skills/react_router_icon_dark.svg";
import sequelize_icon from "../../../assets/icons/skills/sequelize_icon.svg";
import express_icon_light from "../../../assets/icons/skills/express_icon_light.svg";
import express_icon_dark from "../../../assets/icons/skills/express_icon_dark.svg";
import socket_io_icon_light from "../../../assets/icons/skills/socket_io_icon_light.svg";
import socket_io_icon_dark from "../../../assets/icons/skills/socket_io_icon_dark.svg";
import yarn_icon from "../../../assets/icons/skills/yarn_icon.svg";
import x_code_icon from "../../../assets/icons/skills/x_code_icon.svg";
import vuetify_icon from "../../../assets/icons/skills/vuetify_icon.svg";
import nodemon_icon from "../../../assets/icons/skills/nodemon_icon.svg";
import axios_icon from "../../../assets/icons/skills/axios_icon.svg";
import android_studio_icon from "../../../assets/icons/skills/android_studio_icon.svg";
import pinia from "../../../assets/icons/skills/pinia.svg";
import webrtc_icon from "../../../assets/icons/skills/webrtc_icon.svg";
import jwt_icon_light from "../../../assets/icons/skills/jwt_icon_light.svg";
import jwt_icon_dark from "../../../assets/icons/skills/jwt_icon_dark.svg";
import restful_api_icon_light from "../../../assets/icons/skills/restful_api_icon_light.svg";
import restful_api_icon_dark from "../../../assets/icons/skills/restful_api_icon_dark.svg";
import responsive_web_design_icon_light from "../../../assets/icons/skills/responsive_web_design_icon_light.svg";
import responsive_web_design_icon_dark from "../../../assets/icons/skills/responsive_web_design_icon_dark.svg";

import cookie_parser_icon from "../../../assets/icons/skills/cookie_parser_icon.png";
import js_cookie_icon from "../../../assets/icons/skills/js_cookie_icon.png";
import bcrypt_icon from "../../../assets/icons/skills/bcrypt_icon.jpg";
import cors_icon from "../../../assets/icons/skills/cors_icon.png";

const Skills = (props) => {
  const { theme } = props || {};
  const skills = [
    { url: javascript_icon, name: "Javascript" },
    { url: typescript_icon, name: "Typescript" },
    { url: node_icon, name: "Node" },
    {
      url: theme && theme === "dark" ? express_icon_dark : express_icon_light,
      name: "Express",
    },
    { url: sequelize_icon, name: "Sequelize" },
    { url: postgre_icon, name: "PostgreSQL" },
    { url: redis_icon, name: "Redis" },
    { url: my_sql_icon, name: "MySQL" },
    { url: mongo_db_icon, name: "MongoDB" },
    { url: graphql_icon, name: "GraphQL" },
    { url: docker_icon, name: "Docker" },
    { url: cookie_parser_icon, name: "Cookie Parser" },
    {
      url: theme && theme === "dark" ? jwt_icon_dark : jwt_icon_light,
      name: "JSON Web Token",
    },
    { url: bcrypt_icon, name: "BCrypt" },
    { url: cors_icon, name: "CORS" },
    { url: nodemailer_icon, name: "Nodemailer" },
    { url: nodemon_icon, name: "Nodemon" },
    { url: jest_icon, name: "Jest" },
    {
      url:
        theme && theme === "dark"
          ? restful_api_icon_dark
          : restful_api_icon_light,
      name: "RESTful APIs",
    },
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
    {
      url:
        theme && theme === "dark" ? socket_io_icon_dark : socket_io_icon_light,
      name: "Socket IO",
    },
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
    { url: webrtc_icon, name: "WebRTC" },
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
    {
      url:
        theme && theme === "dark"
          ? responsive_web_design_icon_dark
          : responsive_web_design_icon_light,
      name: "Responsive Web Design",
    },
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

  if (skills && Array.isArray(skills) && skills.length > 0) {
    return (
      <div className="max-w-4xl mx-auto py-32">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 dark:text-blue-400">
          Tech Stacks
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-10 mt-10 px-4">
          {/* <div className="mt-10 space-y-10 px-4 flex items-center justify-center gap-6"> */}
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <div>
                <img
                  src={skill.url}
                  alt={skill.name}
                  className="w-20 h-auto rounded-lg"
                />
              </div>
              <div className="font-semibold text-md mt-1 text-black dark:text-white">
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Skills;
