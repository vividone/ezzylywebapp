import React, { useState, useEffect } from "react";
import { Text, Flex } from "../common";
// import  from "@withlanda/humphrey";
import { userDetailsSelector } from "@/redux/feature/authentication";
import { useSelector } from "react-redux";
import { useResendOTP, useVerifyLogin } from "@/helpers/api/useAuth";
import { OTPInput } from "@/assets/ezzyly/inputs/OtpInput";
import { Toast } from "@/assets/ezzyly/specials/Toast";
import { Countdown } from "@/assets/ezzyly/specials/Countdown";
import { Buttons } from "@/assets/ezzyly/Buttons";

const VerifyLoginComponent = () => {
  const { userDetails } = useSelector(userDetailsSelector);
  const [otpError, setOtpError] = useState(false);
  const [verifyOtp, setVerifyOtp] = useState("");
  const [dateTillResend, setDateTillResend] = useState(Date.now() + 59000);
  const { formik, isLoading, error } = useVerifyLogin(verifyOtp);
  const { formik: resendFormik, resendOTPIsSuccess } = useResendOTP();
  useEffect(() => {
    setOtpError(false);
    if (verifyOtp.length > 5) {
      formik.handleSubmit();
    }
  }, [verifyOtp]);
  useEffect(() => {
    if (resendOTPIsSuccess) {
      setDateTillResend(Date.now() + 59000);
    }
  }, [resendOTPIsSuccess]);
  // to handle otp error
  useEffect(() => {
    if (error) {
      setOtpError(true);
    }
  }, [error]);

  const handleOTpResend = () => {
    resendFormik.handleSubmit();
  };
  return (
    <Flex className=" flex-col">
      <Flex className="flex-col space-y-5">
        <Text className="text-[23px] mt-4 font-bold leading-[31.05px] text-neutral_white_l11">
          Verify your phone number
        </Text>
        <Text className="text-sm text-mixed_m5">
          Please enter the OTP sent to:{" "}
          <span className="font-medium text-vibing_blue_x">
            {userDetails.userEmail || ""}
          </span>
        </Text>
      </Flex>

      {/* otp actual action */}
      <Flex className="flex-col mt-10 lg:mt-6 space-y-4">
        <OTPInput
          className="!w-8 !h-8 lg:!w-12 lg:!h-12"
          setValue={setVerifyOtp}
          value={verifyOtp}
          error={otpError}
        />
        {/* toast for incorrect OTp */}
        <Flex className="flex-col duration-600 ease-in-out transform-opacity">
          {otpError && error && <Toast message={error} status="error" />}
        </Flex>
        <Flex className="justify-between items-center">
          <Text className="text-mixed_m5 text-sm lg:text-md">
            Resend code in
          </Text>
          <Countdown
            className="w-10"
            date={dateTillResend}
            onClick={handleOTpResend}
          >
            <Text className="text-vibing_blue_x cursor-pointer font-medium">
              {" "}
              Resend OTP
            </Text>
          </Countdown>
        </Flex>
      </Flex>
      <Flex className="mt-8">
        <Buttons
          variant="primary"
          disabled={isLoading || !formik.isValid}
          isLoading={isLoading}
          size="full"
        >
          Validate session
        </Buttons>
      </Flex>
    </Flex>
  );
};

export default VerifyLoginComponent;
