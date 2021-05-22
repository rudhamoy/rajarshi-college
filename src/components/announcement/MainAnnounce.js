import React from "react";
import "./MainAnnounce.css";
import NewsEvent from "./newsEvent/NewsEvent";
import NewsEventTest from "./newsEvent/NewsEventTest";
import Notice from "./notice/Notice";

const MainAnnounce = () => {
  return (
    <div className="mainAnnounce__container">
      <div className="left">
        <NewsEventTest />
      </div>
      <div className="right">
        <h1 style={{ color: "white" }}>Notice Board</h1>
        <Notice />
      </div>
    </div>
  );
};

export default MainAnnounce;
