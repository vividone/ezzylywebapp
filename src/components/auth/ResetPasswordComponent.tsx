/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/no-children-prop */
import React, { FormEvent, useEffect } from "react";
import Flex from "../common/Flex";
import Text from "../common/Text";
import { Buttons } from "@/assets/ezzyly/Buttons";
import { Toast } from "@/assets/ezzyly/specials/Toast";
import { PasswordInput } from "@/assets/ezzyly/inputs/Input";
import LockIcon from "@/assets/inputs/LockIcon";
import ActiveLockIcon from "@/assets/inputs/ActiveLockIcon";
import { useResetPassword } from "@/helpers/api/useAuth";

const ResetPasswordComponent = () => {
  const { formik, isLoading, error, resetPasswordIsError } = useResetPassword();
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
      className=" flex-col mt-8"
    >
      <Flex className="flex-col gap-2">
        <Text className="text-[23px] font-bold leading-[31.05px] text-neutral_white_l11">
          Set new password
        </Text>
        <Text className="text-sm text-mixed_m5 max-w-[282px]">
          Create a new password to secure your Ezzyly account
        </Text>
      </Flex>

      {/* otp actual action */}
      <Flex className="flex-col mt-10 lg:mt-8 space-y-4">
        <Flex className="flex flex-col space-y-4">
          <PasswordInput
            name="otp"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            lefticon={LockIcon}
            activelefticon={ActiveLockIcon}
            placeholder="Enter OTP"
            className="text-mixed_m5"
            containerClassName=" min-h-[48px]"
          />
          <PasswordInput
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            lefticon={LockIcon}
            activelefticon={ActiveLockIcon}
            placeholder="New password"
            autoComplete="false"
            className="text-mixed_m5"
            containerClassName=" min-h-[48px]"
          />

          <PasswordInput
            name="confirmPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            lefticon={LockIcon}
            activelefticon={ActiveLockIcon}
            placeholder="Confirm password"
            autoComplete="false"
            className="text-mixed_m5"
            containerClassName=" min-h-[48px]"
          />
        </Flex>
        {/* toast for incorrect OTp */}
        <Flex>
          {resetPasswordIsError && <Toast message={error} status="error" />}
        </Flex>
      </Flex>
      <Flex className="mt-6">
        <Buttons
          isLoading={isLoading}
          disabled={!formik.isValid || isLoading}
          variant="primary"
          size="full"
          type="submit"
        >
          Save changes
        </Buttons>
      </Flex>
    </form>
  );
};

export default ResetPasswordComponent;
