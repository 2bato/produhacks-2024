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

function NewsComponent() {
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
            src={imageUrl}
            alt="main image"
          />
        </div>
        <div className="absolute ml-1 text-lg text-black top-12 left-40 underline">
          <p className="judson-regular">Finance</p>
        </div>
        <div className="absolute mr-20 text-3xl text-black top-24 left-7">
          <p className="judson-regular">{newsTitle}</p>
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
      <div className="flex-col justify-center mt-7 h-screen w-screen p-3 overflow-scroll">
        <Button className="mb-2" variant="outlined" onClick={handleBack}>Back</Button>
        <img src={imageUrl}></img>
        <p className="judson-regular">
          VANCOUVER – Backup goalies are a little like stay-at-home defencemen.
          Going largely unnoticed, not being the story, isn’t necessarily a bad
          thing. Usually, it means they’re quietly doing their jobs. It says a
          lot about Casey DeSmith’s March run as the Vancouver Canucks’ fill-in
          starter that since Thatcher Demko was injured two weeks ago – Demko,
          the likely Vezina Trophy finalist – not once has goaltending been
          mentioned as an issue for the National Hockey League team. In nearly
          14 periods since Demko removed himself from a 5-0 win against the
          Winnipeg Jets on March 9, DeSmith has stopped 91.2 per cent of shots
          and the Canucks are 3-1-1. After a personal 0-1-3 lull over nearly two
          months of sparse winter play for DeSmith reached its nadir with a
          10-7, stats-destroying humiliation in Minnesota on Feb. 19, the
          goaltender has displayed his most consistent form of the season. Nine
          years into his professional career and after five-and-a-half seasons
          in the NHL as a backup, DeSmith declared after Tuesday’s 3-2 win
          against the Buffalo Sabres that this is the best he has felt about his
          game.
        </p>
      </div>
    );
  }
}

export default NewsComponent;
