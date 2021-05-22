import React from "react";

const MiddleFooter = () => {
  return (
    <div style={{ textAlign: "left" }}>
      <h2 style={{ color: "white" }}>Administration</h2>
      <div
        style={{
          textAlign: "left",
          color: "lightgrey",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        <p>Admission Policy</p>
        <p>Disciplinary Rules</p>
        <p>Scholarship</p>
        <p>Scholarships</p>
        <p>Administrative Stuff</p>
        <p>Portal Login</p>
      </div>
    </div>
  );
};

export default MiddleFooter;
