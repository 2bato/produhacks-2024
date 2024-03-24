"use client";
import React, { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FeedIcon from "@mui/icons-material/Feed";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

function BottomHeader() {
  const [value, setValue] = useState(1);

  return (
    <div className="w-svw fixed bottom-0 z-50">
      <BottomNavigation
        showLabels
        value={value}
        style={{ fontSize: 40, color: "black" }}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeOutlinedIcon />} />
        <BottomNavigationAction
          label="Feed"
          style={{ fontSize: 40, color: "black" }}
          icon={<FeedIcon />}
        />
        <BottomNavigationAction
          label="Profile"
          icon={<AccountCircleOutlinedIcon />}
          style={{ fontSize: 40, color: "black" }}
        />
      </BottomNavigation>
    </div>
  );
}

export default BottomHeader;
