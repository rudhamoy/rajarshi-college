import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import FamilyDetails from "./multistep/FamilyDetails";
import ImageUpload from "./multistep/ImageUpload";
import OtherDetails from "./multistep/OtherDetails";
import Personal from "./multistep/Personal";
import Results from "./multistep/Results";
import Subjects from "./multistep/Subjects";
import Review from "./stepForm/Review";
import Submit from "./stepForm/Submit";

const defaultData = {
  gender: "",
  firstName: "",
  lastName: "",
  middleName: "",
  email: "",
  dob: "",
  nationality: "",
  aadhaar: "",
  category: "",
  fatherName: "",
  motherName: "",
  pwd: "",
  annualIncome: "",
  minority: "",
  martial: "",
  employment: "",
  programmeChoice1: "",
  programmeChoice2: "",
  programmeChoice3: "",
  electiveChoice1: "",
  electiveChoice2: "",
  electiveChoice3: "",
  image: "",
  subject: "",
  subject2: "",
  subject3: "",
  subject4: "",
  subject5: "",
  subject6: "",
  subject7: "",
  fullmarks: "",
  fullmarks2: "",
  fullmarks3: "",
  fullmarks4: "",
  fullmarks5: "",
  fullmarks6: "",
  fullmarks7: "",
  grade: "",
  grade2: "",
  grade3: "",
  grade4: "",
  grade5: "",
  grade6: "",
  grade7: "",
  totalPercentage: "",
  pg: "",
  transport: "",
  pursuingCourse: "",
  agreeAdmission: "",
  agreePayment: "",
  address: "",
  state: "",
  city: "",
  zip: "",
  phone: "",
};

const steps = [
  { id: "personal" },
  { id: "familydetails" },
  { id: "subjects" },
  { id: "image" },
  { id: "results" },
  { id: "others" },
  { id: "review" },
  { id: "submit" },
];

const MultiStepForm = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { formData, setForm, navigation };

  switch (step.id) {
    case "personal":
      return <Personal {...props} />;
    case "familydetails":
      return <FamilyDetails {...props} />;
    case "subjects":
      return <Subjects {...props} />;
    case "image":
      return <ImageUpload {...props} />;
    case "results":
      return <Results {...props} />;
    case "others":
      return <OtherDetails {...props} />;
    case "review":
      return <Review {...props} />;
    case "submit":
      return <Submit {...props} />;
  }

  return (
    <div>
      <h2>MultiStep Form</h2>
    </div>
  );
};

export default MultiStepForm;
