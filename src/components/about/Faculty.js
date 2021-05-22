import React from "react";
import "./Trustee.css";
import { Table } from "antd";
import { columns, dataSource } from "../../data/facultyMember.js";

const Faculty = () => {
  return (
    <div>
      <div className="trustee__tableContainer">
        <Table columns={columns} dataSource={dataSource} pagination={false} />
      </div>
    </div>
  );
};

export default Faculty;
