import React from "react";
import { Menu, Grid } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  UserAddOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import firebase from "firebase";

const { useBreakpoint } = Grid;

const DownMenu = ({ handleClick, current }) => {
  let dispatch = useDispatch();
  let history = useHistory();
  const { md } = useBreakpoint();

  const user = useSelector((state) => state.user);

  const logout = () => {
    firebase.auth().signOut();

    dispatch({
      type: "LOGOUT",
      payload: null,
    });

    history.push("/login");
  };

  return (
    <div>
      {user ? (
        <Menu
          mode={md ? "horizontal" : "inline"}
          onClick={handleClick}
          selectedKeys={current}
          style={{ backgroundColor: "#373f6e", color: "#fff" }}
        >
          <Menu.Item key="setting:1" icon={<UserOutlined />}>
            Profile
          </Menu.Item>
          <Menu.Item key="setting:4" icon={<LogoutOutlined />} onClick={logout}>
            Logout
          </Menu.Item>
        </Menu>
      ) : (
        <Menu
          mode={md ? "horizontal" : "inline"}
          onClick={handleClick}
          selectedKeys={current}
          style={{ backgroundColor: "#373f6e", color: "#fff" }}
        >
          <Menu.Item key="setting:2" icon={<UserOutlined />}>
            <Link to="/login">Login</Link>
          </Menu.Item>
          <Menu.Item key="setting:3" icon={<UserAddOutlined />}>
            <Link to="/register">Register</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default DownMenu;
