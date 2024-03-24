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
            className={`rounded-3xl object-cover h-4/5 w-11/12 border-4 brightness-50 opacity-80 border-black`}
            src={props.image_url}
            alt="main image"
          />
        </div>
        <div className={`absolute mx-[9.5rem] ext-lg top-12`}>
          <p
            className={`${
              props.keywords === "wildcard"
                ? "text-black bg-yellow-300 rounded-xl px-4 -ml-4"
                : props.keywords === "alternate"
                ? "text-white bg-black rounded-xl px-4"
                : "text-black bg-white rounded-xl px-4"
            } judson-bold`}
          >
            {props.categories[0]}
          </p>
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
      <div className="flex-col justify-center h-screen w-screen py-3 px-6 overflow-scroll">
        <Button
          className="mb-2"
          color="inherit"
          variant="outlined"
          onClick={handleBack}
        >
          Back
        </Button>
        <img src={props.image_url} className="rounded-3xl mb-4"></img>
        <p className="judson-regular">{props.snippet}</p>
      </div>
    );
  }
}

export default NewsComponent;
