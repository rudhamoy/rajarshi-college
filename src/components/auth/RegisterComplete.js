import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { auth } from "../../firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import {db } from '../../firebase'

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const RegisterComplete = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')

  let history = useHistory();

  const classes = useStyles();

  useEffect(() => {
    setEmail(window.localStorage.getItem("emailForRegistration"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //validation
    if (!email || !password) {
      toast.error("Email and Password is required");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    try {
      const result = await auth.signInWithEmailLink(
        email,
        window.location.href
      );
      console.log(result);

      if (result.user.emailVerified) {
        window.localStorage.removeItem("emailForRegistration");

        let user = auth.currentUser;
        await user.updatePassword(password);
        // const idTokenResult = await user.getIdTokenResult;

        db.collection("users").add({
      fullName,
      email,
      phone,
    });

        history.push("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
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
          height: "390px",
          borderRadius: "6px",
        }}
      >
        <div>
          <h2>Complete Register</h2>
          <ToastContainer />

          <TextField
            required
            id="outlined-required"
            label="Email"
            placeholder="Enter Your Email"
            variant="outlined"
            value={email}
            disabled
            // onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            required
            type="password"
            id="outlined-required"
            label="Password"
            placeholder="Enter Your Password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            required
            type="text"
            id="outlined-required"
            label="Full Name"
            placeholder="Enter Your Full Name"
            variant="outlined"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <TextField
            required
            type="number"
            id="outlined-required"
            label="phone"
            placeholder="Enter Your Number"
            variant="outlined"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button className="bg-blue-600 text-white  py-3 px-6 rounded  font-semibold">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default RegisterComplete;
