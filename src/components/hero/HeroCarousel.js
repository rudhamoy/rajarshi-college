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
              src="/images/carousel1.png"
            />
          </div>
        </div>
        <div className="carousel1">
          <div style={{ overflow: "hidden" }}>
            <img
              className="heroCarousel__image"
              // style={{ height: "550px", width: "100vw" }}
              alt="casrousell"
              src="/images/carousel2.png"
            />
          </div>
        </div>
        <div className="carousel1">
          <div style={{ overflow: "hidden" }}>
            <img
              className="heroCarousel__image"
              // style={{ height: "550px", width: "100vw" }}
              alt="casrousel3"
              src="/images/carousel3.png"
            />
          </div>
        </div>
        <div className="carousel1">
          <div style={{ overflow: "hidden" }}>
            <img
              className="heroCarousel__image"
              // style={{ height: "550px", width: "100vw" }}
              alt="casrousel4"
              src="/images/carousel4.png"
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
