import React from "react";
import { Tabs } from "antd";
import Trustee from "../components/about/Trustee";
import TrusteeMobile from "../components/about/TrusteeMobile";
// import Governing from "../components/about/Governing";
import FacultyMobile from "../components/about/FacultyMobile";

const { TabPane } = Tabs;

const About = () => {
  return (
    <div>
      <h1 style={{ marginTop: "20px" }}>About Us</h1>
      <div
        style={{
          backgroundColor: "#ececec",
          marginTop: "30px",
        }}
      >
        <Tabs defaultActiveKey="1" centered>
          {/* <TabPane tab="Trustee Board" key="1">
            <Trustee />
          </TabPane> */}
          {/* <TabPane tab="Governing Body" key="2">
            <Governing />
          </TabPane> */}
          <TabPane tab="Trustee" key="1">
            <TrusteeMobile />
          </TabPane>
          <TabPane tab="Faculty Member" key="2">
            <FacultyMobile />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default About;
