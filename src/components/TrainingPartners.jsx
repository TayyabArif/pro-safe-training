import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Divider from "./Divider";

function NewBrands() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
      <section className="bg-gray-150">
        <div className="py-8 lg:py-16 mx-auto max-w-screen-xl md:px-4">
          <h2 className="mb-8 text-4xl md:text-5xl font-bold tracking-tight leading-tight text-center text-gray-900 ">
            Training partners
          </h2>
          <h2 className="mb-8 lg:mb-16 text-2xl md:text-2xl font-medium tracking-tight leading-tight text-center text-gray-900 w-full flex justify-center">
            <p className="w-[80%]">
              Our company is committed to providing the best first aid training available, in collaboration with the Canadian Red Cross, WorkSafe BC and other trusted organizations.
            </p>
          </h2>
          <div className="carousel-container">
            <Slider {...settings}>
              <div className="slider-item h-[110px] flex justify-center items-center text-center">
                <a href="#" className="flex justify-center items-center">
                  <img
                    className="relative"
                    src="https://www.prosafetraining.ca/wp-content/uploads/2023/04/1-300x300.png"
                    alt="Copywriter"
                    // height={35}
                    // width={100}
                  />
                </a>
              </div>
              <div className="slider-item h-[110px] flex justify-center">
                <a
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
                </a>
              </div>
              <div className="slider-item h-[110px] flex justify-center">
                <a href="#" className="flex justify-center items-center">
                  <img
                    className="relative"
                    src="https://www.prosafetraining.ca/wp-content/uploads/2023/04/1-300x300.png"
                    alt="Copywriter"
                    // height={35}
                    // width={100}
                  />
                </a>
              </div>
              <div className="slider-item h-[110px] flex justify-center">
                <a href="#" className="flex justify-center items-center">
                  <img
                    className="relative"
                    src="https://www.prosafetraining.ca/wp-content/uploads/2023/04/1-300x300.png"
                    alt="Copywriter"
                    // height={35}
                    // width={100}
                  />
                </a>
              </div>
              <div className="slider-item h-[110px] flex justify-center">
                <a href="#" className="flex justify-center items-center">
                  <img
                    className="relative"
                    src="https://www.prosafetraining.ca/wp-content/uploads/2023/04/5-300x300.png"
                    alt="BusinessMethods"
                    // height={50}
                    // width={150}
                  />
                </a>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewBrands;
