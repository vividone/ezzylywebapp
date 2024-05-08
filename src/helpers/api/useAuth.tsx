import axiosInstance from "@/helpers/axiosConfig";
import { useUrls } from "@/helpers/useUrls";
import {
  IAuthInput,
  IAuthOnboard,
  IAuthRegister,
  IVerifyLogin,
  IForgotPassword,
  IResetPassword,
} from "@/interface/auth";
import { IErrorResponseType } from "@/interface/common/error";
import {
  setUserDetails,
  userDetailsSelector,
} from "@/redux/feature/authentication";
import {
  setUserOnboard,
  userOnboardSelector,
} from "@/redux/feature/onboardAuth";
import { useAppDispatch } from "@/redux/store";
import {
  LoginSchema,
  OnboardSchema,
  RegisterSchema,
  VerifyLoginSchema,
  ForgotPasswordSchema,
  ResetPasswordSchema,
} from "@/schema/auth";
import { PAGES } from "@/utils/pages";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import useSessionStorage from "./useSession";
import { TOKEN } from "@/utils/token";

export const useLogin = () => {
  const router = useRouter();
  const { loginUrl } = useUrls();
  const [, setToken] = useSessionStorage(TOKEN.ACCESS);
  const [, setUserToken] = useSessionStorage(TOKEN.USER, "");
  const dispatch = useAppDispatch();
  // const queryClient = useQueryClient();
  const { mutate, isLoading, isError, isSuccess, error } = useMutation(
    (payload: IAuthInput) => {
      return axiosInstance.post(loginUrl, payload);
    }
  );

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    } as IAuthInput,
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      try {
        const castedValues = LoginSchema.cast(values);

        mutate(castedValues, {
          onSuccess: (res) => {
            dispatch(setUserDetails({ data: { userEmail: res.data.data.user.email, userId: res.data.data.user.id} }));
            setToken(res.data.data.jwt.token);
            setUserToken(res.data.data);
            router.push(PAGES.ONBOARD)
          },
          onError: (res: any) => {
            if(res.response.data.responseCode === "010") {
              dispatch(setUserDetails({ data: { userEmail: res.response.data.data.phoneNumber, userId: res.response.data.data.id} }));
              router.push(PAGES.VERIFY_LOGIN);
            }
          },
        });
        formik.handleReset;
      } catch (error: any) {
        throw new Error(error);
      }
    },
  });
  const typedError = error as IErrorResponseType;
  const errorString = Array.isArray(typedError?.response?.data?.message)
    ? typedError?.response?.data?.message[0]
    : typedError?.response?.data?.message || "";
  return { formik, isLoading, error: errorString, isError, isSuccess };
};

// register
export const useRegister = () => {
  const router = useRouter();
  const { registerUrl } = useUrls();
  const dispatch = useAppDispatch();
  const { userOnboard } = useSelector(userOnboardSelector);
  console.log(userOnboard);
  // const queryClient = useQueryClient();
  const { mutate, isLoading, isSuccess, isError, error } = useMutation(
    (payload: IAuthRegister) => {
      return axiosInstance.post(registerUrl, payload);
    }

    // After registration redirect to Service Provider Onboarding
  );

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      username: "",
      password: "",
      confirmPassword: "",
      terms: false,
      addressLine1: "",
      addressLine2: "",
      country: "",
      state: "",
      city: "",
      zipcode: "",
      accountType: 1,
    } as IAuthRegister,
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: RegisterSchema,
    // disabling it because we are not using it an it won't be passed through the api
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSubmit: async ({ terms, confirmPassword, ...values }) => {
      try {
        await formik.validateForm();
        mutate(
          { ...values },
          {
            onSuccess: (res: any) => {
              console.log(res)
              dispatch(setUserDetails({ data: { userEmail: values.phoneNumber, userId: res.data.data.id} }));
              router.push(PAGES.VERIFY_LOGIN);
            },
            onError: (res: any) => {

            },
          }
        );
        formik.handleReset;
      } catch (error: any) {
        throw new Error(error);
      }
    },
  });
  const typedError = error as IErrorResponseType;
  const errorString = Array.isArray(typedError?.response?.data?.message)
    ? typedError?.response?.data?.message[0]
    : typedError?.response?.data?.message || "";
  return { formik, isLoading, isSuccess, isError, error: errorString };
};

//onboard login
export const useOnboard = () => {
  const router = useRouter();
  const { onboardServiceProviderUrl } = useUrls();
  const { userDetails } = useSelector(userDetailsSelector);
  const dispatch = useAppDispatch();
  // const queryClient = useQueryClient();
  const { mutate, isLoading, isSuccess, isError, error } = useMutation(
    (payload: IAuthOnboard) => {
      return axiosInstance.post(onboardServiceProviderUrl, payload);
    }
  );
  const formik = useFormik({
    initialValues: {
      name: "",
      userId: userDetails.userId,
      address: "",
      licenseNo: "",
      einTinNo: "",
      phone: "",
      description: "",
      dateOfInc: "",
      country: "",
      state: "",
      city: "",
      zipcode: "",
      categoryId: 0,
    } as IAuthOnboard,
    validationSchema: OnboardSchema,
    validateOnBlur: true,
    validateOnChange: true,
    // disabling it because we are not using it an it won't be passed through the api
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSubmit: async ({ ...values }) => {
      console.log(values);
      try {
        await formik.validateForm();
        mutate(
          { ...values },
          {
            onSuccess: (response: any) => {
              const { _id } = response.data;
              dispatch(setUserOnboard(String(_id)));
              router.push(PAGES.HOME);
            },
            //   onError: (res: any) => {

            //   },
          }
        );
        formik.handleReset;
      } catch (error: any) {
        throw new Error(error);
      }
    },
  });
  const typedError = error as IErrorResponseType;
  const errorString = Array.isArray(typedError?.response?.data?.message)
    ? typedError?.response?.data?.message[0]
    : typedError?.response?.data?.message || "";
  return {
    formik,
    isLoading,
    isSuccess,
    isError,
    error: errorString,
  };
};

// verifyLogin
export const useVerifyLogin = (otp: string) => {
  const router = useRouter();
  const { verifyLoginUrl } = useUrls();
  const { userDetails } = useSelector(userDetailsSelector);
  // const queryClient = useQueryClient();
  const { mutate, isLoading, error } = useMutation((payload: IVerifyLogin) => {
    return axiosInstance.post(verifyLoginUrl, payload);
  });

  const formik = useFormik({
    initialValues: {
      userId: "",
      otp: "",
      phoneNumber: "",
    } as IVerifyLogin,
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: VerifyLoginSchema,
    onSubmit: async () => {
      try {
        mutate(
          { otp, phoneNumber: userDetails.userEmail, userId: userDetails.userId },
          {
            onSuccess: () => {
              router.push(PAGES.LOGIN);
            },
            //   onError: (res: any) => {

            //   },
          }
        );
        formik.handleReset;
      } catch (error: any) {
        throw new Error(error);
      }
    },
  });
  const typedError = error as IErrorResponseType;
  const errorString = Array.isArray(typedError?.response?.data?.message)
    ? typedError?.response?.data?.message[0]
    : typedError?.response?.data?.message || "";
  return { formik, isLoading, error: errorString };
};

// resend otp
export const useResendOTP = () => {
  const { resendOTPUrl } = useUrls();
  const { userDetails } = useSelector(userDetailsSelector);
  // const queryClient = useQueryClient();
  const {
    mutate,
    isLoading,
    isSuccess: resendOTPIsSuccess,
  } = useMutation((payload: IVerifyLogin) => {
    return axiosInstance.post(resendOTPUrl, payload);
  });

  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
    } as IVerifyLogin,
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: VerifyLoginSchema,
    onSubmit: async () => {
      try {
        mutate(
          { phoneNumber: userDetails.userEmail },
          {
            onSuccess: (res: any) => {
              console.log(res);
            },
          }
        );
        formik.handleReset;
      } catch (error: any) {
        throw new Error(error);
      }
    },
  });
  return { formik, isLoading, resendOTPIsSuccess };
};

// forgot password verify

export const useForgotPassword = () => {
  const { resendOTPUrl } = useUrls();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {
    mutate,
    isLoading,
    isSuccess: forgotPasswordIsSuccess,
    isError: forgotPasswordIsError,
    error,
  } = useMutation((payload: IForgotPassword) => {
    return axiosInstance.post(resendOTPUrl, payload);
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    } as IForgotPassword,
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: ForgotPasswordSchema,
    onSubmit: async (values) => {
      try {
        await formik.validateForm();
        mutate(values, {
          onSuccess: () => {
            dispatch(setUserDetails({ data: values.email }));
            router.push(PAGES.RESET_PASSWORD);
          },
        });
        formik.handleReset;
      } catch (error: any) {
        throw new Error(error);
      }
    },
  });
  const typedError = error as IErrorResponseType;
  const errorString = Array.isArray(typedError?.response?.data?.message)
    ? typedError?.response?.data?.message[0]
    : typedError?.response?.data?.message || "";
  return {
    formik,
    isLoading,
    forgotPasswordIsSuccess,
    forgotPasswordIsError,
    error: errorString,
  };
};

//resetpassword
export const useResetPassword = () => {
  const { resetPasswordUrl } = useUrls();
  const router = useRouter();
  const { userDetails } = useSelector(userDetailsSelector);
  const {
    mutate,
    isLoading,
    isSuccess: resetPasswordIsSuccess,
    isError: resetPasswordIsError,
    error,
  } = useMutation((payload: IResetPassword) => {
    return axiosInstance.post(resetPasswordUrl, payload);
  });

  const formik = useFormik({
    initialValues: {
      email: userDetails.userEmail,
      otp: "",
      password: "",
      confirmPassword: "",
    } as IResetPassword,
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: ResetPasswordSchema,
    // disabling it because we are not using it an it won't be passed through the api
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSubmit: async ({ confirmPassword, ...values }) => {
      try {
        await formik.validateForm();
        mutate(values, {
          onSuccess: () => {
            router.push(PAGES.LOGIN);
          },
        });
        formik.handleReset;
      } catch (error: any) {
        throw new Error(error);
      }
    },
  });
  const typedError = error as IErrorResponseType;
  const errorString = Array.isArray(typedError?.response?.data?.message)
    ? typedError?.response?.data?.message[0]
    : typedError?.response?.data?.message || "";
  return {
    formik,
    isLoading,
    resetPasswordIsSuccess,
    resetPasswordIsError,
    error: errorString,
  };
};

// export const useGetLogout = () => {
//   const { logoutUrl } = useUrls();
//   const [token] = useSessionStorage<string>(TOKEN.ACCESS);
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const { mutate, isSuccess } = useMutation((payload: any) => {
//     return axiosInstance.get(logoutUrl, {
//       headers: { Authorization: ` ${token}` },
//     });
//   });
//   return {
//     isSuccess,
//     mutate,
//   };
// };

export const logOutUserReq = () => {
  sessionStorage.clear();
  window.location.href = "/";
};
