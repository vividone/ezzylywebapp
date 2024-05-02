import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required").trim(),
  password: Yup.string().required("Password is required").trim(),
});

export const RegisterSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required").trim().nullable(),
  lastName: Yup.string().required("Last name is required").trim().nullable(),
  phoneNumber: Yup.string().required("Phone Number is required"),
  email: Yup.string().required("Email is required").trim(),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required(""),
  username: Yup.string().required("Role is required").trim().nullable(),
});

export const OnboardSchema = Yup.object().shape({
  name: Yup.string().required("Business name is required").trim().nullable(),
  regNumber: Yup.string().required("Register Number is required"),
  licenseNo: Yup.string().optional().trim(),
  description: Yup.string().required("Business Description is required"),
  categoryId: Yup.number().required("Select a category"),
  country: Yup.string().optional().trim(),
  state: Yup.string().optional().trim(),
  city: Yup.string().optional().trim(),
  zipcode: Yup.string().optional().trim(),
  latitude: Yup.string().optional().trim(),
  longitude: Yup.string().optional().trim(),
  dateOfInc: Yup.string().required("Year is required"),
  logo: Yup.string().optional(),
});

export const VerifyLoginSchema = Yup.object().shape({
  otp: Yup.string().optional().trim(),
});

export const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email().required("This field is required").trim(),
});

export const ResetPasswordSchema = Yup.object().shape({
  email: Yup.string().email().optional().trim(),
  otp: Yup.string().required("OTP field is required").trim(),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required(""),
});

export const ClassManagementSchema = Yup.object().shape({
  class: Yup.string().required("Class field is required").trim(),
  level: Yup.string().required("Level field is required").trim(),
  paymentSchedule: Yup.string()
    .required("Payment Schedule field is required")
    .trim(),
  paymentSession: Yup.string()
    .required("Payment Session field is required")
    .trim(),
  classSize: Yup.string().required("Class Size field is required").trim(),
  fee: Yup.string().required("Fee field is required").trim(),
});
