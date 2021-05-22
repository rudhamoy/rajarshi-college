import React from "react";
import { Button, Tabs } from "antd";

import ProgramHead from "../components/programs/ProgramHead";
import ProgramContainer from "../components/programs/ProgramContainer";

const programList = require("../data/ProgramData.json");

const { TabPane } = Tabs;

const bscHons = programList.filter((bscs) => bscs.category === "bschons");
const bscPass = programList.filter((bscs) => bscs.category === "bscpass");
const baHons = programList.filter((ba) => ba.category === "bahons");
const baPass = programList.filter((ba) => ba.category === "bapass");

const Programs = () => {
  return (
    <div>
      <ProgramHead />
      <div style={{ backgroundColor: "#708090" }}>
        <Tabs
          defaultActiveKey="1"
          centered
          tabBarStyle={{ color: "white", backgroundColor: "black" }}
        >
          <TabPane tab="BSc Hons" key="1">
            <ProgramContainer link={`/`}>
              {bscHons.map((bsc) => (
                <div>
                  <h2 style={{ color: "white", fontWeight: "370" }}>
                    {bsc.title}
                  </h2>
                </div>
              ))}
            </ProgramContainer>
          </TabPane>
          <TabPane tab="BA Hons" key="2">
            <ProgramContainer link={`/`}>
              {baHons.map((ba) => (
                <div>
                  <h2 style={{ color: "white", fontWeight: "370" }}>
                    {ba.title}
                  </h2>
                </div>
              ))}
            </ProgramContainer>
          </TabPane>
          <TabPane tab="BA Pass" key="3">
            <ProgramContainer link={`/`}>
              {baPass.map((ba) => (
                <div>
                  <h2 style={{ color: "white", fontWeight: "370" }}>
                    {ba.title}
                  </h2>
                </div>
              ))}
            </ProgramContainer>
          </TabPane>
          <TabPane tab="BSc Pass" key="4">
            <ProgramContainer link={`/`}>
              {bscPass.map((bsc) => (
                <div>
                  <h2 style={{ color: "white", fontWeight: "370" }}>
                    {bsc.title}
                  </h2>
                </div>
              ))}
            </ProgramContainer>
          </TabPane>
          <TabPane tab="Skill Course" key="5">
            <ProgramContainer link={`/`}>
              {programList.map((bsc) => (
                <div>
                  <h2 style={{ color: "white", fontWeight: "370" }}>
                    {bsc.title}
                  </h2>
                </div>
              ))}
            </ProgramContainer>
          </TabPane>
        </Tabs>
      </div>

      {/** Bottom  */}

      <div style={{ marginBottom: "30px" }}>
        <h2
          style={{
            fontSize: "60px",
            fontWeight: "700",
            textTransform: "uppercase",
          }}
        >
          Get ready for bright future
        </h2>
        <Button
          size="large"
          style={{
            borderRadius: "8px",
            padding: "0 60px",
            backgroundColor: "#edb111",
          }}
        >
          Apply Now
        </Button>
      </div>
    </div>
  );
};

export default Programs;
