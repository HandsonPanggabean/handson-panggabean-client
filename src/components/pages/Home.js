import React from "react";

// React router dom
import { useNavigate } from "react-router-dom";

// Images & Icons
import profile_picture_handson from "../../assets/images/profile_picture_handson.jpeg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 text-white bg-red">
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4 md:px-60">
        {/* <!-- Left Content --> */}
        <div className="md:w-3/5 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold">
            Hi, I'm <span className="text-pink-500">Handson Panggabean</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mt-2">
            Fullstack developer
          </h2>
          <p className="text-gray-300 mt-4">
            Experienced in building and maintaining both front-end and back-end
            systems with knack for creating seamless user experiences.
            Enthusiastic about problem-solving, delivering clean, maintainable
            code, and collaborating within agile teams. Enjoy working with
            modern technologies to drive innovative solutions.
          </p>
          {/* <!-- Social Media Links --> */}
          <div className="flex justify-center md:justify-start mt-6 gap-4">
            <a href="#" className="text-gray-400 hover:text-pink-500 text-2xl">
              <i className="fab fa-linkedin"></i>
              {/* <!-- LinkedIn --> */}
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-500 text-2xl">
              <i className="fab fa-behance"></i>
              {/* <!-- Behance --> */}
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-500 text-2xl">
              <i className="fab fa-twitter"></i>
              {/* <!-- Twitter --> */}
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-500 text-2xl">
              <i className="fab fa-instagram"></i>
              {/* <!-- Instagram --> */}
            </a>
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
        {/* <!-- Right Image --> */}
        <div className="md:w-2/5 mt-10 md:mt-0">
          <div className="flex justify-end">
            <img
              src={profile_picture_handson}
              alt="Handson's Profile Picture"
              className="rounded-lg shadow-lg w-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
