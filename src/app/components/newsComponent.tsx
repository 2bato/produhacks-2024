/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import SwipeBar from "./swipeBar";
import { Button } from "@mui/material";

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

function NewsComponent(props: any) {
  const [isReading, setIsReading] = useState(false);

  const handleFullscreenClick = () => {
    setIsReading(true); 
  };

  const handleBack = () => {
    setIsReading(false); 
  };

  if (!isReading) {
    return (
      <>
        <div className="flex justify-center mt-7 h-screen w-screen">
          <img
            className="rounded-3xl object-cover h-3/4 w-11/12 border-black border-2 opacity-40"
            src={props.image_url}
            alt="main image"
          />
        </div>
        <div className="absolute ml-1 text-lg text-black top-12 left-40 underline">
          <p className="judson-regular">{props.categories[1]}</p>
        </div>
        <div className="absolute mr-20 text-3xl text-black top-24 left-7">
          <p className="judson-regular">{props.title}</p>
        </div>
        <div className="absolute bottom-64 left-14 ml-4">
          <SwipeBar onFullscreenClick={handleFullscreenClick} />{" "}
          {/* Pass the callback to SwipeBar */}
        </div>
        <div className="absolute bottom-60 left-14 ml-4 inline-flex space-x-5">
          <div className="w-28 h-1 bg-white rounded-xl"></div>
          <div className="w-28 h-1 bg-slate-400 rounded-xl"></div>
        </div>
      </>
    );
  } else {
    return (
      <div className="flex-col justify-center h-screen w-screen p-3 overflow-scroll">
        <Button className="mb-2" variant="outlined" onClick={handleBack}>Back</Button>
        <img src={props.image_url}></img>
        <p className="judson-regular">
          {props.snippet}
        </p>
      </div>
    );
  }
}

export default NewsComponent;
