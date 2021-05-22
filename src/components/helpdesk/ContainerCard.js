import React from "react";
import { Card } from "antd";
import "./ContainerCard.css";

const ContainerCard = ({
  helpDesk,
  name,
  establishment,
  address,
  mobile,
  email,
  officeHours,
}) => {
  return (
    <div style={{ marginBottom: "10px", marginTop: "30px" }}>
      <Card
        title={`HELP DESK:- ${helpDesk}`}
        bordered={false}
        style={{ width: 300 }}
      >
        <div className="card__container">
          <p>
            <span>Name: </span>
            {name}
          </p>
          <p>
            <span>Establishment:</span> {establishment}
          </p>
          <p>
            <span>Address:</span> {address}
          </p>
          <p>
            <span>Mobile:</span> {mobile}
          </p>
          <p>
            <span>Email:</span> {email}
          </p>
          <p>
            <span>Office Hours:</span> {officeHours}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default ContainerCard;
