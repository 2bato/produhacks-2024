"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Mousewheel } from "swiper/modules";
import NewsComponent from "./newsComponent";

function MainNewsView(props: any) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        mousewheel={true}
        modules={[Pagination, Navigation, Mousewheel]}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {props.article.map((article: any, index: number) => (
          <SwiperSlide key={index}>
            <NewsComponent article={article} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default MainNewsView;
