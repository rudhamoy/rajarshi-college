import React from "react";
import "./HeaderInfo.css";
import Typewriter from "typewriter-effect";

const HeaderInfo = () => {
  return (
    <div className="headerInfo">
      <div style={{ color: "#f7eb0b" }}>
        <Typewriter
          Typewriter__wrapper
          options={{
            strings: ["Applications Open"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
};

export default HeaderInfo;
