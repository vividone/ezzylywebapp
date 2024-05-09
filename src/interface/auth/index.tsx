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
  country: string;
  city: string;
  state: string;
  zipcode: string;
  accountType: number;
  addressLine1: string;
  addressLine2: string;
}

export interface IAuthOnboard {
  name: string;
  userId?: string;
  address: string;
  einTinNo: string;
  phone: string;
  licenseNo: string;
  dateOfInc: string;
  description?: string;
  state: string;
  city: string;
  country: string;
  zipcode: string;
  categoryId: number;
}
export interface IVerifyLogin {
  phoneNumber?: string;
  otp?: string;
  userId?: string;
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
