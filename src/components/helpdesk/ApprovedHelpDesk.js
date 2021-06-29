import React from "react";
import ContainerCard from "./ContainerCard";

const helpDesk = require("../../data/helpDesk.json");

const ApprovedHelpDesk = () => {
  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Approved Help Desks</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {helpDesk.map((desk) => {
          return (
            <ContainerCard
              helpDesk={desk.helpDesk}
              name={desk.name}
              establishment={desk.establishment}
              address={desk.address}
              mobile={desk.mobile}
              email={desk.email}
              officeHours={desk.officeHours}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ApprovedHelpDesk;
