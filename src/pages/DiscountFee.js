import React from "react";
import "./DiscountFee.css";
import { columns, dataSource } from "../data/discountTable";
import { Table } from "antd";

const DiscountFee = () => {
  return (
    <div style={{ backgroundColor: "#ececec" }}>
      <div className="discountFee">
        <h1>
          FEE STRUCTURE HENCEFORTH FOR ADMISSION IN DIFFERENT COURSES
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
        In addition to the semester fees, Applicant is required to pay Rs. 5000/- towards admission fee to confirm the offer letter.

<div align="center"><strong>*Fees once paid are Non Refundable *</strong></div>
        </h4>
      </div>
    </div>
  );
};

export default DiscountFee;
