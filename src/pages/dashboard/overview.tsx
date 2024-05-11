import SunIllustration from "@/assets/overview/SunIllustration";
import Flex from "@/components/common/Flex";
import Text from "@/components/common/Text";
import Balances from "@/components/overview/Balances";
import QuickActions from "@/components/overview/QuickActions";
import InAppLayout from "@/layouts/InAppLayout";
import React from "react";
import { getPeriod } from "@/functions/getPeriod";
// import { randomizedQuotes } from "@/functions/randomize";
import useSessionStorage from "@/helpers/api/useSession";
import { IAuthRegister } from "@/interface/auth";
import { TOKEN } from "@/utils/token";

const Overview = () => {
  const [userToken] = useSessionStorage<IAuthRegister>(TOKEN.USER);

  return (
    <InAppLayout className="!px-0 lg:!px-0">
      <Flex className="justify-between lg:justify-start lg:gap-6 items-center">
        <Flex className="flex-col">
          <Text className="text-mixed_m5 text-[19px] lg:text-[23px] font-bold">
            Good {getPeriod()}, {userToken?.firstName}
          </Text>
          {/* <Text className="text-mixed_m5 text-sm lg:text-base ">
            {randomizedQuotes[0]}
          </Text> */}
        </Flex>
        {/* sun */}
        <SunIllustration />
      </Flex>

      {/* balances */}
      <Balances />
      {/* quick actions */}
      <QuickActions />
    </InAppLayout>
  );
};
Overview.requireAuth = true;
export default Overview;
