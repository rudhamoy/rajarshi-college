import React from "react";
import {
  TextField,
  Container,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { personalSchema } from "./PersonalValidation";

const Personal = ({ formData, setForm, navigation }) => {
  const {
    firstName,
    lastName,
    middleName,
    email,
    dob,
    nationality,
    aadhaar,
    category,
    gender,
  } = formData;

  const submitNext = async (e) => {
    e.preventDefault();

    let formInput = {
      gender: setForm,
      firstName: setForm,
      lastName: setForm,
      email: setForm,
      dob: setForm,
      nationality: setForm,
      category: setForm,
      aadhaar: setForm,
    };

    await personalSchema.isValid(formInput);

    navigation.next();
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <Container maxWidth="xs">
        <h2>Step 1 of 6</h2>
        <h3>Personal Info</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <FormControl
            variant="outlined"
            style={{ width: "130px", marginTop: "8px" }}
          >
            <InputLabel id="select-gender-label">Gender</InputLabel>
            <Select
              labelId="select-gender-label"
              id="select-gender"
              name="gender"
              value={gender}
              onChange={setForm}
              labelWidth={55}
            >
              <MenuItem value="Miss">Miss.</MenuItem>
              <MenuItem value="Mr">Mr.</MenuItem>
              <MenuItem value="Mrs">Mrs.</MenuItem>
              <MenuItem value="Dr">Dr.</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="First Name"
            name="firstName"
            value={firstName}
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth
            style={{ marginLeft: "20px" }}
          />
        </div>
        <TextField
          label="Middle Name"
          name="middleName"
          value={middleName}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={lastName}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <TextField
          label="Email"
          name="email"
          value={email}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <TextField
            label="D.O.B"
            name="dob"
            value={dob}
            onChange={setForm}
            variant="outlined"
            type="date"
            defaultValue="21-01-1995"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            style={{ marginTop: "8px" }}
          />
          <TextField
            label="Nationality"
            name="nationality"
            value={nationality}
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth
            style={{ marginLeft: "20px" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <FormControl
            variant="outlined"
            style={{ width: "150px", marginTop: "8px" }}
          >
            <InputLabel id="select-category-label">Category</InputLabel>
            <Select
              labelId="select-categroy-label"
              id="select-category"
              name="category"
              value={category}
              onChange={setForm}
              labelWidth={65}
            >
              <MenuItem value="UR">UR</MenuItem>
              <MenuItem value="SC">SC</MenuItem>
              <MenuItem value="ST">ST</MenuItem>
              <MenuItem value="OBC">OBC</MenuItem>
              <MenuItem value="OTHERS">OTHERS</MenuItem>
            </Select>
          </FormControl>
          <TextField
            type="number"
            label="Aadhaar Card"
            name="aadhaar"
            value={aadhaar}
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth
            style={{ marginLeft: "20px" }}
          />
        </div>

        <Button
          variant="contained"
          fullWidth
          color="primary"
          style={{ margintop: "1rem" }}
          onClick={submitNext}
        >
          Next
        </Button>
      </Container>
    </div>
  );
};

export default Personal;
