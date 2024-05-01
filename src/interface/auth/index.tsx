export interface Option {
  label: string;
  value: string;
  cities: string[];
  name: string;
}
export interface CatOption {
  label: string;
  value: number;
  name: string;
}
export interface IAuthInput {
  username: string;
  password: string;
  // confirmPassword: string;
}

export interface IAuthRegister {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  confirmPassword?: string;
  terms?: boolean;
  username: string;
}

export interface IAuthOnboard {
  name: string;
  regNumber: string;
  licenseNo?: string;
  dateOfInc?: string;
  description?: string;
  state?: string;
  city?: string;
  country?: string;
  zipcode?: string;
  latitude?: string;
  longitude?: string;
  categoryId: number;
}
export interface IVerifyLogin {
  email?: string;
  otp?: string;
}
export interface IForgotPassword {
  email: string;
}

export interface IResetPassword {
  email: string;
  otp: string;
  password: string;
  confirmPassword?: string;
}
