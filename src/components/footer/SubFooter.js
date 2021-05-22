import React from "react";
import "./SubFooter.css";
import {
  FacebookFilled,
  InstagramFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";

const SubFooter = () => {
  return (
    <div className="subfooter">
      <div>Rajarshi College of Education & Skill Copyright 2020</div>
      <div className="subfooter__right">
        Developed by Franean Technologies
        <FacebookFilled />
        <InstagramFilled />
        <TwitterCircleFilled />
      </div>
    </div>
  );
};

export default SubFooter;
