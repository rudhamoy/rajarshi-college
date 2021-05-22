import React from "react";
import { Tabs } from "antd";
import ApprovedHelpDesk from "../components/helpdesk/ApprovedHelpDesk";
import InstructionDesk from "../components/helpdesk/InstructionDesk";

const { TabPane } = Tabs;

const HelpDesk = () => {
  return (
    <div>
      <h1 style={{ marginTop: "30px" }}>Help Desk</h1>
      <div
        style={{
          backgroundColor: "#ececec",
          marginTop: "30px",
        }}
      >
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="Approved Help Desk" key="1">
            <ApprovedHelpDesk />
          </TabPane>
          <TabPane tab="Notice" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Instructions" key="3">
            <InstructionDesk />
          </TabPane>
          <TabPane tab="Guidelines" key="4">
            Content of Tab Pane 4
          </TabPane>
          <TabPane tab="Application Form" key="5">
            Content of Tab Pane 5
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default HelpDesk;
