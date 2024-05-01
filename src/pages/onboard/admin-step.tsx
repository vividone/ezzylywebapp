import React, { useState } from "react";
import BankInfoComponent from "@/components/auth/BankInfoComponent";
import Flex from "@/components/common/Flex";
import AuthLayout from "@/layouts/AuthLayout";
import EzzylyLogo from "@/assets/common/EzzlylyLogo";

function AdminSetup() {
  const [step, setStep] = useState(0);
  return (
    <AuthLayout className="items-center lg:py-3 bg-auth-pattern-signup">
      <Flex className="flex-col w-full py-5 lg:py-0 px-2 md:mt-6 h-screen lg:h-auto lg:mt-0 lg:justify-start items-center">
        <Flex className="">
          <EzzylyLogo />
        </Flex>
        {/* background white form field */}
        <BankInfoComponent step={step} setStep={setStep} completed={false} />
      </Flex>
    </AuthLayout>
  );
}

export default AdminSetup;
