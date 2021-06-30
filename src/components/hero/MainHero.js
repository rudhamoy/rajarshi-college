import React from "react";
import "./MainHero.css";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import HeroCarousel from "./HeroCarousel";
import { Image } from "antd";

const MainHero = () => {
  // const [top, setTop] = useState(10);

  return (
    <div className="main">
      {/** Top Hero section */}
      <div className="mainHero__container">
        {/** Carousel Section */}
        <div className="mainHero__left">
          <HeroCarousel />
        </div>
        {/** Message Section */}
        <div className="mainHero__right">
          <h4 className="text-center text-4xl font-semibold mt-2 text-white">
            Principal’s Message
          </h4>
          <Image
            src="/images/prin.jpeg"
            style={{ height: "250px", width: "190px" }}
          />
          <p className="text-white mx-2">
            <span className="font-extrabold text-2xl">"</span>The COVID19 has
            made the year 2020 very much difficult for everyone. The education
            system has been hampered a lot due to this. I wish the year 2021
            will provide us opportunities to begin again and achieve our goals.
            With the hope of better days and productive year, I wish everyone of
            this College a prosperous and peaceful year ahead.
            <span className="font-extrabold text-2xl">"</span>
          </p>
        </div>
      </div>
      {/** Hero Bottom Section */}
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
            FEE STRUCTURE
          </p>
          <p className="extra__card__deatils" style={{ color: "lightgrey" }}>
            Fee structure henceforth for admission in different course for
            general degree for the first year
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
