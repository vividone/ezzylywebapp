/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/no-children-prop */
import React, { FormEvent, useEffect } from "react";
import Flex from "../common/Flex";
import Text from "../common/Text";
import SmsIcon from "@/assets/inputs/SmsIcon";
import ActiveSmsIcon from "@/assets/inputs/ActiveSmsIcon";
import { useForgotPassword } from "@/helpers/api/useAuth";
import { Input } from "@/assets/ezzyly/inputs/Input";
import { Toast } from "@/assets/ezzyly/specials/Toast";
import { Buttons } from "@/assets/ezzyly/Buttons";

const ForgotPasswordComponent = () => {
  const {
    formik,
    isLoading,
    forgotPasswordIsError: isError,
    error,
  } = useForgotPassword();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    formik.handleSubmit();
  };
  useEffect(() => {
    formik.validateForm();
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="false"
      className="flex flex-col mt-10"
    >
      <Flex className="flex-col space-y-5">
        <Text className="text-[23px] font-bold leading-[31.05px] text-neutral_white_l11">
          Account recovery
        </Text>
        <Text className="text-sm text-mixed_m5">
          Kindly enter the email address associated with your Ezzyly account to
          continue
        </Text>
      </Flex>

      {/* otp actual action */}
      <Flex className="flex-col mt-6 lg:mt-4  space-y-4">
        <Input
          lefticon={SmsIcon}
          activelefticon={ActiveSmsIcon}
          placeholder="Email address"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {/* toast for incorrect OTp */}
        <Flex>{isError && <Toast message={error} status="error" />}</Flex>
      </Flex>
      <Flex className="mt-8">
        <Buttons
          disabled={!formik.isValid || isLoading}
          isLoading={isLoading}
          variant="primary"
          className="text-[13px] lg:text-[15px]"
          type="submit"
          size="full"
        >
          Recover my account
        </Buttons>
      </Flex>
    </form>
  );
};

export default ForgotPasswordComponent;
