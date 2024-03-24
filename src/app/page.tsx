"use client"; // This is a client component 👈🏽

import { useState } from "react";
import React from "react";
import Header from "./components/header";
import MainNewsView from "./components/mainNewsView";
import BottomHeader from "./components/BottomHeader";

const article: any[] = [];



export default function SimpleBottomNavigation() {

  return (
    <>
      <div>
          <Header />

          <MainNewsView article={article}/>

        <div className="w-svw fixed bottom-0 z-50">
          <BottomHeader ></BottomHeader>
        </div>
      </div>
    </>
  );
}
