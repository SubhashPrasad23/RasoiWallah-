import React from "react";
import data from "../utils/Mockdata";
import Slider from "react-slick";
import { IoArrowForward } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Inline styles to hide arrows (CSS class approach is better)
const slideStyles = {
  display: "none",
};

function Slide() {
  function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    arrow: false, // Arrow navigation is disabled
    prevArrow: null, // Disable prev arrow
    nextArrow: null, // Disable next arrow
  };

  return (
    <div className="mt-20 relative w-full overflow-hidden">
      <Slider {...settings}>
        {data.map((item) => (
          <img
            key={item.id}
            src={item.img}
            alt={item.name}
            className="w-52 h-96"
          />
        ))}
      </Slider>
      <div className="absolute top-16 left-5 md:left-10 md:top-24">
        <p className="md:text-6xl text-4xl text-yellow-500 font-bold">
          From Our Kitchen to Your Table <br />
          <p className="text-semibold text-4xl text-white inline-block">
            Your Favorite Meals, Just a Click Away. <br />
            <span className="font-medium text-2xl ">
              Order, Relax, and Enjoy!
            </span>
            <br />
            <button
              className="inline-flex items-center justify-center font-semibold w-48 md:px-6 px-3 py-2 mb-2 text-lg text-white bg-orange-500 rounded-md hover:bg-orange-600 hover:text-white sm:w-auto sm:mb-0"
              onClick={() => scrollToSection("sectionId")}
            >
              Get Started <IoArrowForward className="ml-1" />
            </button>
          </p>
        </p>
      </div>
    </div>
  );
}

export default Slide;
