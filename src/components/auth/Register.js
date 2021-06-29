import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { auth } from "../../firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const Register = () => {
  const [email, setEmail] = useState();
  const classes = useStyles();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      // url: "http://localhost:3000/register/complete",
      url: "https://rajarshicollege.co.in/register/complete",
      // url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp: true,
    };

    await auth.sendSignInLinkToEmail(email, config);

    toast.success(
      `Email has been sent to ${email}. Click the link to complete the registration`
    );

    window.localStorage.setItem("emailForRegistration", email);

    setEmail("");
  };

  return (
    <div
      style={{
        backgroundColor: "lightgrey",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "white",
          margin: "10%",
          width: "340px",
          height: "180px",
          borderRadius: "6px",
        }}
      >
        <div>
          <h2>Register</h2>
          <ToastContainer />

          <TextField
            required
            id="outlined-required"
            label="Email"
            placeholder="Enter Your Email"
            // defaultValue="Enter Your Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white  py-3 px-6 rounded  font-semibold"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
