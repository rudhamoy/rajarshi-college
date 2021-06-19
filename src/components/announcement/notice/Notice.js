import React, { useEffect } from "react";
import "./Notice.css";
import { useDispatch, useSelector } from "react-redux";
import { listNotice } from "../../../actions/noticeActions";
import { List } from "antd";
import { Link } from "react-router-dom";

const Notice = () => {
  const dispatch = useDispatch();

  const noticeList = useSelector((state) => state.noticeList);

  const { notices } = noticeList;

  useEffect(() => {
    dispatch(listNotice());
  }, [dispatch]);

  return (
    <div className="notice">
      <div className="notice__container">
        <List
          itemLayout="horizontal"
          className="notice__list"
          dataSource={notices}
          renderItem={(item) => (
            <Link to={`/noticedetail/${item.id}`}>
              <List.Item style={{ borderBottom: "0.5px solid lightgray" }}>
                <List.Item.Meta
                  title={item.title}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
              </List.Item>
            </Link>
          )}
        />
      </div>
    </div>
  );
};

export default Notice;
