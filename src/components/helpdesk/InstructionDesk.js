import React from "react";
import "./InstructionDesk.css";

const InstructionDesk = () => {
  return (
    <div className="instructionDesk">
      <h1>Instructions for Online Help Desk Applications</h1>
      <div className="instructionDesk__details">
        <p>
          Interested Help Desk Assistants are requested to read the guide lines
          carefully. The Guideline is available under Help Desks menu in the
          Menu bar. <br />
          Apply only if you have an establishment.
          <br />
          Download the form and print the application form. <br />
          The filled up form can be submitted by sending a scanned copy of the
          form along with AADHAR & PAN card to contact@rajarshicollege.co.in{" "}
          <br />
          Once the application has been reviewed, the applicant will be
          contacted by the authorities.
        </p>
      </div>
    </div>
  );
};

export default InstructionDesk;
