import * as Yup from "yup";

export const personalInfoSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

export const accountSetupSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const preferencesSchema = Yup.object().shape({
  theme: Yup.string().oneOf(["Light", "Dark"]).required("Theme is required"),
  subscribe: Yup.boolean(),
});
