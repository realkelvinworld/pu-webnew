"use client";
import { useState } from "react";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { Circle } from "react-feather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import {
//   slide1,
//   slide10,
//   slide2,
//   slide3,
//   slide4,
//   slide5,
//   slide6,
//   slide7,
//   slide8,
//   slide9,
// } from "../components/img";
// import Image from "next/image";

function slides() {
  const slides = [
    {
      id: 0,
      img: "../images/slideimg1.svg",
    },
    {
      id: 1,
      img: "../images/slideimg2.svg",
    },
    {
      id: 2,
      img: "../images/slideimg3.svg",
    },
    {
      id: 3,
      img: "../images/slideimg4.svg",
    },
    {
      id: 4,
      img: "../images/slideimg5.svg",
    },
    {
      id: 5,
      img: "../images/slideimg6.svg",
    },
    {
      id: 6,
      img: "../images/slideimg7.svg",
    },
    {
      id: 7,
      img: "../images/slideimg8.svg",
    },
    {
      id: 8,
      img: "../images/slideimg9.svg",
    },
    {
      id: 9,
      img: "../images/slideimg10.svg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  //   const goToSlide = (slideIndex) => {
  //     setCurrentIndex(slideIndex);
  //   };

  return (
    <div className="max-w-[1400px] h-[500px] lg:h-[780px] py-16 w-full m-auto relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
        className="w-full h-full rounded-xl bg-center bg-cover duration-500"
      >
        {/* Left arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded full p-2 bg-black/20 text-white cursor-pointer">
          <ArrowLeft2 onClick={prevSlide} className="w-6" />
        </div>
        {/* right arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded full p-2 bg-black/20 text-white cursor-pointer">
          <ArrowRight2 onClick={nextSlide} className="w-6" />
        </div>
      </div>
      {/* <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div key={slide.id} onClick={() => goToSlide(slideIndex)}>
            <Circle className="w-2  mx-1" />
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default slides;
