import React, { useEffect } from "react";
import "./NoticeDetail.css";
import { useDispatch, useSelector } from "react-redux";
import { listNoticeDetail } from "../../../actions/noticeActions";
import { useParams } from "react-router-dom";

const NoticeDetail = ({ match }) => {
  const dispatch = useDispatch();

  const noticeDetails = useSelector((state) => state.noticeDetail);
  const { loading, notice, error } = noticeDetails;

  useEffect(() => {
    dispatch(listNoticeDetail(match.params.id));
  }, [dispatch, match]);

  console.log(noticeDetails);

  return (
    <div className="noticeDetail">
      <div className="noticeDetail__container">
        {loading ? (
          <h2>Loading....</h2>
        ) : (
          <div>
            <h2 className="noticeDetail__title">{notice.title}</h2>
            <div>
              <p>{notice.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NoticeDetail;
