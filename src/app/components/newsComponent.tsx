/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import SwipeBar from "./swipeBar";
import { Button } from "@mui/material";

function NewsComponent(prop: any) {
  const [isReading, setIsReading] = useState(false);

  const handleFullscreenClick = () => {
    setIsReading(true);
  };

  const handleBack = () => {
    setIsReading(false);
  };
  const props = prop.article;
  if (!isReading) {
    return (
      <>
        <div className="flex justify-center mt-7 h-screen w-screen">
          <img
            className="rounded-3xl object-cover h-3/4 w-11/12 border-black border-2 brightness-50 opacity-80"
            src={props.image_url}
            alt="main image"
          />
        </div>
        <div className="absolute ml-4 text-lg text-white top-12 left-32">
          <p className="judson-regular font-bold">{props.categories[0]}</p>
        </div>
        <div className="absolute mr-20 text-3xl text-white top-24 left-7">
          <p className="judson-regular font-bold">{props.title}</p>
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
        <Button className="mb-2" variant="outlined" onClick={handleBack}>
          Back
        </Button>
        <img src={props.image_url}></img>
        <p className="judson-regular">{props.snippet}</p>
      </div>
    );
  }
}

export default NewsComponent;
