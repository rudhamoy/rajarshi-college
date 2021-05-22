import React from "react";
import "./TopBar.css";
import HeaderMarquee from "./HeaderMarquee";
import HeaderLogin from "./HeaderLogin";
import HeaderInfo from "./HeaderInfo";

const TopBar = () => {
  return (
    <div className="topbar__container" style={{ backgroundColor: "#1979a9" }}>
      <div className="topbar__left">
        <HeaderMarquee />
      </div>
      <div
        className="topbar__right"
        style={{
          backgroundColor: "#1979a9",
        }}
      >
        <div className="action2">
          <HeaderInfo />
        </div>
        <div>
          <p className="action" style={{ color: "white" }}>
            Apply Now
          </p>
        </div>
        <div className="headerLogin">
          <HeaderLogin />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
