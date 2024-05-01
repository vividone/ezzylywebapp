import SetupPassword from "@/assets/auth/SetupPassword";
import LandaPayBlack from "@/assets/common/LandaPayBlack";
import ResetPasswordComponent from "@/components/auth/ResetPasswordComponent";
import Flex from "@/components/common/Flex";
import Text from "@/components/common/Text";
import AuthOthersLayout from "@/layouts/AuthOthersLayout";
import { PAGES } from "@/utils/pages";
import Image from "next/image";
import React from "react";

const ResetPassword = () => {
  return (
    <AuthOthersLayout className="justify-center py-8 px-4">
      <Flex className="w-full flex-col lg:flex-row lg:mt-0 lg:justify-center bg-container">
        <Flex className="w-full items-center lg:items-start lg:mt-8 lg:justify-between flex-col">
          <Flex className="flex-col">
            <a href={PAGES.LOGIN}>
              <LandaPayBlack />
            </a>
            <Image
              src="/img/accountmockup.png"
              alt="landapay logo"
              width={506}
              height={498}
              className="hidden ml-20 lg:block mt-20"
            />
          </Flex>

          <Text className="text-center hidden lg:inline  lg:mt-10 max-w-[258px] lg:max-w-[max-content] mx-auto lg:mx-0 font-medium  text-mixed_m3 text-[11px] md:text-sm">
            © 2023. LandaPay is a product of Landa Finance Ltd. All rights
            reserved.
          </Text>
        </Flex>
        <Flex className="bg-neutral_white_l1 w-full sm:max-w-[430px] lg:max-w-[500px] sm:mx-auto lg:mx-0 mt-6 px-5 md:px-10 py-12 pb-10 lg:pt-10 lg:px-14 lg:pb-0 flex-col rounded-3xl">
          {/* dummy image space  */}
          <Flex className="bg-mint_m8 p-6 mx-auto rounded-2xl  max-w-[max-content]">
            <SetupPassword />
          </Flex>
          <ResetPasswordComponent />
        </Flex>
      </Flex>
    </AuthOthersLayout>
  );
};

export default ResetPassword;
