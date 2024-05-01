import React from "react";
import { Flex, Span, Text } from "../common";
function PaginateBottom() {
  return (
    <Flex className="items-center mt-10 flex-row gap-6 justify-center text-center lg:text-start">
      <Text className="text-md rounded-[8px] py-1 px-3 text-Dark_blue_L1 bg-mint_m9">
        First
      </Text>
      <Flex className="text-md gap-1">
        <Span className="py-1 px-3 rounded-[24px] bg-vibing_blue_9 text-vibing_blue_1">
          1
        </Span>
        <Span className="py-1 px-3 text-brown_m3">2</Span>
        <Span className="py-1 px-3 text-brown_m3">3</Span>
        <Span className="py-1 px-3 text-brown_m3">4</Span>
      </Flex>
      <Text className="text-md py-1 rounded-[8px] px-3 text-Dark_blue_L1 bg-mint_m9">
        Last
      </Text>
    </Flex>
  );
}

export default PaginateBottom;
