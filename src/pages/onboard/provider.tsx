import React from "react";
import ServiceProviderComponent from "@/components/auth/ServiceProviderComponent";
import Flex from "@/components/common/Flex";
import AuthLayout from "@/layouts/AuthLayout";
import EzzylyLogo from "@/assets/common/EzzlylyLogo";
function ServiceProvider() {
  return (
    <AuthLayout className="items-center py-7 lg:py-0">
      <Flex className="flex-col h-full lg:h-auto mt-12 lg:mt-8 lg:justify-start items-center">
        <EzzylyLogo />
        {/* background white form field */}
        <ServiceProviderComponent />
      </Flex>
    </AuthLayout>
  );
}

export default ServiceProvider;
