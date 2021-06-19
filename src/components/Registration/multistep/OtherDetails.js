import React from "react";
import {
  TextField,
  Container,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
} from "@material-ui/core";

const OtherDetails = ({ formData, setForm, navigation }) => {
  const { pg, transport, pursuingCourse, agreeAdmission, agreePayment } =
    formData;

  return (
    <div style={{ marginBottom: "20px" }}>
      <Container maxWidth="sm">
        <h2>Step 6 of 6</h2>
        <h3>Other Details</h3>

        {/** PG */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
            textAlign: "left",
          }}
        >
          <p>Do you need paying guest facility through private agency?</p>
          <FormControl variant="outlined">
            <InputLabel id="select-pg-label">PG</InputLabel>
            <Select
              labelId="select-pg-label"
              id="select-pg"
              name="pg"
              value={pg}
              onChange={setForm}
              fullwidth
              style={{ width: "90px" }}
              labelWidth={30}
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
        </div>

        {/** TRansport */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
            textAlign: "left",
          }}
        >
          <p>Do you require transport facility for attending college?</p>
          <FormControl variant="outlined">
            <InputLabel id="select-transport-label">transport</InputLabel>
            <Select
              labelId="select-transport-label"
              id="select-transport"
              name="transport"
              value={transport}
              onChange={setForm}
              fullwidth
              style={{ width: "110px" }}
              labelWidth={70}
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
        </div>

        {/** pursuingCourse */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <p style={{ marginRight: "20px", textAlign: "left" }}>
            Are you pursuing any regular course from any University?
          </p>
          <FormControl variant="outlined">
            <InputLabel id="select-pursuingCourse-label">select</InputLabel>
            <Select
              labelId="select-pursuingCourse-label"
              id="select-pursuingCourse"
              name="pursuingCourse"
              value={pursuingCourse}
              onChange={setForm}
              fullwidth
              style={{ width: "90px" }}
              labelWidth={60}
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>
        </div>

        {/** Agree Admission */}

        <div style={{ borderTop: "1px solid lightgrey", textAlign: "left" }}>
          <p>
            I do hereby declare that, i have read and understood the contens and
            agree to the terms stated in the General Instructions given in the
            college website and filled up this online admission form in
            accordance with the general instructions and prospectus provided on
            the college webiste. I also hereby declare that the information
            given above is true and complete to the best of my knowledge and
            belief, and if any information in it is found to be incorrect, my
            admission shall be liable to such desciplinary action as may be
            decide by college. During the entire peroisd of course curriculum ,
            I shall not be involved in ragging or in any kind of misconduct.
          </p>
          <RadioGroup
            aria-label="agreeAdmission"
            name="agreeAdmission"
            value={agreeAdmission}
            onChange={setForm}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </div>
        {/** Agree Payment */}

        <div style={{ borderTop: "1px solid lightgrey", textAlign: "left" }}>
          <p>
            I do hereby declare that, i have read and understood the fee
            structure mentioned in the prospectus of the college, instructions
            of payment as mentioned under Fee structure and also in the
            instructions as mentioned in General Instructions. I do agree to pay
            all the amount of fees by the date specified by the Rajarshi College
            of Eduction & Skill and as it will be notified from time to time.
          </p>

          <RadioGroup
            aria-label="agreePayment"
            name="agreePayment"
            value={agreePayment}
            onChange={setForm}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
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

export default OtherDetails;
