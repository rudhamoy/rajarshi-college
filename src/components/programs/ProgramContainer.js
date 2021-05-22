import React from "react";
import "./ProgramContainer.css";
import { Link } from "react-router-dom";

const ProgramContainer = ({ children, link }) => {
  return (
    <div className="programContainer">
      {children}
      <button>
        <Link to={link} style={{ color: "lightgrey" }}>
          Apply Now
        </Link>
      </button>
    </div>
  );
};

export default ProgramContainer;
