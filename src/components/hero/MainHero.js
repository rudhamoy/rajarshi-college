import React, { useState } from "react";
import "./MainHero.css";
import HeroLeft from "./HeroLeft";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import HeroCarousel from "./HeroCarousel";

const MainHero = () => {
  // const [top, setTop] = useState(10);

  return (
    <div className="main">
      <div className="mainHero__container">
        <div className="mainHero__left">
          <HeroCarousel />
        </div>
      </div>
      <div className="mainHero__extra">
        <div className="extra__card">
          <p className="extra__card_title" style={{ color: "#73bef2" }}>
            AFFILIATED
          </p>
          <p className="extra__card__deatils" style={{ color: "lightgrey" }}>
            Affiliated to Tripura University and permitted by the Govt of
            Tripura.
          </p>
          <div className="extra__card__action">
            <p>Know More</p>
            <ArrowRightOutlined style={{ marginTop: "-10px" }} />
          </div>
        </div>
        <div className="extra__card">
          <p className="extra__card_title" style={{ color: "#73bef2" }}>
            SKILL INDIA
          </p>
          <p className="extra__card__deatils" style={{ color: "lightgrey" }}>
            <span>Approved Add On Skill Courses</span>
            <br />
            Rubber Retail, Beauty, Entertainment, Banking, Financial Services
            Insurance Etc
          </p>
          <div className="extra__card__action">
            <p>Know More</p>
            <ArrowRightOutlined style={{ marginTop: "-10px" }} />
          </div>
        </div>
        <div className="extra__card">
          <p className="extra__card_title" style={{ color: "#73bef2" }}>
            DISCOUNTED FEE STRUCTURE
          </p>
          <p className="extra__card__deatils" style={{ color: "lightgrey" }}>
            Discounted fee structure henceforth for admission in different
            course for general degree for the first year
          </p>
          <div className="extra__card__action">
            <p>
              <Link to="/discountfee" style={{ color: "white" }}>
                Instructions
              </Link>
            </p>
            <ArrowRightOutlined style={{ marginTop: "-10px" }} />
          </div>
        </div>
      </div>
      <div className="hero--fadedBottom" />
    </div>
  );
};

export default MainHero;
