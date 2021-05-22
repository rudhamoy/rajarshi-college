import React from "react";
import { Card, Image } from "antd";
import "./CardEvent.css";

const { Meta } = Card;

const CardEvent = ({ title, description, image }) => (
  <Card
    className="cardEvent__container"
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
  >
    <Meta
      style={{ cursor: "pointer" }}
      title={title}
      description={description}
    />
  </Card>
);

export default CardEvent;
