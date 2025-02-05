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

const PortfolioProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const smallScreen = useMediaQuery({ query: "(max-width: 500px)" });

  const portfolioProjects = [
    {
      name: "eDot",
      description: "Mobile app schedule meeting & instant meeting",
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
  ];
  if (
    portfolioProjects &&
    Array.isArray(portfolioProjects) &&
    portfolioProjects.length > 0
  ) {
    return (
      <div className="max-w-4xl mx-auto py-32">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 dark:text-blue-400 mb-6">
          Portfolio Projects
        </h2>
        {portfolioProjects.map((portfolioProject, index) => {
          const { name, description, images } = portfolioProject || {};
          return (
            <div
              key={index}
              className="w-full flex flex-col justify-center bg-transparent p-4 pb-6"
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
                  onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                >
                  {images.map((image, index) => (
                    <SwiperSlide
                      key={index}
                      className="transition-all duration-500 flex justify-center align-center"
                    >
                      <div
                        className={`relative flex items-center justify-center bg-gray-300 dark:bg-gray-700 rounded-lg transition-all duration-500 ${
                          index === activeIndex
                            ? "w-[300px] h-[500px] md:w-[400px] md:h-[600px] scale-100 opacity-100 z-10 -ml-24 md:-ml-14" // Active image is fully visible
                            : "w-[190px] h-[400px] md:w-[340px] md:h-[550px] scale-95 opacity-70 -translate-x-5 blur-sm z-0" // Inactive images look slightly behind
                        }`}
                      >
                        <img
                          src={image.img_url}
                          alt={`slide-${index}`}
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
