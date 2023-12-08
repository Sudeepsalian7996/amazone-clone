import React, { useState, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import banner1 from "../../images/homebanner1.jpg";
import banner2 from "../../images/homebanner2.jpg";
import banner3 from "../../images/homebanner3.jpg";
import banner4 from "../../images/xx.jpg";
import banner5 from "../../images/homebanner5.jpg";
import "../../styles/Banner.css";

const data = [banner1, banner2, banner3];
function Banner() {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 700);
    };

    // Initial check and event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Carousel
      className="carousel"
      autoPlay={true}
      animation="slide"
      indicators={isMobileView}
      navButtonsAlwaysVisible={!isMobileView}
      cycleNavigation={true}
      navButtonsProps={{
        style: {
          backgroundColor: "white",
          color: "black",
          borderRadius: 0,
          height: "100px",
          marginTop: "-100px",
        },
      }}
    >
      {data?.map((image, index) => (
        <div className="image__container__carousel">
          <img src={image} alt="imgae_alt" className="image__carousel" />
        </div>
      ))}
    </Carousel>
  );
}

export default Banner;
