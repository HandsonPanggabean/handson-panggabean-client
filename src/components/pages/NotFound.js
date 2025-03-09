import React from "react";

// React router dom
import { useNavigate } from "react-router-dom";

// React Redux
import { useSelector } from "react-redux";

// Helpers
import { t } from "../../helpers/translator";

const NotFound = () => {
  const navigate = useNavigate();
  const lang = useSelector((state) => state.lang);

  return (
    <main className="flex items-center justify-center flex-grow text-blue-900 bg-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div className="max-w-screen-sm mx-auto text-center">
          <h1 className="mb-4 font-extrabold tracking-tight text-7xl lg:text-9xl text-primary-600 dark:text-yellow-400">
            404
          </h1>
          <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
            {t("not_found_title", lang)}
          </p>
          <p className="mb-4 text-lg font-light text-gray-700 dark:text-gray-400">
            {t("not_found_desc", lang)}
          </p>
          <div
            className="bg-blue-900 text-white inline-flex dark:text-black font-bold bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-lg px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4 dark:bg-yellow-400 cursor-pointer "
            onClick={() => navigate("/")}
          >
            {t("not_found_btn_text", lang)}
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
