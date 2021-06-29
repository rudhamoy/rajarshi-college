import React from "react";
import { Card } from "antd";
import "./CardEvent.css";

const { Meta } = Card;

const CardEvent = ({ title, description, image }) => {
  return (
    <Card
      className="cardEvent__container"
      cover={<img className="h-52 object-cover" alt="example" src={image} />}
    >
      <Meta
        style={{ cursor: "pointer" }}
        title={title}
        description={description}
      />
    </Card>
  );
};

export default CardEvent;
