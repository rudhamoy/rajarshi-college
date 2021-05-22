import React from "react";
import "./DiscountFee.css";
import { columns, dataSource } from "../data/discountTable";
import { Table } from "antd";

const DiscountFee = () => {
  return (
    <div style={{ backgroundColor: "#ececec" }}>
      <div className="discountFee">
        <h1>
          DISCOUNTED FEE STRUCTURE HENCEFORTH FOR ADMISSION IN DIFFERENT COURSES
          FOR GENERAL DEGREE FOR THE FIRST YEAR
        </h1>
        <div className="discountFee__tableContainer">
          <Table
            className="table"
            columns={columns}
            dataSource={dataSource}
            pagination={false}
          />
        </div>
        <h4>
          Fee for 2nd and 3rd year as given in website of the college will also
          be discounted after review of number students at the beginning of 2nd
          and 3rd year.
        </h4>
      </div>
    </div>
  );
};

export default DiscountFee;
