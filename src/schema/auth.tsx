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
  addressLine1: Yup.string()
    .required("Address Line 1 is required")
    .trim()
    .nullable(),
  addressLine2: Yup.string().optional(),
  country: Yup.string().required("Country is required").trim().nullable(),
  state: Yup.string().required("State is required").trim().nullable(),
  city: Yup.string().required("City is required").trim().nullable(),
  zipcode: Yup.string().optional(),
});

export const OnboardSchema = Yup.object().shape({
  name: Yup.string().required("Business name is required").trim().nullable(),
  einTinNo: Yup.string().required("Ein / Tax number is required"),
  licenseNo: Yup.string().required("License Number is required").trim(),
  description: Yup.string().required("Business Description is required"),
  categoryId: Yup.number().required("Select a category"),
  country: Yup.string().required().trim("Country is required"),
  state: Yup.string().required().trim("State is required"),
  city: Yup.string().required().trim("City is required"),
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
