import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Button,
  Grid,
  Checkbox,
  TextField,
  OutlinedInput,
  Form,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import SendSharpIcon from "@material-ui/icons/SendSharp";

const useStyles = makeStyles({
  mainContainer: {
    display: "grid",
    justifyContent: "center",
    position: "relative",
    zIndex: 5,
  },
  formContainer: {
    position: "relative",
    width: "28.125rem",
    height: "auto",
    padding: "2rem",
  },
  inputField: {
    width: "100%",
    marginBottom: "1rem",
  },
  btn: {
    width: "100%",
    height: "3rem",
    background: "red",
    color: "#fff",
    "&:hover": {
      color: "red",
    },
  },
});

const StepOne = () => {
  const [showPasswordValue, setShowPasswordValue] = useState({
    showPassword: false,
  });

  const [showConfirmPasswordValue, setShowConfirmPasswordValue] = useState({
    showConfirmPassword: false,
  });

  const handleClickShowPassword = () => {
    setShowPasswordValue({
      showPassword: !showPasswordValue.showPassword,
    });
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPasswordValue({
      showConfirmPassword: !showConfirmPasswordValue.showConfirmPassword,
    });
  };

  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <Typography variant="h5" stle={{ color: "#999", textAlign: "center" }}>
        Sign Up With Email
      </Typography>
      <div className={classes.formContainer}>
        <form>
          <TextField
            className={classes.inputField}
            label="First Name"
            variant="outlined"
          />
          <TextField
            className={classes.inputField}
            label="Last Name"
            variant="outlined"
          />
          <TextField
            className={classes.inputField}
            label="Email"
            variant="outlined"
          />
          <FormControl className={classes.inputField} variant="outlined">
            <InputLabel>Password</InputLabel>
            <OutlinedInput
              type={showPasswordValue.showPassword ? "text" : "password"}
              labelWidth={70}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={handleClickShowPassword}>
                    {showPasswordValue.showPassword ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <FormControl className={classes.inputField} variant="outlined">
            <InputLabel>Confrim Password</InputLabel>
            <OutlinedInput
              type={
                showConfirmPasswordValue.showConfirmPassword
                  ? "text"
                  : "password"
              }
              labelWidth={135}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    onClick={handleClickShowConfirmPassword}
                  >
                    {showConfirmPasswordValue.showConfirmPassword ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <>
            <Button
              className={classes.btn}
              variant="contained"
              type="submit"
              endIcon={<SendSharpIcon />}
            >
              Sing Up
            </Button>
          </>
        </form>
      </div>
    </div>
  );
};

export default StepOne;
