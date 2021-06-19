import React from "react";
import { TextField, Container, Button } from "@material-ui/core";

const Names = ({ formData, setForm, navigation }) => {
  const { firstName, lastName, userName } = formData;

  return (
    <div style={{ marginBottom: "20px" }}>
      <Container maxWidth="xs">
        <h2>Names</h2>
        <TextField
          label="First Name"
          name="firstName"
          value={firstName}
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
          label="User Name"
          name="userName"
          value={userName}
          onChange={setForm}
          margin="normal"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />
        <Button
          variant="contained"
          fullWidth
          color="primary"
          style={{ margintop: "1rem" }}
          onClick={() => navigation.next()}
        >
          Next
        </Button>
      </Container>
    </div>
  );
};

export default Names;
