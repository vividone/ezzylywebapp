import axiosInstance from "@/helpers/axiosConfig";
import { useUrls } from "@/helpers/useUrls";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import { PostClassManagementProps } from "@/interface/request";
import { ClassManagementSchema } from "@/schema/auth";
import { IErrorResponseType } from "@/interface/common/error";
import { toast } from "react-hot-toast";
import { userClassIdSelector } from "@/redux/feature/classManagement";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { PAGES } from "@/utils/pages";

export const useClassManagement = () => {
  const { getClassManagementUrl } = useUrls();
  const queryKey = ["getClassManagement"]; // Unique key for the query

  const { data, isLoading, isError, error } = useQuery(queryKey, async () => {
    const response = await axiosInstance.get(getClassManagementUrl);
    const responseData = response.data;
    // console.log(responseData);
    return responseData;
  });
  const tableData = data || [];
  return {
    tableData,
    isLoading,
    isError,
    error,
  };
};

export const usePostClassManagement = () => {
  const queryClient = useQueryClient();
  const { postClassManagementUrl } = useUrls();
  // const dispatch = useAppDispatch();
  const { mutate, isLoading, isSuccess, isError, error } = useMutation(
    (payload: PostClassManagementProps) => {
      return axiosInstance.post(postClassManagementUrl, payload);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["getClassManagement"]);
      },
    }
  );

  const formik = useFormik({
    initialValues: {
      class: "",
      level: "",
      paymentSchedule: "",
      paymentSession: "",
      classSize: "",
      fee: "",
    } as PostClassManagementProps,
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: ClassManagementSchema,
    // disabling it because we are not using it an it won't be passed through the api
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSubmit: async ({ ...values }) => {
      try {
        await formik.validateForm();
        mutate(
          { ...values },
          {
            onSuccess: (response: any) => {
              toast.success("Class created succesfully");
              const { _id } = response.data;
              // dispatch(setUserClassId(String(_id)));
              console.log(_id);
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
  return { formik, isLoading, isSuccess, isError, error: errorString };
};

export const useEditClassManagement = () => {
  const router = useRouter();
  const { postClassManagementUrl } = useUrls();
  const { userClassId } = useSelector(userClassIdSelector);
  console.log(userClassId);
  const id = userClassId;
  const { mutate, isLoading, isSuccess, isError, error } = useMutation(
    (payload: PostClassManagementProps) => {
      return axiosInstance.patch(`${postClassManagementUrl}/${id}`, payload);
    }
  );

  const formik = useFormik({
    initialValues: {
      class: "",
      level: "",
      paymentSchedule: "",
      paymentSession: "",
      classSize: "",
      fee: "",
    } as PostClassManagementProps,
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: ClassManagementSchema,
    // disabling it because we are not using it an it won't be passed through the api
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSubmit: async ({ ...values }) => {
      try {
        await formik.validateForm();
        mutate(
          { ...values, id: userClassId },
          {
            onSuccess: () => {
              // toast.success("Class edited succesfully");
              router.push(PAGES.FEE_ADVANCE);
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
  const currentValues = {
    class: formik.values.class,
    level: formik.values.level,
    paymentSchedule: formik.values.paymentSchedule,
    paymentSession: formik.values.paymentSession,
    classSize: formik.values.classSize,
    fee: formik.values.fee,
  };

  const typedError = error as IErrorResponseType;
  const errorString = Array.isArray(typedError?.response?.data?.message)
    ? typedError?.response?.data?.message[0]
    : typedError?.response?.data?.message || "";
  return {
    formik,
    currentValues,
    isLoading,
    isSuccess,
    isError,
    error: errorString,
  };
};
