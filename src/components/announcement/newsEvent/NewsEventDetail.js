import React, { useEffect, useState } from "react";
import "./NewsEventDetail.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listEventNewsDetail } from "../../../actions/eventNewsActions";

const NewsEventDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const eventNewsDetails = useSelector((state) => state.eventNewsDetails);

  const { eventNewsDetail } = eventNewsDetails;

  useEffect(() => {
    dispatch(listEventNewsDetail(id));
    // const fetchEvent = async () => {
    //   const { data } = await axios.get(
    //     `https://rajarshi-college.herokuapp.com/api/event_list/${id}`,
    //     {
    //       headers: {
    //         Authorization: `Token ${process.env.REACT_APP_AUTH_TOKEN}`,
    //       },
    //     }
    //   );
    //   setDetails(data);
    // };
    // fetchEvent();
  }, []);

  return (
    <div>
      <div
        className="h-96 sm:h-screen"
        style={{
          backgroundImage: `url(${eventNewsDetail.featured_image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          objectFit: "contain",
          // height: "95vh",
        }}
      >
        <h1 className="text-7xl font-semibold text-white text-center flex items-center">
          {eventNewsDetail.title}
        </h1>
      </div>
    </div>
  );
};

export default NewsEventDetail;
