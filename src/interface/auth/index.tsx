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


/**
 * {
  "firstName": "TEST",
  "lastName": "TEST",
   "username": "fidelisekeh7",
  "addressLine1":"46 Oduduwa. Street",
  "addressLine2":"46 Oduduwa. Street",
  "email":"fidelisekeh@gmail.com",
  "phoneNumber":"+2348038814982",
  "password":"password123",
  "city":"Ifako",
  "state":"Lagos",
  "zipcode": "100001",
  "country":"Nigeria",
  "accountType": 0
}
 * 
 */

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
