import React from "react";
import { Menu } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  UserAddOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import firebase from "firebase";

const { SubMenu } = Menu;

const HeaderLogin = () => {
  let dispatch = useDispatch();
  let history = useHistory();

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
    <Menu
      style={{
        backgroundColor: "#373f6e",
        color: "white",
        // borderLeft: "1px solid white",
        border: "none",
      }}
      mode="horizontal"
    >
      {user ? (
        <SubMenu key="SubMenu" title="My Account">
          <Menu.Item key="setting:1" icon={<UserOutlined />}>
            Profile
          </Menu.Item>
          <Menu.Item key="setting:4" icon={<LogoutOutlined />} onClick={logout}>
            Logout
          </Menu.Item>
        </SubMenu>
      ) : (
        <SubMenu key="SubMenu1" title="Account">
          <Menu.Item key="setting:2" icon={<UserOutlined />}>
            <Link to="/login">Login</Link>
          </Menu.Item>
          <Menu.Item key="setting:3" icon={<UserAddOutlined />}>
            <Link to="/register">Register</Link>
          </Menu.Item>
        </SubMenu>
      )}
    </Menu>
  );
};

export default HeaderLogin;
