import React from "react";
import "./ContactUs.css";
import ContactLeft from "../components/contact/ContactLeft";
import ContactRight from "../components/contact/ContactRight";

const ContactUs = () => {
  return (
    <div className="contact">
      <ContactLeft />
      <ContactRight />
    </div>
  );
};

export default ContactUs;
