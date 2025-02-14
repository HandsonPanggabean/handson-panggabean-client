import React, { useEffect, useRef, useState } from "react";

// Image swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

// react-responsive
import { useMediaQuery } from "react-responsive";

// react lucide
import { Maximize2, CirclePause, CirclePlay } from "lucide-react";

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

import X0PA_1 from "../../../assets/images/portfolioProjects/x0pa/X0PA_1.png";
import X0PA_2 from "../../../assets/images/portfolioProjects/x0pa/X0PA_2.png";
import X0PA_3 from "../../../assets/images/portfolioProjects/x0pa/X0PA_3.png";
import X0PA_4 from "../../../assets/images/portfolioProjects/x0pa/X0PA_4.png";
import X0PA_5 from "../../../assets/images/portfolioProjects/x0pa/X0PA_5.png";
import X0PA_6 from "../../../assets/images/portfolioProjects/x0pa/X0PA_6.png";

import ccs_1 from "../../../assets/images/portfolioProjects/ccs/ccs_1.png";
import ccs_2 from "../../../assets/images/portfolioProjects/ccs/ccs_2.png";
import ccs_3 from "../../../assets/images/portfolioProjects/ccs/ccs_3.png";
import ccs_4 from "../../../assets/images/portfolioProjects/ccs/ccs_4.png";
import ccs_5 from "../../../assets/images/portfolioProjects/ccs/ccs_5.png";
import ccs_6 from "../../../assets/images/portfolioProjects/ccs/ccs_6.png";
import ccs_7 from "../../../assets/images/portfolioProjects/ccs/ccs_7.png";
import ccs_8 from "../../../assets/images/portfolioProjects/ccs/ccs_8.png";
import ccs_9 from "../../../assets/images/portfolioProjects/ccs/ccs_9.png";
import ccs_10 from "../../../assets/images/portfolioProjects/ccs/ccs_10.png";
import ccs_11 from "../../../assets/images/portfolioProjects/ccs/ccs_11.png";
import ccs_12 from "../../../assets/images/portfolioProjects/ccs/ccs_12.png";
import ccs_13 from "../../../assets/images/portfolioProjects/ccs/ccs_13.png";
import ccs_14 from "../../../assets/images/portfolioProjects/ccs/ccs_14.png";

// Components
import FullscreenImageViewer from "../../FullscreenImageViewer"; // Import the component

const PortfolioProjects = (props) => {
  const { lang, t } = props || {};

  const smallScreen = useMediaQuery({ query: "(max-width: 500px)" });

  const [portfolioProjects, setPortfolioProjects] = useState([
    {
      name: "eDot",
      description: t("edot_portfolio_project_description", lang),
      autoplayEnabled: false,
      images: [
        { img_url: eDot_1, activeIndex: true },
        { img_url: eDot_2, activeIndex: false },
        { img_url: eDot_3, activeIndex: false },
        { img_url: eDot_4, activeIndex: false },
        { img_url: eDot_5, activeIndex: false },
        { img_url: eDot_6, activeIndex: false },
        { img_url: eDot_7, activeIndex: false },
        { img_url: eDot_8, activeIndex: false },
        { img_url: eDot_9, activeIndex: false },
        { img_url: eDot_10, activeIndex: false },
        { img_url: eDot_11, activeIndex: false },
        { img_url: eDot_12, activeIndex: false },
        { img_url: eDot_13, activeIndex: false },
        { img_url: eDot_14, activeIndex: false },
        { img_url: eDot_15, activeIndex: false },
        { img_url: eDot_16, activeIndex: false },
        { img_url: eDot_17, activeIndex: false },
        { img_url: eDot_18, activeIndex: false },
        { img_url: eDot_19, activeIndex: false },
        { img_url: eDot_20, activeIndex: false },
        { img_url: eDot_21, activeIndex: false },
        { img_url: eDot_22, activeIndex: false },
        { img_url: eDot_23, activeIndex: false },
        { img_url: eDot_24, activeIndex: false },
        { img_url: eDot_25, activeIndex: false },
        { img_url: eDot_26, activeIndex: false },
        { img_url: eDot_27, activeIndex: false },
        { img_url: eDot_28, activeIndex: false },
        { img_url: eDot_29, activeIndex: false },
        { img_url: eDot_30, activeIndex: false },
        { img_url: eDot_31, activeIndex: false },
        { img_url: eDot_32, activeIndex: false },
        { img_url: eDot_33, activeIndex: false },
        { img_url: eDot_34, activeIndex: false },
      ],
    },
    {
      name: "Maplexxon",
      description: t("ecommerce_portfolio_project_description", lang),
      autoplayEnabled: false,
      images: [
        { img_url: ecommerce_1, activeIndex: true },
        { img_url: ecommerce_2, activeIndex: false },
        { img_url: ecommerce_3, activeIndex: false },
        { img_url: ecommerce_4, activeIndex: false },
        { img_url: ecommerce_5, activeIndex: false },
        { img_url: ecommerce_6, activeIndex: false },
        { img_url: ecommerce_7, activeIndex: false },
        { img_url: ecommerce_8, activeIndex: false },
        { img_url: ecommerce_9, activeIndex: false },
        { img_url: ecommerce_10, activeIndex: false },
        { img_url: ecommerce_11, activeIndex: false },
        { img_url: ecommerce_12, activeIndex: false },
        { img_url: ecommerce_13, activeIndex: false },
        { img_url: ecommerce_14, activeIndex: false },
        { img_url: ecommerce_15, activeIndex: false },
        { img_url: ecommerce_16, activeIndex: false },
        { img_url: ecommerce_17, activeIndex: false },
        { img_url: ecommerce_18, activeIndex: false },
        { img_url: ecommerce_19, activeIndex: false },
        { img_url: ecommerce_20, activeIndex: false },
        { img_url: ecommerce_21, activeIndex: false },
        { img_url: ecommerce_22, activeIndex: false },
        { img_url: ecommerce_23, activeIndex: false },
        { img_url: ecommerce_24, activeIndex: false },
        { img_url: ecommerce_25, activeIndex: false },
        { img_url: ecommerce_26, activeIndex: false },
        { img_url: ecommerce_27, activeIndex: false },
        { img_url: ecommerce_28, activeIndex: false },
        { img_url: ecommerce_29, activeIndex: false },
        { img_url: ecommerce_30, activeIndex: false },
        { img_url: ecommerce_31, activeIndex: false },
        { img_url: ecommerce_32, activeIndex: false },
        { img_url: ecommerce_33, activeIndex: false },
        { img_url: ecommerce_34, activeIndex: false },
        { img_url: ecommerce_35, activeIndex: false },
        { img_url: ecommerce_36, activeIndex: false },
        { img_url: ecommerce_37, activeIndex: false },
        { img_url: ecommerce_38, activeIndex: false },
        { img_url: ecommerce_39, activeIndex: false },
        { img_url: ecommerce_40, activeIndex: false },
        { img_url: ecommerce_41, activeIndex: false },
        { img_url: ecommerce_42, activeIndex: false },
        { img_url: ecommerce_43, activeIndex: false },
        { img_url: ecommerce_44, activeIndex: false },
      ],
    },
    {
      name: "X0PA",
      description: t("x0pa_portfolio_project_description", lang),
      autoplayEnabled: false,
      images: [
        { img_url: X0PA_1, activeIndex: true },
        { img_url: X0PA_2, activeIndex: false },
        { img_url: X0PA_3, activeIndex: false },
        { img_url: X0PA_4, activeIndex: false },
        { img_url: X0PA_5, activeIndex: false },
        { img_url: X0PA_6, activeIndex: false },
      ],
    },
    {
      name: "ccs",
      description: t("ccs_portfolio_project_description", lang),
      autoplayEnabled: false,
      images: [
        { img_url: ccs_1, activeIndex: true },
        { img_url: ccs_2, activeIndex: false },
        { img_url: ccs_3, activeIndex: false },
        { img_url: ccs_4, activeIndex: false },
        { img_url: ccs_5, activeIndex: false },
        { img_url: ccs_6, activeIndex: false },
        { img_url: ccs_7, activeIndex: false },
        { img_url: ccs_8, activeIndex: false },
        { img_url: ccs_9, activeIndex: false },
        { img_url: ccs_10, activeIndex: false },
        { img_url: ccs_11, activeIndex: false },
        { img_url: ccs_12, activeIndex: false },
        { img_url: ccs_13, activeIndex: false },
        { img_url: ccs_14, activeIndex: false },
      ],
    },
  ]);

  const handleOnSlideChange = (name, swiper) => {
    let finalPortfolioProjects = portfolioProjects;
    finalPortfolioProjects = finalPortfolioProjects.map((portfolio) => {
      if (name === portfolio.name) {
        let finalImages = portfolio.images;
        finalImages = finalImages.map((image, idx) => {
          if (swiper.activeIndex === idx) {
            image.activeIndex = true;
          } else {
            image.activeIndex = false;
          }
          return image;
        });
        portfolio.images = finalImages;
      }
      return portfolio;
    });
    setPortfolioProjects(finalPortfolioProjects);
  };

  const swiperRefs = useRef({});

  const handleAutoPlaySlide = (name) => {
    const updatedProjects = portfolioProjects.map((portfolio) => {
      if (portfolio.name === name) {
        const newAutoplayState = !portfolio.autoplayEnabled;

        // Start or stop autoplay directly via Swiper instance
        if (swiperRefs.current[name]) {
          if (newAutoplayState) {
            swiperRefs.current[name].autoplay.start(); // Start autoplay
          } else {
            swiperRefs.current[name].autoplay.stop(); // Stop autoplay
          }
        }

        return { ...portfolio, autoplayEnabled: newAutoplayState };
      }
      return portfolio;
    });

    setPortfolioProjects(updatedProjects);
  };

  const handleChangeDescriptionForEachProject = (lang) => {
    const updatedProjects = portfolioProjects.map((portfolio) => {
      portfolio.description = t(
        `${
          portfolio.name === "eDot"
            ? "edot"
            : portfolio.name === "X0PA"
            ? "x0pa"
            : portfolio.name === "Maplexxon"
            ? "ecommerce"
            : "ccs"
        }_portfolio_project_description`,
        lang
      );

      return portfolio;
    });

    setPortfolioProjects(updatedProjects);
  };

  const [fullscreenImages, setFullscreenImages] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openFullscreen = (images, index) => {
    setFullscreenImages(images);
    setCurrentImageIndex(index);
  };

  const closeFullscreen = () => {
    setFullscreenImages(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === fullscreenImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? fullscreenImages.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    handleChangeDescriptionForEachProject(lang); // eslint-disable-next-line
  }, [lang]);

  if (
    portfolioProjects &&
    Array.isArray(portfolioProjects) &&
    portfolioProjects.length > 0
  ) {
    return (
      <div className="max-w-4xl mx-auto py-32">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 dark:text-yellow-400 mb-6">
          {t("portfolio_projects_title", lang)}
        </h2>
        {portfolioProjects.map((portfolioProject, index) => {
          const { name, description, images, autoplayEnabled } =
            portfolioProject || {};

          return (
            <div
              key={index}
              className="w-full flex flex-col justify-center bg-transparent p-4 pb-20"
            >
              <div className="mb-8">
                <div className="flex gap-4 items-center justify-center">
                  <div className="text-3xl font-bold text-gray-900 dark:text-gray-200">
                    {name && name === "ccs"
                      ? "Combined Clinics Sustainability"
                      : name}
                  </div>
                  <div
                    onClick={() => handleAutoPlaySlide(name)}
                    className="flex items-center justify-center rounded-full relative shadow-lg focus:outline-none cursor-pointer"
                  >
                    <div className="rounded-full flex items-center justify-center">
                      {autoplayEnabled ? (
                        <CirclePause className="w-8 h-8 text-black dark:text-white" />
                      ) : (
                        <CirclePlay className="w-8 h-8 text-black dark:text-white" />
                      )}
                    </div>
                  </div>
                </div>
                <div className="text-sm md:text-lg mt-2 text-gray-800 dark:text-yellow-400">
                  {description}
                </div>
              </div>
              {images && Array.isArray(images) && images.length > 0 ? (
                <Swiper
                  onSwiper={(swiper) => (swiperRefs.current[name] = swiper)}
                  modules={[EffectCoverflow, Pagination, Autoplay]}
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
                  className="w-full"
                  onSlideChange={(swiper) => handleOnSlideChange(name, swiper)}
                  autoplay={
                    autoplayEnabled
                      ? { delay: 3000, disableOnInteraction: false }
                      : false
                  }
                  loop={false}
                >
                  {images.map((image, idx) => (
                    <SwiperSlide
                      key={`${name}-${idx}`}
                      className="transition-all duration-500 flex justify-center align-center"
                    >
                      <div
                        className={`relative flex items-center justify-center bg-gray-300 dark:bg-gray-700 rounded-lg transition-all duration-500 ${
                          image.activeIndex
                            ? `w-[323px] ${
                                name === "X0PA" ? "h-[250px]" : "h-[500px]"
                              } md:w-[400px] ${
                                name === "X0PA"
                                  ? "md:h-[300px]"
                                  : "md:h-[600px]"
                              } scale-100 opacity-100 z-10 -ml-24 md:-ml-14` // Active image is fully visible
                            : `w-[190px] ${
                                name === "X0PA" ? "h-[225px]" : "h-[400px]"
                              } md:w-[340px] ${
                                name === "X0PA"
                                  ? "md:h-[250px]"
                                  : "md:h-[550px]"
                              } scale-95 opacity-70 -translate-x-5 blur-sm z-0` // Inactive images look slightly behind
                        }`}
                      >
                        <img
                          src={image.img_url}
                          alt={`slide-${name}-${idx}`}
                          className="w-full h-full object-contain rounded-lg"
                        />
                        {image.activeIndex ? (
                          <div
                            onClick={() =>
                              openFullscreen(portfolioProject.images, idx)
                            }
                            className="absolute top-2 right-2 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-80 transition cursor-pointer"
                          >
                            <Maximize2 className="w-5 h-5 text-white" />
                          </div>
                        ) : null}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : null}
            </div>
          );
        })}
        {fullscreenImages && (
          <FullscreenImageViewer
            images={fullscreenImages}
            currentIndex={currentImageIndex}
            onClose={closeFullscreen}
            onNext={nextImage}
            onPrev={prevImage}
          />
        )}
      </div>
    );
  } else {
    return null;
  }
};

export default PortfolioProjects;
