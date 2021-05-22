import React from "react";
import "./HeroRightCard.css";
import { Image } from "antd";

const HeroRightCard = ({ style, children, title, image }) => {
  return (
    <div style={style} className="container">
      <div classNamr="right">
        <h2>{title}</h2>
        {children}
      </div>
      <div className="left">
        <Image src={image} />
      </div>
    </div>
  );
};

export default HeroRightCard;
