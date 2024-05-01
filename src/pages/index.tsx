import React from "react";
import LoginComponent from "@/components/auth/LoginComponent";
import Flex from "@/components/common/Flex";
import AuthLayout from "@/layouts/AuthLayout";
import EzzylyLogo from "@/assets/common/EzzlylyLogo";

function Home() {
  return (
    <AuthLayout className="items-center py-7 lg:py-0">
      <Flex className="flex-col h-screen lg:h-auto mt-12 lg:mt-8 lg:justify-start items-center">
        <EzzylyLogo />
        {/* background white form field */}
        <LoginComponent />
      </Flex>
    </AuthLayout>
  );
}

export default Home;
