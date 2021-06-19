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

const Results = ({ formData, setForm, navigation }) => {
  const {
    subject,
    subject2,
    subject3,
    subject4,
    subject5,
    subject6,
    subject7,
    fullmarks,
    fullmarks2,
    fullmarks3,
    fullmarks4,
    fullmarks5,
    fullmarks6,
    fullmarks7,
    grade,
    grade2,
    grade3,
    grade4,
    grade5,
    grade6,
    grade7,
    totalPercentage,
  } = formData;

  return (
    <div style={{ marginBottom: "20px" }}>
      <Container maxWidth="xs">
        <h2>Step 5 of 6</h2>
        <h3>Results</h3>

        {/** one */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <p>1.</p>
          <TextField
            label="Subject"
            name="subject"
            value={subject}
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth
            style={{ marginLeft: "4px" }}
          />
          <TextField
            type="number"
            label="Fullmarks"
            name="fullmarks"
            value={fullmarks}
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth
            style={{ marginLeft: "10px" }}
          />
          <TextField
            type="number"
            label="Grade"
            name="grade"
            value={grade}
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth
            style={{ marginLeft: "10px" }}
          />
        </div>
        {/** two */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <p>2.</p>
          <TextField
            label="Subject"
            name="subject2"
            value={subject2}
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth
            style={{ marginLeft: "4px" }}
          />
          <TextField
            type="number"
            label="Fullmarks"
            name="fullmarks2"
            value={fullmarks2}
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth
            style={{ marginLeft: "10px" }}
          />
          <TextField
            type="number"
            label="Grade"
            name="grade2"
            value={grade2}
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth
            style={{ marginLeft: "10px" }}
          />
        </div>
        {/** three */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <p>3.</p>
          <TextField
            label="Subject"
            name="subject3"
            value={subject3}
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth
            style={{ marginLeft: "4px" }}
          />
          <TextField
            type="number"
            label="Fullmarks"
            name="fullmarks3"
            value={fullmarks3}
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth
            style={{ marginLeft: "10px" }}
          />
          <TextField
            type="number"
            label="Grade"
            name="grade3"
            value={grade3}
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth
            style={{ marginLeft: "10px" }}
          />
        </div>
        {/** four */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <p>4.</p>
          <TextField
            label="Subject"
            name="subject4"
            value={subject4}
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth
            style={{ marginLeft: "4px" }}
          />
          <TextField
            type="number"
            label="Fullmarks"
            name="fullmarks4"
            value={fullmarks4}
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth
            style={{ marginLeft: "10px" }}
          />
          <TextField
            type="number"
            label="Grade"
            name="grade4"
            value={grade4}
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth
            style={{ marginLeft: "10px" }}
          />
        </div>
        {/** five */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <p>5.</p>
          <TextField
            label="Subject"
            name="subject5"
            value={subject5}
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth
            style={{ marginLeft: "4px" }}
          />
          <TextField
            type="number"
            label="Fullmarks"
            name="fullmarks5"
            value={fullmarks5}
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth
            style={{ marginLeft: "10px" }}
          />
          <TextField
            type="number"
            label="Grade"
            name="grade5"
            value={grade5}
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth
            style={{ marginLeft: "10px" }}
          />
        </div>
        {/** six */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <p>6.</p>
          <TextField
            label="Subject"
            name="subject6"
            value={subject6}
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth
            style={{ marginLeft: "4px" }}
          />
          <TextField
            type="number"
            label="Fullmarks"
            name="fullmarks6"
            value={fullmarks6}
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth
            style={{ marginLeft: "10px" }}
          />
          <TextField
            type="number"
            label="Grade"
            name="grade6"
            value={grade6}
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth
            style={{ marginLeft: "10px" }}
          />
        </div>
        {/** seven */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <p>7.</p>
          <TextField
            label="Subject"
            name="subject7"
            value={subject7}
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth
            style={{ marginLeft: "4px" }}
          />
          <TextField
            type="number"
            label="Fullmarks"
            name="fullmarks7"
            value={fullmarks7}
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth
            style={{ marginLeft: "10px" }}
          />
          <TextField
            type="number"
            label="Grade"
            name="grade7"
            value={grade7}
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth
            style={{ marginLeft: "10px" }}
          />
        </div>

        {/** total percentage */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontStyle: "italic",
              fontWeight: "600",
            }}
          >
            Total Percentage of Marks Obtained
          </p>
          <TextField
            type="number"
            label="Percentage"
            name="totalPercentage"
            value={totalPercentage}
            onChange={setForm}
            margin="normal"
            variant="outlined"
            autoComplete="off"
            fullWidth
            style={{ width: "120px" }}
          />
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

export default Results;
