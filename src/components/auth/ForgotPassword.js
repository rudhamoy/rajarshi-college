import React, { useState, useEffect } from "react";
// import { auth } from "../../firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { auth } from "../../firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const ForgotPassword = ({ history }) => {
  const [email, setEmail] = useState();
  const [loading, setLoading] = useState(false);

  const classes = useStyles();

  const { user } = useSelector((state) => state);

  useEffect(() => {
    if (user && user.token) {
      history.push("/");
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const config = {
      url: process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT,
      handleCodeInApp: true,
    };

    await auth
      .sendPasswordResetEmail(email, config)
      .then(() => {
        setEmail();
        setLoading(false);
        toast.success("Check your email for password reset link");
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message);
        console.log("error msg in password reset");
      });
  };

  return (
    <div>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        {loading ? <h2>Loading...</h2> : <h2>Reset Your Password</h2>}
        <ToastContainer />
        <TextField
          required
          size="small"
          id="outlined-full-width"
          label="Email"
          placeholder="Enter Your Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%" }}
        />
        <Button onClick={handleSubmit} variant="contained" disabled={!email}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ForgotPassword;
