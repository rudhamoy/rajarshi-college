import React, { useState } from "react";
import { Menu, Grid } from "antd";
import { Link } from "react-router-dom";

const { useBreakpoint } = Grid;

const RightMenu = ({ handleClick, current }) => {
  // const [current, setCurrent ] = useState("home");

  // const handleClick = (e) => {
  //     setCurrent(e.key)
  // }

  const { md } = useBreakpoint();

  return (
    <Menu
      mode={md ? "horizontal" : "inline"}
      onClick={handleClick}
      selectedKeys={current}
      style={{ backgroundColor: "#373f6e", color: "#fff" }}
    >
      <Menu.Item key="about">
        <Link to="/about">About Us</Link>
      </Menu.Item>
      <Menu.Item key="contact">Contact Us</Menu.Item>
    </Menu>
  );
};

export default RightMenu;
