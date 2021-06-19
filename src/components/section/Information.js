import React, { useState, useEffect } from "react";
import "./Information.css";
import { Button, Input } from "antd";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Information = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    db.collection("newsletetrsubs").add({
      name,
      email,
      number,
    });

    toast.success(`Your are successfully added for newsletter`);

    setName("");
    setEmail("");
    setNumber("");
  };

  return (
    <div>
      {/** Upper Section */}

      <div className="info__upper" style={{ backgroundColor: "#132e49" }}>
        <h1>Make Your Success a Priority</h1>
        <h2>Begin your Educational Journey Today.</h2>
        <div className="info__button">
          <Button ghost block size="large" style={{ borderRadius: "8px" }}>
            <Link to="/apply" style={{ color: "white" }}>
              Enroll Now
            </Link>
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
          <ToastContainer />
        </div>
        <div className="info__input" onSubmit={submitHandler}>
          <Input
            size="large"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            // style={{ backgroundColor: "white" }}
          />
          <Input
            size="large"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // style={{ backgroundColor: "lightgrey" }}
          />
          <Input
            size="large"
            placeholder="Mobile Number"
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            // style={{ backgroundColor: "lightgrey" }}
          />
          <Button block type="primary" size="large" onClick={submitHandler}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Information;
