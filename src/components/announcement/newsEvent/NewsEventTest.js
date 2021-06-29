import React, { useEffect } from "react";
import "./NewsEvent.css";
import { Carousel } from "antd";
import CardEvent from "./CardEvent";
import { CaretRightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listEventNews } from "../../../actions/eventNewsActions";

const NewsEvent = () => {
  const dispatch = useDispatch();
  const eventNewsList = useSelector((state) => state.eventNewsList);
  const { eventNews } = eventNewsList;

  useEffect(() => {
    dispatch(listEventNews());
    // const fetchData = async () => {
    //   const { data } = await axios.get(
    //     "https://rajarshi-college.herokuapp.com/api/event_list/",
    //     {
    //       headers: {
    //         Authorization: `Token ${process.env.REACT_APP_AUTH_TOKEN}`,
    //       },
    //     }
    //   );

    //   setEventLists(data);
    //   console.log(eventLists);
    // };

    // return fetchData();
  }, [dispatch]);

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
          {eventNews.map((news) => {
            return (
              <Link key={news.id} to={`/newsevent/${news.id}`}>
                <div key={news.id}>
                  <CardEvent
                    // news
                    image={news.featured_image}
                    title={news.title}
                    description={news.content}
                  />
                </div>
              </Link>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default NewsEvent;
