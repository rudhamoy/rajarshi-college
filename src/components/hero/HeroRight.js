import React from "react";
import "./HeroRight.css";
import HeroRightCard from "./HeroRightCard";
import { Card, Image, Button } from "antd";

const HeroRight = () => {
  return (
    <div className="heroRight__container">
      <div className="heroRight__cardTop">
        <div className="heroRight__card1">
          <div className="card1">
            <h2>Bachelor of Science</h2>
            <p style={{ margin: "20px 1px" }}>
              Eligibility – H.S (+2) Passed from any recognised board with
              atleast 4 subjects Course duration – 3 Years ( 6 Semester) Annual
              Fee: Rs. 59400/-
            </p>
            <Button size="medium" style={{ borderRadius: "7px" }}>
              See Prospectus
            </Button>
          </div>
          <img
            alt="ijmage"
            src="https://rajarshicollege.co.in/wp-content/uploads/2020/08/B.A-Pass.jpg"
          />
        </div>
        <div className="heroRight__card2">
          <div className="card1">
            <h2>Bachelor of Arts</h2>
            <p style={{ margin: "20px 1px" }}>
              Eligibility – H.S (+2) Passed from any recognised board with
              atleast 4 subjects Course duration – 3 Years ( 6 Semester) Annual
              Fee: Rs. 59400/-
            </p>
            <Button size="medium" style={{ borderRadius: "7px" }}>
              See Prospectus
            </Button>
          </div>
          <img
            alt="ijmage"
            src="https://rajarshicollege.co.in/wp-content/uploads/2020/08/B.A-Pass.jpg"
          />
        </div>
      </div>
      <div className="heroRight__cardBottom">
        <div className="heroRight__card3">
          <div className="card1">
            <h2>Title</h2>
            <p style={{ margin: "20px 1px" }}>
              Eligibility – H.S (+2) Passed from any recognised board with
              atleast 4 subjects Course duration – 3 Years ( 6 Semester) Annual
              Fee: Rs. 59400/-
            </p>
            <Button size="medium" style={{ borderRadius: "7px" }}>
              See Prospectus
            </Button>
          </div>
          <img
            alt="ijmage"
            src="https://rajarshicollege.co.in/wp-content/uploads/2020/08/B.A-Pass.jpg"
            style={{ width: "100px" }}
          />
        </div>
        <div className="heroRight__card4">
          <div>
            <h2>Title</h2>
            <p>
              Eligibility – H.S (+2) Passed from any recognised board with
              atleast 4 subjects Course duration – 3 Years ( 6 Semester) Annual
              Fee: Rs. 59400/-
            </p>
            <Button size="medium" style={{ borderRadius: "7px" }}>
              See Prospectus
            </Button>
          </div>
          <img
            alt="ijmage"
            src="https://rajarshicollege.co.in/wp-content/uploads/2020/08/B.A-Pass.jpg"
            style={{ width: "100px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroRight;
