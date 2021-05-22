import React from "react";

const LeftFooter = () => {
  return (
    <div style={{ textAlign: "left" }}>
      <h2 style={{ color: "white" }}>Home</h2>
      <div
        style={{
          textAlign: "left",
          color: "lightgrey",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        <p>About</p>
        <p>History</p>
        <p>Vision and Mission</p>
        <p>Important Dates and Timings</p>
      </div>
    </div>
  );
};

export default LeftFooter;
