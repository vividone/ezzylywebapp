import AccountRecovery from "@/assets/auth/AccountRecovery";
import EzzylyLogo from "@/assets/common/EzzlylyLogo";
import ForgotPasswordComponent from "@/components/auth/ForgotPasswordComponent";
import { Text, Flex } from "@/components/common";
import AuthLayout from "@/layouts/AuthLayout";
import AuthOthersLayout from "@/layouts/AuthOthersLayout";
import { PAGES } from "@/utils/pages";
import Image from "next/image";
import React from "react";

const ForgotPassword = () => {
  return (
    // <AuthLayout className="justify-center items-start text-start py-8 lg:py-0 px-4">

    //   <Flex className="w-full flex-col lg:flex-row lg:mt-8 lg:justify-center lg:items-start bg-container">

    //     <Flex className=" w-full bg-neutral_white_l1 sm:max-w-[430px] lg:max-w-[500px] sm:mx-auto lg:mx-0 mt-8 px-5 md:px-10 py-10 lg:py-5 pb-10 lg:px-[40px] lg:pb-10 flex-col rounded-3xl">
    //       <a href={PAGES.LOGIN}>
    //         <EzzylyLogo />
    //       </a>
    //      <Flex className=" bg-mint_m8 p-10 mx-auto rounded-2xl  max-w-[max-content]">
    //         <AccountRecovery />
    //       </Flex>
    //       <ForgotPasswordComponent />
    //     </Flex>
    //   </Flex>
    // </AuthLayout>

    <AuthLayout className="items-center py-7 lg:py-0">
      <Flex className="flex-col h-screen lg:h-auto mt-12 lg:mt-8 lg:justify-start items-center">
        <EzzylyLogo />
        {/* background white form field */}
        <ForgotPasswordComponent />
      </Flex>
    </AuthLayout>
  );
};

export default ForgotPassword;
