import React, { FormEvent, useEffect } from "react";
import { Flex, Text } from "../common";
import { Buttons } from "@/assets/ezzyly/Buttons";
import {
  LockIcon,
  SmsIcon,
  ActiveSmsIcon,
  ActiveLockIcon,
} from "@/assets/inputs";
import { PAGES } from "../../utils/pages";
import { useLogin } from "@/helpers/api/useAuth";
import { toast } from "react-hot-toast";
import { ToastComponent } from "@/assets/ezzyly/specials/Toast";
import { Input, PasswordInput } from "@/assets/ezzyly/inputs/Input";

function LoginComponent() {
  const { formik, isLoading, error, isError, isSuccess } = useLogin();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    formik.handleSubmit();
  };

  useEffect(() => {
    if (isError) {
      toast.custom((t) => (
        <ToastComponent
          t={t}
          status="error"
          title="Login Failed"
          description={error}
        />
      ));
    }
  }, [isSuccess, isError]);
  return (
    <Flex className=" w-full lg:w-[494px] mt-4 flex-col rounded-2xl md:text-center py-10  lg:px-4 bg-white">
      <Flex className="flex-col p-5 lg:gap-3">
        <Text className="text-neutral-black font-bold leading-[31.05px] text-[22px] md:text-[23px]">
          Ezzyly Service Provider
        </Text>
        <Text className="text-mixed_m5 text-[15px] md:text-base leading-[24px]">
          Enter your username and password to continue
        </Text>
      </Flex>

      {/* form fields */}
      <form
        autoComplete="false"
        onSubmit={handleSubmit}
        className="flex px-5 flex-col lg:mt-2 space-y-4"
      >
        {/* to falsify auto complete */}
        <Input
          variant="primary"
          autoComplete="false"
          containerClassName="hidden"
        />
        <Input
          lefticon={SmsIcon}
          variant="primary"
          activelefticon={ActiveSmsIcon}
          name="username"
          value={formik.values.username}
          disabled={isLoading}
          error={
            formik.errors.username && formik.touched.username ? true : false
          }
          aria-autocomplete="none"
          autoComplete="none"
          placeholder="Username"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <PasswordInput
          lefticon={LockIcon}
          activelefticon={ActiveLockIcon}
          name="password"
          placeholder="Password"
          autoComplete="false"
          className="text-mixed_m5"
          value={formik.values.password}
          error={
            formik.errors.password && formik.touched.password ? true : false
          }
          disabled={isLoading}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {/* remember password */}
        <Flex className="justify-between text-sm  md:text-base">
          <Text className="text-[#5C6870] text-sm">Forgot password?</Text>
          <a
            href={PAGES.FORGOT_PASSWORD}
            className="text-vibing_blue_x cursor-pointer font-medium text-sm"
          >
            Reset it now
          </a>
        </Flex>
        <Flex>
          <Buttons
            variant="primary"
            disabled={isLoading}
            isLoading={isLoading}
            type="submit"
            className="text-[18px] font-bold px-[20px]  mt-4 py-[16px]"
            size="full"
          >
            Login
          </Buttons>
        </Flex>
      </form>

      {/* create new account */}
      <Flex className="w-full justify-center text-sm  md:text-base mt-6">
        <Text className="text-center text-mixed_m5 ">
          Want to signup as a Service Provider?
          <a href={PAGES.REGISTER} className="cursor-pointer">
            <span className="text-vibing_blue_x ml-2 font-medium">
              Get Started
            </span>
          </a>
        </Text>
      </Flex>
    </Flex>
  );
}

export default LoginComponent;
