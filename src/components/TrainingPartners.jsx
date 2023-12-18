import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "./Card";
import Divider from "./Divider";

function NewBrands() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 mx-auto max-w-screen-xl md:px-4">
          <h2 className="mb-4 pl-5 text-xl md:text-3xl font-bold tracking-tight leading-tight text-center text-[#a23c5d] dark:text-primary-text ">
            Still don't know what certification you need?
          </h2>
          <h2 className="mb-4 pl-5 lg:mb-10 text-2xl md:text-5xl font-bold tracking-tight leading-tight text-center text-gray-900 dark:text-primary-text w-full">
            <p className="">
              Discover Our Programs
            </p>
          </h2>
          <div className="carousel-container">
            <Slider {...settings}>
              <div className="slider-item h-full w-full flex justify-center items-center text-center">
                {/* <a href="#" className="flex justify-center items-center">
                  <img
                    className="relative"
                    src="https://www.prosafetraining.ca/wp-content/uploads/2023/04/1-300x300.png"
                    alt="Copywriter"
                    // height={35}
                    // width={100}
                  />
                </a> */}
                <Card />
              </div>
              <div className="slider-item h-[110px] flex justify-center">
                {/* <a
                  href="#"
                  className="flex justify-center items-center -mt-[20px]"
                >
                  <img
                    className="relative "
                    src="https://www.prosafetraining.ca/wp-content/uploads/2023/04/2-300x300.png"
                    alt="EnteronFire"
                    // height={35}
                    // width={100}
                  />
                </a> */}
                <Card />
              </div>
              <div className="slider-item h-[110px] flex justify-center">
                {/* <a href="#" className="flex justify-center items-center">
                  <img
                    className="relative"
                    src="https://www.prosafetraining.ca/wp-content/uploads/2023/04/1-300x300.png"
                    alt="Copywriter"
                    // height={35}
                    // width={100}
                  />
                </a> */}
                <Card />
              </div>
              <div className="slider-item h-[110px] flex justify-center">
                {/* <a href="#" className="flex justify-center items-center">
                  <img
                    className="relative"
                    src="https://www.prosafetraining.ca/wp-content/uploads/2023/04/1-300x300.png"
                    alt="Copywriter"
                    // height={35}
                    // width={100}
                  />
                </a> */}
                <Card />
              </div>
              <div className="slider-item h-[110px] flex justify-center">
                {/* <a href="#" className="flex justify-center items-center">
                  <img
                    className="relative"
                    src="https://www.prosafetraining.ca/wp-content/uploads/2023/04/5-300x300.png"
                    alt="BusinessMethods"
                    // height={50}
                    // width={150}
                  />
                </a> */}
                <Card />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewBrands;
