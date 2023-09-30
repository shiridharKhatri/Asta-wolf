"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
export default function Header() {
  const highlightProduct = [
    {
      name: "earbud",
      image: "image/one.jpg",
    },
    {
      name: "watch",
      image: "image/two.jpg",
    },
    {
      name: "buds",
      image: "image/three.jpg",
    },
  ];
  return (
    <>
      <header>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {highlightProduct.map((e, index) => {
            return (
              <SwiperSlide key={index}>
               <a href="#"><img src={e.image} alt={e.name} /></a> 
              </SwiperSlide>
            );
          })}
        </Swiper>
      </header>
    </>
  );
}
