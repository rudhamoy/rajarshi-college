import React, { useState, useEffect } from "react";
import "./HeaderInfo.css";
import axios from "axios";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const HeaderMarquee = () => {
  const [noticeFeat, setNoticeFeat] = useState([]);

  // const token = "1ec938106f39d6172fb57e36fa23c0d0432c40f6";

  useEffect(() => {
    axios
      .get("https://rajarshi-college.herokuapp.com/api/notice_list/", {
        headers: {
          Authorization: `Token ${process.env.REACT_APP_AUTH_TOKEN}`,
        },
      })
      .then((res) => {
        const data = res.data;
        setNoticeFeat(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ marginTop: "5px" }}>
      {noticeFeat.map((notice) =>
        notice.is_featured === "True" ? (
          <Marquee pauseOnHover speed={30} gradient={false} key={notice.id}>
            <Link to={`/noticedetail/${notice.id}/`} style={{ color: "white" }}>
              <p className="marquee__title">{notice.title}</p>
            </Link>
          </Marquee>
        ) : null
      )}
    </div>
  );
};

export default HeaderMarquee;
