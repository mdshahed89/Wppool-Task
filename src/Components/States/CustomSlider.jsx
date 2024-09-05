import React from "react";
import StateImg1 from "../../assets/StateImg1.png";
import StateImg2 from "../../assets/StateImg2.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="custom-next-arrow absolute -bottom-8 z-50 left-0 transform -translate-y-1/2"
      onClick={onClick}
    >
      <FaArrowLeft className="text-[#2042B6] text-[2.5rem] p-3 rounded-full bg-[#fff] cursor-pointer" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="custom-next-arrow absolute -bottom-8 z-50 left-14 transform -translate-y-1/2"
      onClick={onClick}
    >
      <FaArrowRight className="text-[#2042B6] text-[2.5rem] p-3 rounded-full bg-[#fff] cursor-pointer" />
    </div>
  );
}

function CustomSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=" mt-7 ">
      <div className=" w-full ">
        <Slider {...settings}>
          <div className=" w-full h-full outline-none ">
            <div>
              <img
                src={StateImg1}
                alt=""
                className=" w-full h-full object-cover "
              />
            </div>
          </div>
          <div className=" w-full h-full outline-none ">
            <div>
              <img
                src={StateImg2}
                alt=""
                className=" w-full h-full object-cover "
              />
            </div>
          </div>
          <div className=" w-full h-full outline-none ">
            <div>
              <img
                src={StateImg1}
                alt=""
                className=" w-full h-full object-cover "
              />
            </div>
          </div>
          <div className=" w-full h-full outline-none ">
            <div>
              <img
                src={StateImg2}
                alt=""
                className=" w-full h-full object-cover "
              />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default CustomSlider;
