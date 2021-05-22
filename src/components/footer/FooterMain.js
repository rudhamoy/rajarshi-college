import React from "react";
import "./FooterMain.css";
import LeftFooter from "./LeftFooter";
import MiddleFooter from "./MiddleFooter";
import RightFooter from "./RightFooter";
import SubFooter from "./SubFooter";

const FooterMain = () => {
  return (
    <div className="footer__container">
      <div className="leftFooter">
        <LeftFooter />
      </div>
      <div className="middleFooter">
        <MiddleFooter />
      </div>
      <div className="rightFooter">
        <RightFooter />
      </div>
    </div>
  );
};

export default FooterMain;
