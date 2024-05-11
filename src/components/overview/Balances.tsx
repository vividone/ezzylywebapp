import React from "react";
import Flex from "../common/Flex";
import Text from "../common/Text";
import Revenue from "./Revenue";

const Balances = () => {
  return (
    <Flex className="flex-col mt-8">
      <Text className="text-[19px] text-mixed_m5 font-bold">Revenue</Text>
      <Flex className="mt-8 max-w-[100%] flex-col lg:flex-row gap-6">
        <Revenue />
      </Flex>
    </Flex>
  );
};

export default Balances;
