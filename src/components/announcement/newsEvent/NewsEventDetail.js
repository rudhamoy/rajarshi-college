import React, { useEffect, useState } from "react";
import "./NewsEventDetail.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listEventNewsDetail } from "../../../actions/eventNewsActions";
import { Image } from "antd";

const NewsEventDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const eventNewsDetails = useSelector((state) => state.eventNewsDetails);

  const { eventNewsDetail } = eventNewsDetails;
  console.log(eventNewsDetail);

  useEffect(() => {
    dispatch(listEventNewsDetail(id));
  }, []);

  return (
    <div>
      <div
        className="h-96 sm:h-screen flex items-center px-4 sm:px-36 newsEvent"
        style={{
          backgroundImage: `url(${eventNewsDetail.featured_image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          objectFit: "contain",
          // height: "95vh",
        }}
      >
        <h1
          className="text-3xl sm:text-7xl font-bold text-white text-left sm:text-center ml-2"
          style={{ textShadow: "2px 4px 20px black" }}
        >
          {eventNewsDetail.title}
        </h1>
      </div>
      {/** Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 mx-4 sm:mx-36 p-5 mt-4">
        <div className="text-left">
          <p>{eventNewsDetail.content}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            {eventNewsDetail.image_url1 ? (
              <Image src={eventNewsDetail.image_url1} />
            ) : null}
          </div>
          <div>
            {eventNewsDetail.image_url2 ? (
              <Image src={eventNewsDetail.image_url2} />
            ) : null}
          </div>
          <div>
            {eventNewsDetail.image_url3 ? (
              <Image src={eventNewsDetail.image_url3} />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsEventDetail;
