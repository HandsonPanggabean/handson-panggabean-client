import React from "react";

// React router dom
import { useNavigate } from "react-router-dom";

// Images & Icons
import profile_picture_handson from "../../assets/images/profile_picture_handson.jpeg";
import linked_in_logo from "../../assets/icons/linked_in_logo.avif";
import instagram_logo from "../../assets/icons/instagram_logo.webp";
import gmf_logo from "../../assets/icons/gmf_logo.jpg";
import cloudxier_logo from "../../assets/icons/cloudxier_logo.png";

const Home = () => {
  const navigate = useNavigate();

  const handleOnClickLogos = (url) => {
    window.open(url, "_blank");
  };

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
    <div className="bg-gray-900 text-white">
      <div className="flex flex-col md:flex-row items-center justify-center py-40 px-4 md:px-60">
        <div className="md:w-2/5">
          <div className="flex ">
            <img
              src={profile_picture_handson}
              alt="Handson's Profile Picture"
              className="rounded-lg shadow-lg w-80"
            />
          </div>
        </div>

        <div className="md:w-3/5 text-center md:text-left mt-10 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold">
            Hi, I'm <span className="text-blue-400">Handson Panggabean</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mt-2">
            Fullstack Developer
          </h2>
          <p className="text-gray-300 mt-4">
            Experienced in building and maintaining both front-end and back-end
            systems with knack for creating seamless user experiences.
            Enthusiastic about problem-solving, delivering clean, maintainable
            code, and collaborating within agile teams. Enjoy working with
            modern technologies to drive innovative solutions.
          </p>
          <div className="flex justify-center md:justify-start mt-6 gap-4">
            <div className="bg-gray-700 hover:cursor-pointer rounded-xl">
              <div
                className="m-2"
                onClick={() =>
                  handleOnClickLogos(
                    "https://www.linkedin.com/in/handson-panggabean-781b6b222"
                  )
                }
              >
                <img src={linked_in_logo} className="w-8 h-auto" />
              </div>
            </div>
            <div className="bg-gray-700 hover:cursor-pointer rounded-xl">
              <div
                className="m-2"
                onClick={() =>
                  handleOnClickLogos("https://www.instagram.com/handson.pgbn")
                }
              >
                <img src={instagram_logo} className="w-8 h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto py-10 md:py-0 md:pb-40 pb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-400">
          MY WORK EXPERIENCE
        </h2>
        <div className="mt-10 space-y-10 px-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex items-center flex-col md:flex-row p-4 bg-gray-700 shadow rounded-lg"
            >
              <div className="flex items-center ml-0 md:ml-3 md:w-1/5">
                <img
                  src={exp.logo}
                  alt={"company_logo"}
                  className="w-32 h-auto"
                />
              </div>
              <div className="mt-5 md:mt-0 md:w-4/5">
                <h3 className="text-white text-left font-bold text-xl md:text-2xl">
                  {exp.company}
                </h3>
                <p className="text-left text-blue-400 font-semibold">
                  {exp.position}
                </p>
                {exp && exp.descriptions && exp.descriptions.length > 0 ? (
                  <p className="text-left text-white mt-2 text-sm">
                    <ul class="list-disc ml-3">
                      {exp.descriptions.map((description, idx) => {
                        return <li key={idx}>{description}</li>;
                      })}
                    </ul>
                  </p>
                ) : null}
                <p className="text-sm text-white  -300 text-left mt-2 font-semibold">
                  {exp.period}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <!-- Skills --> */}
      <div className="flex justify-center md:justify-start mt-8 gap-6">
        {/* <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
              alt="HTML5 Logo"
              className="w-12"
            />
            <img
              src="https://tailwindcss.com/_next/static/media/tailwindcss-logotype.56449b7c2dc7952f4fcd29ad053fdf38.svg"
              alt="Tailwind CSS Logo"
              className="w-12"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
              alt="Figma Logo"
              className="w-12"
            /> */}
      </div>
    </div>
  );
};

export default Home;
