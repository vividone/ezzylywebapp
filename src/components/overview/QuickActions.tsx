import React from "react";
import Flex from "../common/Flex";
import Text from "../common/Text";
import QuickActionsSingle from "./QuickActionsSingle";

const QuickActions = () => {
  return (
    <Flex className="flex-col mt-8">
      <Text className="text-mixed_m6 font-bold text-[19px]">Quick Actions</Text>
      <Flex className="flex-col md:flex-row mt-5 md:gap-x-0 md:justify-between lg:flex-wrap lg:gap-6 gap-y-3">
        <QuickActionsSingle
          text="Your profile is incomplete"
          linkText="Go to profile"
          path="/dashboard/profile"
          className="text-[#FF6565] bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/incomplete.png)",
          }}
        />
        <QuickActionsSingle
          text="Setup your services"
          linkText="Update now"
          path="/dashboard/service"
          className="text-[#186894] bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/reviewed.png)",
          }}
        />
        <QuickActionsSingle
          text="Facing a difficulty?"
          linkText="Get help"
          path={"NEXT_SUPPORT_URL"}
          className="text-[#186894] bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/difficulty.png)",
          }}
        />
      </Flex>
    </Flex>
  );
};

export default QuickActions;
