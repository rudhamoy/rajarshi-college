import React, { useState } from "react";
import "./MainMenu.css";
import LeftMenu from "./LeftMenu";
import DownMenu from "./DownMenu";
import { Drawer, Button, Image } from "antd";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const MainMenu = () => {
  const [current, setCurrent] = useState("home");
  const [visible, setVisible] = useState(false);

  const { user } = useSelector((state) => state);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleClick = (e) => {
    setCurrent(e.key);
    setVisible(false);
  };

  return (
    <nav className="menuBar" style={{ backgroundColor: "#373f6e" }}>
      <div className="logo">
        <Link to="/">
          <Image src="/images/rces-logo2.png"  width="210px" preview={false} />
        </Link>
      </div>
      <div className="menuCon">
        <div className="leftMenu">
          <LeftMenu handleClick={handleClick} current={current} />
        </div>
        {/**        
          <div className="rightMenu">
            <RightMenu handleClick={handleClick} current={current} />
          </div>
        */}
        <Button className="barsMenu" type="primary" onClick={showDrawer}>
          <span className="barsBtn"></span>
        </Button>
        <Drawer
          title={
            user ? user.email.split("@")[0].toUpperCase() : "Rajarshi College"
          }
          placement="right"
          closable={true}
          onClose={onClose}
          visible={visible}
        >
          <LeftMenu handleClick={handleClick} />
          <DownMenu handleClick={handleClick} />
        </Drawer>
      </div>
    </nav>
  );
};

export default MainMenu;
