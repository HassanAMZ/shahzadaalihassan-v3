"use client";

import Image from "next/image";
import React from "react";
import Slider, { LazyLoadTypes } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
 const settings = {
  dots: false,
  infinite: true,
  speed: 8000,
  slidesToShow: 8,
  autoplay: true,
  cssEase: "linear",
  autoplaySpeed: 0,
  pauseOnHover: true,
  arrows: false,
  initialSlide: 0,
  responsive: [
   {
    breakpoint: 2100,
    settings: {
     slidesToShow: 7,
    },
   },

   {
    breakpoint: 1024,
    settings: {
     slidesToShow: 4,
    },
   },

   {
    breakpoint: 480,
    settings: {
     slidesToShow: 2,
    },
   },
  ],
 };

 const clientImages = [
  "makescents",
  "pandaparken",
  "holidayparken",
  "easyloanapproval",
  "nook",
  "equifund",
  "figment",
  "buyfreddie",
 ];
 return (
  <div className='slider-container-shadow'>
   <Slider {...settings}>
    {clientImages.map((image, index) => (
     <Image
      key={index}
      src={`/images/for-businesses/client-${image}-mobile-home.png`}
      alt={"client-makescents-mobile-home.png"}
      className='px-1 rounded-lg'
      width={1080}
      height={1920}
     />
    ))}
   </Slider>
  </div>
 );
};

export default ImageSlider;
