import React from "react";
import { TextField, Container, Button } from "@material-ui/core";

const Contact = ({ formData, setForm, navigation }) => {
  const { phone, email } = formData;

  return (
    <Container maxWidth="xs" style={{ marginBottom: "20px" }}>
      <h2>Address</h2>
      <TextField
        label="Phone"
        name="phone"
        value={phone}
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

export default Contact;
