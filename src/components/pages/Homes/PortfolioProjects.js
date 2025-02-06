import React, { useState } from "react";

// Image swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

// react-responsive
import { useMediaQuery } from "react-responsive";

// Images
import eDot_1 from "../../../assets/images/portfolioProjects/eDot/eDot_1.png";
import eDot_2 from "../../../assets/images/portfolioProjects/eDot/eDot_2.png";
import eDot_3 from "../../../assets/images/portfolioProjects/eDot/eDot_3.png";
import eDot_4 from "../../../assets/images/portfolioProjects/eDot/eDot_4.png";
import eDot_5 from "../../../assets/images/portfolioProjects/eDot/eDot_5.png";
import eDot_6 from "../../../assets/images/portfolioProjects/eDot/eDot_6.png";
import eDot_7 from "../../../assets/images/portfolioProjects/eDot/eDot_7.png";
import eDot_8 from "../../../assets/images/portfolioProjects/eDot/eDot_8.png";
import eDot_9 from "../../../assets/images/portfolioProjects/eDot/eDot_9.png";
import eDot_10 from "../../../assets/images/portfolioProjects/eDot/eDot_10.png";
import eDot_11 from "../../../assets/images/portfolioProjects/eDot/eDot_11.png";
import eDot_12 from "../../../assets/images/portfolioProjects/eDot/eDot_12.png";
import eDot_13 from "../../../assets/images/portfolioProjects/eDot/eDot_13.png";
import eDot_14 from "../../../assets/images/portfolioProjects/eDot/eDot_14.png";
import eDot_15 from "../../../assets/images/portfolioProjects/eDot/eDot_15.png";
import eDot_16 from "../../../assets/images/portfolioProjects/eDot/eDot_16.png";
import eDot_17 from "../../../assets/images/portfolioProjects/eDot/eDot_17.png";
import eDot_18 from "../../../assets/images/portfolioProjects/eDot/eDot_18.png";
import eDot_19 from "../../../assets/images/portfolioProjects/eDot/eDot_19.png";
import eDot_20 from "../../../assets/images/portfolioProjects/eDot/eDot_20.png";
import eDot_21 from "../../../assets/images/portfolioProjects/eDot/eDot_21.png";
import eDot_22 from "../../../assets/images/portfolioProjects/eDot/eDot_22.png";
import eDot_23 from "../../../assets/images/portfolioProjects/eDot/eDot_23.png";
import eDot_24 from "../../../assets/images/portfolioProjects/eDot/eDot_24.png";
import eDot_25 from "../../../assets/images/portfolioProjects/eDot/eDot_25.png";
import eDot_26 from "../../../assets/images/portfolioProjects/eDot/eDot_26.png";
import eDot_27 from "../../../assets/images/portfolioProjects/eDot/eDot_27.png";
import eDot_28 from "../../../assets/images/portfolioProjects/eDot/eDot_28.png";
import eDot_29 from "../../../assets/images/portfolioProjects/eDot/eDot_29.png";
import eDot_30 from "../../../assets/images/portfolioProjects/eDot/eDot_30.png";
import eDot_31 from "../../../assets/images/portfolioProjects/eDot/eDot_31.png";
import eDot_32 from "../../../assets/images/portfolioProjects/eDot/eDot_32.png";
import eDot_33 from "../../../assets/images/portfolioProjects/eDot/eDot_33.png";
import eDot_34 from "../../../assets/images/portfolioProjects/eDot/eDot_34.png";

import ecommerce_1 from "../../../assets/images/portfolioProjects/ecommerce/ecommerce_1.png";
import ecommerce_2 from "../../../assets/images/portfolioProjects/ecommerce/ecommerce_2.png";
import ecommerce_3 from "../../../assets/images/portfolioProjects/ecommerce/ecommerce_3.png";
import ecommerce_4 from "../../../assets/images/portfolioProjects/ecommerce/ecommerce_4.png";
import ecommerce_5 from "../../../assets/images/portfolioProjects/ecommerce/ecommerce_5.png";
import ecommerce_6 from "../../../assets/images/portfolioProjects/ecommerce/ecommerce_6.png";
import ecommerce_7 from "../../../assets/images/portfolioProjects/ecommerce/ecommerce_7.png";
import ecommerce_8 from "../../../assets/images/portfolioProjects/ecommerce/ecommerce_8.png";
import ecommerce_9 from "../../../assets/images/portfolioProjects/ecommerce/ecommerce_9.png";
import ecommerce_10 from "../../../assets/images/portfolioProjects/ecommerce/ecommerce_10.png";
import ecommerce_11 from "../../../assets/images/portfolioProjects/ecommerce/ecommerce_11.png";
import ecommerce_12 from "../../../assets/images/portfolioProjects/ecommerce/ecommerce_12.png";
import ecommerce_13 from "../../../assets/images/portfolioProjects/ecommerce/ecommerce_13.png";
import ecommerce_14 from "../../../assets/images/portfolioProjects/ecommerce/ecommerce_14.png";
import ecommerce_15 from "../../../assets/images/portfolioProjects/ecommerce/ecommerce_15.png";
import ecommerce_16 from "../../../assets/images/portfolioProjects/ecommerce/ecommerce_16.png";
import ecommerce_17 from "../../../assets/images/portfolioProjects/ecommerce/ecommerce_17.png";
import ecommerce_18 from "../../../assets/images/portfolioProjects/ecommerce/ecommerce_18.png";
import ecommerce_19 from "../../../assets/images/portfolioProjects/ecommerce/ecommerce_19.png";
import ecommerce_20 from "../../../assets/images/portfolioProjects/ecommerce/ecommerce_20.png";
import ecommerce_21 from "../../../assets/images/portfolioProjects/ecommerce/ecommerce_21.png";
import ecommerce_22 from "../../../assets/images/portfolioProjects/ecommerce/ecommerce_22.png";
import ecommerce_23 from "../../../assets/images/portfolioProjects/ecommerce/ecommerce_23.png";
import ecommerce_24 from "../../../assets/images/portfolioProjects/ecommerce/ecommerce_24.png";
import ecommerce_25 from "../../../assets/images/portfolioProjects/ecommerce/ecommerce_25.png";
import ecommerce_26 from "../../../assets/images/portfolioProjects/ecommerce/ecommerce_26.png";
import ecommerce_27 from "../../../assets/images/portfolioProjects/ecommerce/ecommerce_27.png";
import ecommerce_28 from "../../../assets/images/portfolioProjects/ecommerce/ecommerce_28.png";
import ecommerce_29 from "../../../assets/images/portfolioProjects/ecommerce/ecommerce_29.png";
import ecommerce_30 from "../../../assets/images/portfolioProjects/ecommerce/ecommerce_30.png";
import ecommerce_31 from "../../../assets/images/portfolioProjects/ecommerce/ecommerce_31.png";
import ecommerce_32 from "../../../assets/images/portfolioProjects/ecommerce/ecommerce_32.png";
import ecommerce_33 from "../../../assets/images/portfolioProjects/ecommerce/ecommerce_33.png";
import ecommerce_34 from "../../../assets/images/portfolioProjects/ecommerce/ecommerce_34.png";
import ecommerce_35 from "../../../assets/images/portfolioProjects/ecommerce/ecommerce_35.png";
import ecommerce_36 from "../../../assets/images/portfolioProjects/ecommerce/ecommerce_36.png";
import ecommerce_37 from "../../../assets/images/portfolioProjects/ecommerce/ecommerce_37.png";
import ecommerce_38 from "../../../assets/images/portfolioProjects/ecommerce/ecommerce_38.png";
import ecommerce_39 from "../../../assets/images/portfolioProjects/ecommerce/ecommerce_39.png";
import ecommerce_40 from "../../../assets/images/portfolioProjects/ecommerce/ecommerce_40.png";
import ecommerce_41 from "../../../assets/images/portfolioProjects/ecommerce/ecommerce_41.png";
import ecommerce_42 from "../../../assets/images/portfolioProjects/ecommerce/ecommerce_42.png";
import ecommerce_43 from "../../../assets/images/portfolioProjects/ecommerce/ecommerce_43.png";
import ecommerce_44 from "../../../assets/images/portfolioProjects/ecommerce/ecommerce_44.png";

const PortfolioProjects = (props) => {
  const { lang, t } = props || {};
  const [activeIndex, setActiveIndex] = useState({
    eDot: "eDot-0",
    Maplexxon: "Maplexxon-0",
  });

  const smallScreen = useMediaQuery({ query: "(max-width: 500px)" });

  const portfolioProjects = [
    {
      name: "eDot",
      description: t("edot_portfolio_project_description", lang),
      images: [
        { img_url: eDot_1 },
        { img_url: eDot_2 },
        { img_url: eDot_3 },
        { img_url: eDot_4 },
        { img_url: eDot_5 },
        { img_url: eDot_6 },
        { img_url: eDot_6 },
        { img_url: eDot_7 },
        { img_url: eDot_8 },
        { img_url: eDot_9 },
        { img_url: eDot_10 },
        { img_url: eDot_11 },
        { img_url: eDot_12 },
        { img_url: eDot_13 },
        { img_url: eDot_14 },
        { img_url: eDot_15 },
        { img_url: eDot_16 },
        { img_url: eDot_17 },
        { img_url: eDot_18 },
        { img_url: eDot_19 },
        { img_url: eDot_20 },
        { img_url: eDot_21 },
        { img_url: eDot_22 },
        { img_url: eDot_23 },
        { img_url: eDot_24 },
        { img_url: eDot_25 },
        { img_url: eDot_26 },
        { img_url: eDot_27 },
        { img_url: eDot_28 },
        { img_url: eDot_29 },
        { img_url: eDot_30 },
        { img_url: eDot_31 },
        { img_url: eDot_32 },
        { img_url: eDot_33 },
        { img_url: eDot_34 },
      ],
    },
    {
      name: "Maplexxon",
      description: t("ecommerce_portfolio_project_description", lang),
      images: [
        { img_url: ecommerce_1 },
        { img_url: ecommerce_2 },
        { img_url: ecommerce_3 },
        { img_url: ecommerce_4 },
        { img_url: ecommerce_5 },
        { img_url: ecommerce_6 },
        { img_url: ecommerce_6 },
        { img_url: ecommerce_7 },
        { img_url: ecommerce_8 },
        { img_url: ecommerce_9 },
        { img_url: ecommerce_10 },
        { img_url: ecommerce_11 },
        { img_url: ecommerce_12 },
        { img_url: ecommerce_13 },
        { img_url: ecommerce_14 },
        { img_url: ecommerce_15 },
        { img_url: ecommerce_16 },
        { img_url: ecommerce_17 },
        { img_url: ecommerce_18 },
        { img_url: ecommerce_19 },
        { img_url: ecommerce_20 },
        { img_url: ecommerce_21 },
        { img_url: ecommerce_22 },
        { img_url: ecommerce_23 },
        { img_url: ecommerce_24 },
        { img_url: ecommerce_25 },
        { img_url: ecommerce_26 },
        { img_url: ecommerce_27 },
        { img_url: ecommerce_28 },
        { img_url: ecommerce_29 },
        { img_url: ecommerce_30 },
        { img_url: ecommerce_31 },
        { img_url: ecommerce_32 },
        { img_url: ecommerce_33 },
        { img_url: ecommerce_34 },
        { img_url: ecommerce_35 },
        { img_url: ecommerce_36 },
        { img_url: ecommerce_37 },
        { img_url: ecommerce_38 },
        { img_url: ecommerce_39 },
        { img_url: ecommerce_40 },
        { img_url: ecommerce_41 },
        { img_url: ecommerce_42 },
        { img_url: ecommerce_43 },
        { img_url: ecommerce_44 },
      ],
    },
  ];

  if (
    portfolioProjects &&
    Array.isArray(portfolioProjects) &&
    portfolioProjects.length > 0
  ) {
    return (
      <div className="max-w-4xl mx-auto py-32">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 dark:text-blue-400 mb-6">
          {t("portfolio_projects_title", lang)}
        </h2>
        {portfolioProjects.map((portfolioProject, index) => {
          const { name, description, images } = portfolioProject || {};
          return (
            <div
              key={index}
              className="w-full flex flex-col justify-center bg-transparent p-4 pb-8"
            >
              <div className="mb-3">
                <div className="text-3xl font-bold text-gray-900 dark:text-gray-200">
                  {name}
                </div>
                <div className="text-sm md:text-lg mt-2 text-gray-800 dark:text-gray-300">
                  {description}
                </div>
              </div>
              {images && Array.isArray(images) && images.length > 0 ? (
                <Swiper
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={3}
                  coverflowEffect={{
                    rotate: 0,
                    stretch: smallScreen ? -50 : 100, // Pulls side images closer
                    depth: 150, // Makes it feel like images stack behind
                    modifier: 1.1,
                    slideShadows: false,
                  }}
                  pagination={false}
                  modules={[EffectCoverflow, Pagination]}
                  className="w-full"
                  onSlideChange={(swiper) =>
                    setActiveIndex({
                      ...activeIndex,
                      [name]: `${name}-${swiper.activeIndex}`,
                    })
                  }
                >
                  {images.map((image, idx) => (
                    <SwiperSlide
                      key={`${name}-${idx}`}
                      className="transition-all duration-500 flex justify-center align-center"
                    >
                      <div
                        className={`relative flex items-center justify-center bg-gray-300 dark:bg-gray-700 rounded-lg transition-all duration-500 ${
                          `${name}-${idx}` === activeIndex[name]
                            ? "w-[323px] h-[500px] md:w-[400px] md:h-[600px] scale-100 opacity-100 z-10 -ml-24 md:-ml-14" // Active image is fully visible
                            : "w-[190px] h-[400px] md:w-[340px] md:h-[550px] scale-95 opacity-70 -translate-x-5 blur-sm z-0" // Inactive images look slightly behind
                        }`}
                      >
                        <img
                          src={image.img_url}
                          alt={`slide-${name}-${idx}`}
                          className="w-full h-full object-contain rounded-lg"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : null}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
};

export default PortfolioProjects;
