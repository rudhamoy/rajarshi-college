import React, { useState } from "react";
import "./ContactRight.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "antd";
import { db } from "../../firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "30ch",
    },
  },
}));

const ContactRight = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [message, setMessage] = useState();

  const classes = useStyles();

  const submitHandler = (e) => {
    e.preventDefault();

    db.collection("contact").add({
      firstName,
      lastName,
      email,
      mobile,
      message,
    });

    toast.success(`Message sent Successfully`);

    setFirstName("");
    setLastName("");
    setEmail("");
    setMobile("");
    setMessage("");
  };

  return (
    <div className="contactRight">
      <h1>Send Message</h1>
      <ToastContainer />
      <div className="contactRight__container">
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={submitHandler}
        >
          <div>
            <TextField
              id="standard-textarea"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              label="First Name"
              multiline
            />
            <TextField
              id="standard-textarea"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              label="Last Name"
              multiline
            />
          </div>
          <div>
            <TextField
              id="standard-textarea"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              multiline
            />
            <TextField
              id="standard-textarea"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              label="Mobile"
              multiline
            />
          </div>
        </form>
        <TextField
          id="standard-textarea"
          label="Your Message"
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          multiline
          fullWidth
          style={{ margin: "0 2%" }}
        />
        <Button
          size="large"
          style={{
            borderRadius: "8px",
            backgroundColor: "#373f6e",
            color: "lightgrey",
          }}
          onClick={submitHandler}
        >
          Send Message
        </Button>
      </div>
    </div>
  );
};

export default ContactRight;
