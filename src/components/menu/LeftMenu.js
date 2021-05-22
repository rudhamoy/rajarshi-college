import React from "react";
import { Menu, Grid } from "antd";
import { Link } from "react-router-dom";

const { useBreakpoint } = Grid;

const LeftMenu = ({ handleClick, current }) => {
  const { md } = useBreakpoint();

  return (
    <Menu
      mode={md ? "horizontal" : "inline"}
      onClick={handleClick}
      selectedKeys={current}
      style={{
        backgroundColor: "#373f6e",
        color: "#fff",
        // display: "flex",
        // justifyContent: "center",
      }}
    >
      <Menu.Item key="home">
        <Link to="/" style={{ color: "white" }}>
          Home
        </Link>
      </Menu.Item>
      <Menu.Item key="programs">
        <Link to="/programs" style={{ color: "white" }}>
          Programs
        </Link>
      </Menu.Item>
      {/** <Menu.Item key="apply">
        <Link to="/apply" style={{ color: "white" }}>
          Apply Now
        </Link>
      </Menu.Item> **/}
      <Menu.Item key="instruction">
        <Link to="/instructions" style={{ color: "white" }}>
          Instructions
        </Link>
      </Menu.Item>
      <Menu.Item key="prospectus">
        <Link to="/prospectus" style={{ color: "white" }}>
          Prospectus
        </Link>
      </Menu.Item>
      <Menu.Item key="discounted">
        <Link to="/discountfee" style={{ color: "white" }}>
          Discounted Fee
        </Link>
      </Menu.Item>
      <Menu.Item key="helpdesk">
        <Link to="/helpdesk" style={{ color: "white" }}>
          Help Desk
        </Link>
      </Menu.Item>
      <Menu.Item key="about">
        <Link to="/about" style={{ color: "white" }}>
          About Us
        </Link>
      </Menu.Item>
      <Menu.Item key="contact">
        <Link to="/contact" style={{ color: "white" }}>
          Contact Us
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default LeftMenu;
