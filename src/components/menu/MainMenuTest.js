import React, { useState } from "react";
import "./MainMenu.css";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import { Drawer, Button, Image } from "antd";

const MainMenu = () => {
  const [current, setCurrent] = useState("home");
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <nav className="menuBar">
      <div className="logo">
        <Image src="/images/logo-nik.png" width="60%" />
      </div>
      <div className="menuCon">
        <div className="leftMenu">
          <LeftMenu handleClick={handleClick} current={current} />
        </div>
        <div className="rightMenu">
          <RightMenu handleClick={handleClick} current={current} />
        </div>
        <Button className="barsMenu" type="primary" onClick={showDrawer}>
          <span className="barsBtn"></span>
        </Button>
        <Drawer
          title="Rajarshi College"
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <LeftMenu />
          <RightMenu />
        </Drawer>
      </div>
    </nav>
  );
};

export default MainMenu;
