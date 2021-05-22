import React from "react";
import "./Information.css";
import { Button, Input } from "antd";
import { Link } from "react-router-dom";

const Information = () => {
  return (
    <div>
      {/** Upper Section */}

      <div className="info__upper" style={{ backgroundColor: "#132e49" }}>
        <h1>Make Your Success a Priority</h1>
        <h2>Begin your Educational Journey Today.</h2>
        <div className="info__button">
          <Button ghost block size="large" style={{ borderRadius: "8px" }}>
            Enroll Now
          </Button>
          <Button
            block
            ghost
            size="large"
            className="btnn"
            style={{ borderRadius: "8px" }}
          >
            <Link to="/programs" style={{ color: "white" }}>
              View the course catalog
            </Link>
          </Button>
        </div>
      </div>

      {/** Down Section */}

      <div className="info__update">
        <div>
          <h2 style={{ textTransform: "uppercase", fontSize: "35px" }}>
            Keep Me Update
          </h2>
        </div>
        <div className="info__input">
          <Input
            size="large"
            placeholder="Enter Your Name"
            // style={{ backgroundColor: "white" }}
          />
          <Input
            size="large"
            placeholder="Enter Your Email"
            // style={{ backgroundColor: "lightgrey" }}
          />
          <Input
            size="large"
            placeholder="Mobile Number"
            // style={{ backgroundColor: "lightgrey" }}
          />
          <Button block type="primary" size="large">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Information;
