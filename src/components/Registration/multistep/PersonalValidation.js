import * as yup from "yup";

export const personalSchema = yup.object().shape({
  gender: yup.string().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  dob: yup.date().required(),
  nationality: yup.string().required(),
  aadhaar: yup.number().required().positive().integer(),
  category: yup.string().required(),
});
