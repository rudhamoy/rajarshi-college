import React from "react";
import "./ProgramCard.css";
import { Card } from "antd";

// const programList = require("./ProgramData.json");

const ProgramList = ({ title, category }) => {
  return (
    <div>
      <div>
        <Card
          title={title}
          style={{
            width: 300,
            height: 180,
            borderRadius: "7px",
            margin: "20px",
          }}
        >
          <p>{category}</p>
        </Card>
      </div>
    </div>
  );
};

export default ProgramList;
