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

const FamilyDetails = ({ formData, setForm, navigation }) => {
  const {
    fatherName,
    motherName,
    pwd,
    annualIncome,
    minority,
    martial,
    employment,
  } = formData;

  return (
    <div style={{ marginBottom: "20px" }}>
      <Container maxWidth="xs">
        <h2>Step 2 of 6</h2>
        <h3>Family Details</h3>
        <TextField
          label="Father's Name"
          name="fatherName"
          value={fatherName}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <TextField
          label="Mother's Name"
          name="motherName"
          value={motherName}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Whether person specially abled?(PWD)</p>
          <FormControl variant="outlined">
            <InputLabel id="select-pwd-label"></InputLabel>
            <Select
              labelId="select-pwd-label"
              id="select-pwd"
              name="pwd"
              value={pwd}
              onChange={setForm}
              fullwidth
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
        </div>

        <TextField
          type="number"
          label="Annual Income"
          name="annualIncome"
          value={annualIncome}
          onChange={setForm}
          margin="normal"
          multiline
          placeholder="Annual Family Income"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Minority Group(Y/N)</p>
          <FormControl variant="outlined">
            <InputLabel id="select-minority-label"></InputLabel>
            <Select
              labelId="select-minority-label"
              id="select-minority"
              name="minority"
              value={minority}
              onChange={setForm}
              fullwidth
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "10px 0",
          }}
        >
          <p>Martial Status</p>
          <FormControl variant="outlined">
            <InputLabel id="select-martial-label"></InputLabel>
            <Select
              labelId="select-martial-label"
              id="select-martial"
              name="martial"
              value={martial}
              onChange={setForm}
              fullwidth
              style={{ width: "140px" }}
            >
              <MenuItem value="Married">Married</MenuItem>
              <MenuItem value="Unmarried">Unmarried</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>Employment Status</p>
          <FormControl variant="outlined">
            <InputLabel id="select-employment-label"></InputLabel>
            <Select
              labelId="select-employment-label"
              id="select-employment"
              name="employment"
              value={employment}
              onChange={setForm}
              fullwidth
              style={{ width: "140px" }}
            >
              <MenuItem value="Employed">Employed</MenuItem>
              <MenuItem value="Unemployed">Unemployed</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Button
            onClick={() => navigation.previous()}
            variant="contained"
            color="secondary"
          >
            Back
          </Button>
          <Button
            onClick={() => navigation.next()}
            variant="contained"
            color="primary"
          >
            Next
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default FamilyDetails;
