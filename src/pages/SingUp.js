import React, { useState } from "react";
import "./SignUp.css";
import { Button } from "antd";

const SingUp = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  return (
    <div className="signup__container">
      <div className="signup__formContainer">
        <form className="singup__form">
          <h2>Create an Account</h2>
          <input
            placeholder="Enter Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Enter Password"
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            placeholder="Confirm Password"
            type="password"
            value={confirmPassword}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button size="large" style={{ borderRadius: "8px" }}>
            Sign Up
          </Button>
        </form>
        <h2>
          Have an account? <span>Click Here</span>
        </h2>
      </div>
    </div>
  );
};

export default SingUp;
