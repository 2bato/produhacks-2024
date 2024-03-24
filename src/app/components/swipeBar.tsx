import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { useSwiper } from "swiper/react";


function SwipeBar({ onFullscreenClick }: any) {
  const swiper = useSwiper();

  const [iconColor, setIconColor] = useState('none'); // Initial color of the icon
  const [opacityIcon, setOpacityIcon] = useState('100%'); // Initial color of the icon


  const handleClick = () => {
    console.log("clicked");

    setIconColor('D5443D'); // Change the color to red when the icon is clicked
    setOpacityIcon('50%'); // Change the color to red when the icon is clicked


    setTimeout(() => {
      setIconColor('transparent');
      setOpacityIcon('100%')
      swiper.slideNext();

    }, 200);

  };




  return (
    <>
      <div className="inline-flex space-x-7">
        <CloseIcon onClick={() => handleClick()} style={{ fontSize: 40, color: "white", backgroundColor: iconColor, borderRadius: '50%', opacity: opacityIcon}} />
        <KeyboardDoubleArrowRightIcon
          onClick={() => {
            setTimeout(() => {

            console.log("I CLicked!!!");
            swiper.slideNext();
            },  200);
          }}
          style={{ fontSize: 40, color: "white" }}
        />
        <FullscreenIcon style={{ fontSize: 40, color: "white" }} 
                  onClick={onFullscreenClick} // Handle FullscreenIcon click by calling the onFullscreenClick callback
                  />
        <BookmarkBorderIcon style={{ fontSize: 40, color: "white" }} />
      </div>
    </>
  );
}

export default SwipeBar;
