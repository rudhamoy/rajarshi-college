import React from "react";
import "./ContactLeft.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import CallIcon from "@material-ui/icons/Call";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

const ContactLeft = () => {
  return (
    <div className="contactLeft">
      <h1 style={{ color: "white" }}>Contact Info</h1>
      <div>
        <div className="contactLeft__detail">
          <LocationOnIcon />
          <p>
            Rajarshi College of Education, Bagbari, Lembucherra, Tripura, India
          </p>
        </div>
        <div className="contactLeft__detail">
          <MailOutlineIcon />
          <p>contact@rajarshicollege.co.in</p>
        </div>
        <div className="contactLeft__detail">
          <CallIcon />
          <p>+91 9436454197</p>
        </div>
      </div>
      <div className="contactLeft__icon" style={{ color: "lightgrey" }}>
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
      </div>
    </div>
  );
};

export default ContactLeft;
