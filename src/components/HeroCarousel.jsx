import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ourMission from '../images/ourMission.jpg'
import firstaid1 from '../images/firstaid1.png'
import firstaid2 from '../images/firstaid2.png'
import firstaid3 from '../images/firstaid3.png'
import { motion } from "framer-motion";

function HeroCarousel() {
    const CustomPrevArrow = (props) => (
      <div className="absolute left-[2%] top-[45%] z-[10] cursor-pointer" onClick={props.onClick}>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
      </div>
    );

    const CustomNextArrow = (props) => (
      <div className="absolute right-[2%] bottom-[47%] z-[10] cursor-pointer" onClick={props.onClick}>
         <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
      </div>
    );
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.5 }}
    exit={{ opacity: 0, y: 60 }}
      className="w-full"
    >
      <div className="carousel-container">
        <Slider {...settings}>
          <div className="slider-item h-[600px] w-full flex justify-center items-center text-center">
            <img src={firstaid1} className="w-full" alt="firstaid1" />
          </div>
          <div className="slider-item h-[600px] w-full flex justify-center">
            <img src={firstaid2} className="w-full" alt="firstaid2" />
          </div>
          <div className="slider-item h-[600px] w-full flex justify-center">
            <img src={firstaid3} className="w-full" alt="firstaid3" />
          </div>
        </Slider>
      </div>
      </motion.div>
  );
}

export default HeroCarousel;
