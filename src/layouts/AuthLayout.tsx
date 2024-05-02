import { Flex, Text } from "@/components/common";
import { Layouts } from "@/interface/common";
import React, { FC } from "react";

const AuthLayout: FC<Layouts> = (props) => {
  return (
    <Flex
      className={`flex-col  gap-10 lg:gap-6 px-2 
      bg-mint_m2 min-h-screen max-h-screen overflow-y-auto w-full ${props.className}`}
    >
      {props.children}
      <Text className="hidden lg:inline font-medium text-white text-sm">
        Ezzyly is a product of Seer Group Inc. | © 2024 Seer Group Inc. All
        Rights Reserved.
      </Text>
    </Flex>
  );
};

export default AuthLayout;
