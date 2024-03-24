"use client"; // This is a client component 👈🏽
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState } from "react";
import React from "react";
import { Avatar } from "@mui/material";
import Divider from '@mui/material/Divider';
import Header from "./components/header";
import MainNewsView from "./components/mainNewsView";



export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);

  return (
    <>
      <div>
          <Header />

          <MainNewsView />

        <div className="w-svw fixed bottom-2 z-50">
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
          </BottomNavigation>
        </div>
      </div>
    </>
  );
}
