import React from "react";

// Images
import gmf_logo from "../../../assets/icons/work_experiences/gmf_logo.jpg";
import cloudxier_logo from "../../../assets/icons/work_experiences/cloudxier_logo.png";

const WorkExperiences = (props) => {
  const { lang, t } = props || {};

  const workExperiences = [
    {
      company: "PT GMF AeroAsia Tbk",
      logo: gmf_logo,
      position: "Senior Aircraft Maintenance Technician",
      period: t("work_experiences_gmf_date", lang),
      descriptions: [
        t("work_experiences_gmf_desc_1", lang),
        t("work_experiences_gmf_desc_2", lang),
        t("work_experiences_gmf_desc_3", lang),
      ],
    },
    {
      company: "Cloudxier",
      logo: cloudxier_logo,
      position: "Fullstack Developer",
      period: t("work_experiences_cloudxier_date", lang),
      descriptions: [
        t("work_experiences_cloudxier_desc_1", lang),
        t("work_experiences_cloudxier_desc_2", lang),
        t("work_experiences_cloudxier_desc_3", lang),
      ],
    },
  ];
  if (
    workExperiences &&
    Array.isArray(workExperiences) &&
    workExperiences.length > 0
  ) {
    return (
      <div className="max-w-4xl mx-auto py-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 dark:text-yellow-400">
          {t("work_experiences_title", lang)}
        </h2>
        <div className="mt-10 space-y-10 px-4">
          {workExperiences.map((exp, index) => (
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
                <p className="text-left text-blue-900 dark:text-yellow-400 font-semibold">
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
    );
  } else {
    return null;
  }
};

export default WorkExperiences;
