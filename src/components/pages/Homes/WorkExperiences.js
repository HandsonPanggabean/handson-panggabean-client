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
      <div className="max-w-4xl py-10 mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-900 md:text-4xl dark:text-yellow-400">
          {t("work_experiences_title", lang)}
        </h2>
        <div className="px-4 mt-10 space-y-10">
          {workExperiences.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow md:flex-row dark:bg-gray-800"
            >
              <div className="flex items-center ml-0 md:ml-3 md:w-1/5">
                <img
                  src={exp.logo}
                  alt={`${exp.company}_logo`}
                  className="w-32 h-auto"
                />
              </div>
              <div className="mt-5 md:mt-0 md:w-4/5">
                <h3 className="text-xl font-bold text-left text-black dark:text-white md:text-2xl">
                  {exp.company}
                </h3>
                <p className="font-semibold text-left text-blue-900 dark:text-yellow-400">
                  {exp.position}
                </p>
                {exp && exp.descriptions && exp.descriptions.length > 0 ? (
                  <div className="mt-2 text-sm text-left text-black dark:text-white">
                    <ul className="ml-3 list-disc">
                      {exp.descriptions.map((description, idx) => {
                        return <li key={idx}>{description}</li>;
                      })}
                    </ul>
                  </div>
                ) : null}
                <p className="mt-2 text-sm font-semibold text-left text-black dark:text-white">
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
