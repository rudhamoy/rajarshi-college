import React from "react";
import { TextField, Container, Button } from "@material-ui/core";

const Address = ({ formData, setForm, navigation }) => {
  const { state, city, zip, address } = formData;

  return (
    <Container maxWidth="xs" style={{ marginBottom: "20px" }}>
      <h2>Address</h2>
      <TextField
        label="Address"
        name="address"
        value={address}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="City"
        name="city"
        value={city}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="State"
        name="state"
        value={state}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Zip"
        name="zip"
        value={zip}
        type="number"
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
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
  );
};

export default Address;
