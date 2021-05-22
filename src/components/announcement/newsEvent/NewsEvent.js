import React from "react";
import "./NewsEvent.css";
import { Carousel } from "antd";
import CardEvent from "./CardEvent";

const NewsEvent = () => {
  return (
    <div className="news__container">
      <h1>News & Events</h1>
      <Carousel autoplay style={{ width: "700px", height: "340px" }}>
        <div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <CardEvent title="News and event title 1" />
            <CardEvent title="News and event title 2" />
          </div>
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <CardEvent title="News and event title 3" />
            <CardEvent title="News and event title 4" />
          </div>
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <CardEvent title="News and event title 5" />
            <CardEvent title="News and event title 6" />
          </div>
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <CardEvent title="News and event title 7" />
            <CardEvent title="News and event title 8" />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default NewsEvent;
