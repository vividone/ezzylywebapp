import React from "react";
import Flex from "@/components/common/Flex";
import AuthLayout from "@/layouts/AuthLayout";
import RegisterComponent from "@/components/auth/RegisterComponent";
import EzzylyLogo from "@/assets/common/EzzlylyLogo";

function Register() {
  return (
    <AuthLayout className="items-center lg:py-3">
      <Flex className="flex-col w-full py-5 lg:py-0 px-2 md:mt-6 h-screen lg:h-auto lg:mt-0 lg:justify-start items-center">
        <Flex className="">
          <EzzylyLogo />
        </Flex>
        {/* background white form field */}
        <RegisterComponent />
      </Flex>
    </AuthLayout>
  );
}

export default Register;
