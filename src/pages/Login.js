import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "antd";
import { auth, googleAuthProvider } from "../firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const Login = ({ history }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const classes = useStyles();

  let dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user && user.token) {
      history.push("/");
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      const { user } = result;
      const idTokenResult = await user.getIdTokenResult();

      dispatch({
        type: "LOGGED_IN_USER",
        payload: {
          email: user.email,
          token: idTokenResult.token,
        },
      });
      history.push("/");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setLoading(false);
    }
  };

  const googleLogin = async () => {
    auth
      .signInWithPopup(googleAuthProvider)
      .then(async (result) => {
        const { user } = result;
        const idTokenResult = await user.getIdTokenResult;

        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            email: user.email,
            token: idTokenResult.token,
          },
        });
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
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
          height: "290px",
          padding: "0 3%",
          borderRadius: "6px",
        }}
      >
        <div>
          {loading ? <h2>Loading...</h2> : <h2>Login</h2>}

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
          <TextField
            required
            size="small"
            type="password"
            id="outlined-required"
            label="Password"
            placeholder="Enter Your Password"
            variant="outlined"
            value={password}
            // fullWidth
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>
        <Button
          type="primary"
          size="large"
          onClick={handleSubmit}
          shape="round"
          block
          //   disabled={!email || password.length < 6}
        >
          Login with Email/Password
        </Button>
        <Button
          type="danger"
          size="large"
          onClick={googleLogin}
          shape="round"
          block
          icon={<GoogleOutlined />}
          style={{ marginTop: "10px" }}
        >
          Login with Google
        </Button>
        <div style={{ marginTop: "10px", textAlign: "right" }}>
          <Link to="/forgot/password" style={{ color: "red" }}>
            Forgot Password
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
