import React from "react";
import "./ContactRight.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "antd";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "30ch",
    },
  },
}));

const ContactRight = () => {
  const classes = useStyles();

  return (
    <div className="contactRight">
      <h1>Send Message</h1>
      <div className="contactRight__container">
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField id="standard-textarea" label="First Name" multiline />
            <TextField id="standard-textarea" label="Last Name" multiline />
          </div>
          <div>
            <TextField id="standard-textarea" label="Email" multiline />
            <TextField id="standard-textarea" label="Mobile" multiline />
          </div>
        </form>
        <TextField
          id="standard-textarea"
          label="Your Message"
          placeholder="Enter your message"
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
        >
          Send Message
        </Button>
      </div>
    </div>
  );
};

export default ContactRight;
