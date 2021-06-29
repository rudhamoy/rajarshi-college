import React from "react";
import "./HeroLeft.css";
import { Button } from "antd";
import { Link } from 'react-router-dom'

const HeroLeft = () => {
  return (
    <div className="heroLeft__container">
      <h2 style={{ color: "#22d3ee" }}>
        Welcome To <br />
        <span style={{ color: "#fff" }}>Rajarshi College Of Education</span>
      </h2>
      <div>
        <p className="heroLeft__details" style={{ color: "#d1d5c4" }}>
          We believe, the way to bring the change, is to empower young minds
          with quality education. Rajarshi Welfare Trust a non-profit public
          charitable trust besides philanthropic activities formed for providing
          degree in general/professional education for the eligible
          undergraduate youths residing in Tripura
        </p>
        <p className="heroLeft__mobile">
          We believe, the way to bring the change, is to empower young minds
          with quality education
        </p>
      </div>
      <div className="heroLeft__btn">
        <Button size="large" style={{ borderRadius: "8px" }}>
          <Link to="/instructions">
          Know More
          </Link>
        </Button>
        <Button
          size="large"
          className="heroLeft__btn2"
          style={{
            borderRadius: "8px",
            backgroundColor: "#2a384b",
            color: "#f1f1f1",
            border: "none",
          }}
        >
          <Link to="/programs">

          Browse All Course
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default HeroLeft;
