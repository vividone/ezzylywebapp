import Flex from "@/components/common/Flex";
import Text from "@/components/common/Text";
import { Layouts } from "@/interface/common";
import React, { FC } from "react";

// This are other routes that do not include login
// const AuthOthersLayout: FC<Partial<Layouts>> = (props) => {
//   return (
//     <Flex
//       className={`flex-col bg-auth-signup-mobile gap-10 lg:bg-auth-pattern bg-cover bg-top-center lg:bg-center justify-between px-2
//       bg-vibing_blue_1 min-h-screen max-h-screen overflow-y-auto w-full
//     ${props.className}
//     `}
//     >
//       {props.children}
//       <Text className="hidden lg:inline font-medium  text-white text-sm">
//           © 2023. Ezzyly is a product of Landa Finance Ltd. All rights
//           reserved.
//         </Text>
//     </Flex>
//   );
// };

// export default AuthOthersLayout;

const AuthOthersLayout: FC<Partial<Layouts>> = (props) => {
  return (
    <Flex
      className={`flex-col font-satoshi bg-[#F9FBFC] justify-between w-full min-h-screen max-h-screen overflow-y-auto
    ${props.className}
    `}
    >
      {props.children}
      <Flex className="bg-container w-full justify-start">
        <Text className="text-center lg:hidden mt-8 lg:mt-0 max-w-[258px] lg:max-w-[max-content] mx-auto lg:mx-0 font-medium  text-mixed_m3 text-[11px] md:text-sm">
          Ezzyly is a product of Seer Group Inc. | © 2024 Seer Group Inc. All
          Rights Reserved.
        </Text>
      </Flex>
    </Flex>
  );
};

export default AuthOthersLayout;
