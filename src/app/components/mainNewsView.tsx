import React from "react";
import SwipeBar from "./swipeBar";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Mousewheel } from "swiper/modules";
import NewsComponent from "./newsComponent";

const exampleObject = {
  status: "ok",
  totalResults: 7169,
  articles: [
    {
      source: {
        id: null,
        name: "Biztoc.com",
      },
      author: "finance.yahoo.com",
      title: '2 "Magnificent Seven" Stocks to Buy Hand Over Fist Right Now',
      description:
        'The S&P 500 index has roared higher over the past 16 months, rebounding from its bear market low to reach record levels -- and confirm a new bull market. And the movement has been led by one group of stocks in particular. Dubbed the "Magnificent Seven" in ref…',
      url: "https://biztoc.com/x/250ae63a7f8aa420",
      urlToImage: "https://c.biztoc.com/p/250ae63a7f8aa420/s.webp",
      publishedAt: "2024-03-23T21:06:08Z",
      content:
        "The S&amp;P 500 index has roared higher over the past 16 months, rebounding from its bear market low to reach record levels -- and confirm a new bull market. And the movement has been led by one grou… [+296 chars]",
    },
  ],
};

const imageUrl = exampleObject.articles[0].urlToImage;
const newsTitle = exampleObject.articles[0].title;

function MainNewsView() {
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
        <SwiperSlide>
          <NewsComponent />
        </SwiperSlide>
        <SwiperSlide>
          <NewsComponent />
        </SwiperSlide>
        <SwiperSlide>
          <NewsComponent />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default MainNewsView;
