import React from "react";
import {
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ListItemText,
  IconButton,
  Button,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { db } from "../../../firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const RenderAccordion = ({ summary, details, go }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        {summary}
      </AccordionSummary>
      <AccordionDetails>
        <div>
          {details.map((data, index) => {
            const objKey = Object.keys(data)[0];
            const objValue = data[Object.keys(data)[0]];

            return (
              <ListItemText
                key={index}
              >{`${objKey}: ${objValue}`}</ListItemText>
            );
          })}
          <IconButton
            color="primary"
            component="span"
            onClick={() => go(`${summary.toLowerCase()}`)}
          >
            <EditIcon />
          </IconButton>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

const Review = ({ formData, navigation }) => {
  const { go } = navigation;
  const {
    firstName,
    lastName,
    middleName,
    email,
    gender,
    dob,
    nationality,
    aadhaar,
    category,
    fatherName,
    motherName,
    pwd,
    annualIncome,
    minority,
    martial,
    employment,
    programmeChoice1,
    programmeChoice2,
    programmeChoice3,
    electiveChoice1,
    electiveChoice2,
    electiveChoice3,
    image,
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
    pg,
    transport,
    pursuingCourse,
    agreeAdmission,
    agreePayment,
  } = formData;

  const submitHandler = (e) => {
    e.preventDefault();
    db.collection("registration").add({
      firstName,
      lastName,
      middleName,
      email,
      gender,
      dob,
      nationality,
      aadhaar,
      category,
      fatherName,
      motherName,
      pwd,
      annualIncome,
      minority,
      martial,
      employment,
      programmeChoice1,
      programmeChoice2,
      programmeChoice3,
      electiveChoice1,
      electiveChoice2,
      electiveChoice3,
      image,
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
      pg,
      transport,
      pursuingCourse,
      agreeAdmission,
      agreePayment,
    });

    toast.success(`Registration sent Successfully`);

    go("submit");
  };

  return (
    <Container
      maxWidth="sm"
      style={{ marginBottom: "20px", textAlign: "left" }}
    >
      <h2>Review</h2>
      <RenderAccordion
        go={go}
        summary="Personal"
        details={[
          { Gender: gender },
          { "First Name": firstName },
          { "Middle Name": middleName },
          { "Last Name": lastName },
          { Email: email },
          { "D.O.B": dob },
          { Nationality: nationality },
          { "Aadhaar Card": aadhaar },
          { Category: category },
        ]}
      />
      <RenderAccordion
        go={go}
        summary="Family Details"
        details={[
          { "Father's Name": fatherName },
          { "Mother's Name": motherName },
          { "Whether person specially abled?(PWD)": pwd },
          { "Annual Income": annualIncome },
          { Minority: minority },
          { "Martial Status": martial },
          { "Employment Status": employment },
        ]}
      />
      <RenderAccordion
        go={go}
        summary="Subjects"
        details={[
          { "Preference Choice 1": programmeChoice1 },
          { "Preference Choice 2": programmeChoice2 },
          { "Preference Choice 3": programmeChoice3 },
          { "Elective Choice 1": electiveChoice1 },
          { "Elective Choice 1": electiveChoice2 },
          { "Elective Choice 1": electiveChoice3 },
        ]}
      />
      <RenderAccordion
        go={go}
        summary="Results"
        details={[
          { Subject: subject },
          { Fullmarks: fullmarks },
          { Grade: grade },
          { "Subject 2": subject2 },
          { "Fullmarks 2": fullmarks2 },
          { "Grade 2": grade2 },
          { "Subject 3": subject3 },
          { "Fullmarks 3": fullmarks3 },
          { "Grade 3": grade3 },
          { "Subject 4": subject4 },
          { "Fullmarks 4": fullmarks4 },
          { "Grade 4": grade4 },
          { "Subject 5": subject5 },
          { "Fullmarks 5": fullmarks5 },
          { "Grade 5": grade5 },
          { "Subject 6": subject6 },
          { "Fullmarks 6": fullmarks6 },
          { "Grade 6": grade6 },
          { "Subject 7": subject7 },
          { "Fullmarks 7": fullmarks7 },
          { "Grade 7": grade7 },
          { "Total Percentage of Marks Obtained": totalPercentage },
        ]}
      />
      <RenderAccordion
        go={go}
        summary="Other Details"
        details={[
          { "Guest Facility": pg },
          { "Transport Facility": transport },
          {
            "Pursuing course from other University?": pursuingCourse,
          },
          { "Agree Admission": agreeAdmission },
          { "Agree Payment": agreePayment },
        ]}
      />
      <RenderAccordion
        go={go}
        summary="Image Uploaded"
        details={[{ image: image }]}
      />
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "1.5rem" }}
        onClick={submitHandler}
      >
        Submit
      </Button>
      <ToastContainer />
    </Container>
  );
};

export default Review;
