import React, { useState, useEffect } from "react";
import "./NewsEvent.css";
import { Carousel } from "antd";
import CardEvent from "./CardEvent";
import { CaretRightOutlined } from "@ant-design/icons";
import axios from "axios";
import { Link } from "react-router-dom";

const NewsEvent = () => {
  const [eventLists, setEventLists] = useState([]);

  useEffect(() => {
    // axios
    //   .get("https://nicksdb.pythonanywhere.com/api/event_list/", {
    //     headers: {
    //       Authorization: `Token ${token}`,
    //     },
    //   })
    //   .then((res) => {
    //     const data = res.data;
    //     setEventLists(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    const fetchData = async () => {
      const token = "1ec938106f39d6172fb57e36fa23c0d0432c40f6";
      const { data } = await axios.get(
        "https://nicksdb.pythonanywhere.com/api/event_list/",
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      setEventLists(data);
    };

    return fetchData();
  }, []);

  return (
    <div className="news__container">
      <div className="news__header">
        <h1 style={{ color: "white" }}>News & Event</h1>
        <p>
          <CaretRightOutlined />
          <Link to="/allnewsevent" style={{ color: "white" }}>
            View All
          </Link>
        </p>
      </div>

      <div className="news__content">
        <Carousel className="newsEvent__carousel" autoplay dots={false}>
          {eventLists.map((news) => (
            <Link key={news.id} to={`/newsevent/${news.id}`}>
              <div key={news.id}>
                <CardEvent title={news.title} description={news.content} />
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default NewsEvent;
