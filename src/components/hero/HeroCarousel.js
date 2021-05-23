import React from "react";
import "./HeroCarousel.css";
import { Carousel } from "antd";
import HeroLeft from "./HeroLeft";

const HeroCarousel = () => {
  return (
    <div>
      <Carousel
        autoplay
        className="heroCarousel"
        //   style={{ width: "100vw", height: "500vh" }}
      >
        <div className="carousel1">
          <div>
            <HeroLeft />
          </div>
        </div>
        <div className="carousel1">
          <div style={{ overflow: "hidden" }}>
            <img
              className="heroCarousel__image"
              // style={{ height: "550px", width: "100vw" }}
              alt="carousel"
              src="https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=100vw"
            />
          </div>
        </div>
        <div className="carousel1">
          <div style={{ overflow: "hidden" }}>
            <img
              className="heroCarousel__image"
              // style={{ height: "550px", width: "100vw" }}
              alt="casrousell"
              src="https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=100vw"
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
