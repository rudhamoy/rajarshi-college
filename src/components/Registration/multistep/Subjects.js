import React from "react";
import {
  Container,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

const Subjects = ({ formData, setForm, navigation }) => {
  const {
    programmeChoice1,
    programmeChoice2,
    programmeChoice3,
    electiveChoice1,
    electiveChoice2,
    electiveChoice3,
  } = formData;

  return (
    <div style={{ marginBottom: "20px" }}>
      <Container maxWidth="xs">
        <h2>Step 3 of 6</h2>
        <h3>Subjects</h3>

        <div style={{ marginTop: "30px" }}>
          <p style={{ fontStyle: "italic", fontWeight: "bold" }}>
            Programme- Which Subject seeking Honours/BA Pass/ Bsc Pass:
          </p>
          {/**  PROGRAMME CHOICE 1 */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <p>Preference Choice 1</p>
            <FormControl variant="outlined">
              <InputLabel id="select-programmeChoice1-label"></InputLabel>
              <Select
                labelId="select-programmeChoice1-label"
                id="programmeChoice1"
                name="programmeChoice1"
                value={programmeChoice1}
                onChange={setForm}
                fullwidth
                style={{ width: "180px" }}
              >
                <MenuItem value="Education(Hons)">Education(Hons)</MenuItem>
                <MenuItem value="English(Hons)">English(Hons)</MenuItem>
                <MenuItem value="Philoshophy(Hons)">Philoshophy(Hons)</MenuItem>
                <MenuItem value="History(Hons)">History(Hons)</MenuItem>
                <MenuItem value="Political Science(Hons)">
                  Political Science(Hons)
                </MenuItem>
                <MenuItem value="Physics(Hons)">Physics(Hons)</MenuItem>
                <MenuItem value="Chemsitry(Hons)">Chemsitry(Hons)</MenuItem>
                <MenuItem value="Mathematics(Hons)">Mathematics(Hons)</MenuItem>
                <MenuItem value="B.A Pass">B.A Pass</MenuItem>
                <MenuItem value="B.Sc Pass">B.Sc Pass</MenuItem>
              </Select>
            </FormControl>
          </div>
          {/**  PROGRAMME CHOICE 2 */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <p>Preference Choice 2</p>
            <FormControl variant="outlined">
              <InputLabel id="select-programmeChoice2-label"></InputLabel>
              <Select
                labelId="select-programmeChoice2-label"
                id="programmeChoice2"
                name="programmeChoice2"
                value={programmeChoice2}
                onChange={setForm}
                fullwidth
                style={{ width: "180px" }}
              >
                <MenuItem value="Education(Hons)">Education(Hons)</MenuItem>
                <MenuItem value="English(Hons)">English(Hons)</MenuItem>
                <MenuItem value="Philoshophy(Hons)">Philoshophy(Hons)</MenuItem>
                <MenuItem value="History(Hons)">History(Hons)</MenuItem>
                <MenuItem value="Political Science(Hons)">
                  Political Science(Hons)
                </MenuItem>
                <MenuItem value="Physics(Hons)">Physics(Hons)</MenuItem>
                <MenuItem value="Chemsitry(Hons)">Chemsitry(Hons)</MenuItem>
                <MenuItem value="Mathematics(Hons)">Mathematics(Hons)</MenuItem>
                <MenuItem value="B.A Pass">B.A Pass</MenuItem>
                <MenuItem value="B.Sc Pass">B.Sc Pass</MenuItem>
              </Select>
            </FormControl>
          </div>

          {/**  PROGRAMME CHOICE 3 */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <p>Preference Choice 3</p>
            <FormControl variant="outlined">
              <InputLabel id="select-programmeChoice3-label"></InputLabel>
              <Select
                labelId="select-programmeChoice3-label"
                id="programmeChoice3"
                name="programmeChoice3"
                value={programmeChoice3}
                onChange={setForm}
                fullwidth
                style={{ width: "180px" }}
              >
                <MenuItem value="Education(Hons)">Education(Hons)</MenuItem>
                <MenuItem value="English(Hons)">English(Hons)</MenuItem>
                <MenuItem value="Philoshophy(Hons)">Philoshophy(Hons)</MenuItem>
                <MenuItem value="History(Hons)">History(Hons)</MenuItem>
                <MenuItem value="Political Science(Hons)">
                  Political Science(Hons)
                </MenuItem>
                <MenuItem value="Physics(Hons)">Physics(Hons)</MenuItem>
                <MenuItem value="Chemsitry(Hons)">Chemsitry(Hons)</MenuItem>
                <MenuItem value="Mathematics(Hons)">Mathematics(Hons)</MenuItem>
                <MenuItem value="B.A Pass">B.A Pass</MenuItem>
                <MenuItem value="B.Sc Pass">B.Sc Pass</MenuItem>
              </Select>
            </FormControl>
          </div>

          {/** Closing div */}
        </div>
        <div>
          <p style={{ fontStyle: "italic", fontWeight: "bold" }}>
            Elective Course to be taken:
          </p>
          {/**  Elective CHOICE 1 */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <p>Preference Choice 1</p>
            <FormControl variant="outlined">
              <InputLabel id="select-electiveChoice1-label"></InputLabel>
              <Select
                labelId="select-electiveChoice1-label"
                id="electiveChoice1"
                name="electiveChoice1"
                value={electiveChoice1}
                onChange={setForm}
                fullwidth
                style={{ width: "180px" }}
              >
                <MenuItem value="Education">Education</MenuItem>
                <MenuItem value="English">English</MenuItem>
                <MenuItem value="Philoshophy">Philoshophy</MenuItem>
                <MenuItem value="History">History</MenuItem>
                <MenuItem value="Political Science">Political Science</MenuItem>
                <MenuItem value="Physics">Physics</MenuItem>
                <MenuItem value="Chemsitry">Chemsitry</MenuItem>
                <MenuItem value="Mathematics">Mathematics</MenuItem>
              </Select>
            </FormControl>
          </div>
          {/**  Elective CHOICE 2 */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <p>Preference Choice 2</p>
            <FormControl variant="outlined">
              <InputLabel id="select-electiveChoice2-label"></InputLabel>
              <Select
                labelId="select-electiveChoice2-label"
                id="electiveChoice2"
                name="electiveChoice2"
                value={electiveChoice2}
                onChange={setForm}
                fullwidth
                style={{ width: "180px" }}
              >
                <MenuItem value="Education">Education</MenuItem>
                <MenuItem value="English">English</MenuItem>
                <MenuItem value="Philoshophy">Philoshophy</MenuItem>
                <MenuItem value="History">History</MenuItem>
                <MenuItem value="Political Science">Political Science</MenuItem>
                <MenuItem value="Physics">Physics</MenuItem>
                <MenuItem value="Chemsitry">Chemsitry</MenuItem>
                <MenuItem value="Mathematics">Mathematics</MenuItem>
              </Select>
            </FormControl>
          </div>

          {/**  Elective CHOICE 3 */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <p>Preference Choice 3</p>
            <FormControl variant="outlined">
              <InputLabel id="select-electiveChoice3-label"></InputLabel>
              <Select
                labelId="select-electiveChoice3-label"
                id="electiveChoice3"
                name="electiveChoice3"
                value={electiveChoice3}
                onChange={setForm}
                fullwidth
                style={{ width: "180px" }}
              >
                <MenuItem value="Education">Education</MenuItem>
                <MenuItem value="English">English</MenuItem>
                <MenuItem value="Philoshophy">Philoshophy</MenuItem>
                <MenuItem value="History">History</MenuItem>
                <MenuItem value="Political Science">Political Science</MenuItem>
                <MenuItem value="Physics">Physics</MenuItem>
                <MenuItem value="Chemsitry">Chemsitry</MenuItem>
                <MenuItem value="Mathematics">Mathematics</MenuItem>
              </Select>
            </FormControl>
          </div>

          {/** Closing div */}
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

export default Subjects;
