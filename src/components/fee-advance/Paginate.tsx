import React from "react";
import { Flex, Text } from "../common";
import { PaginateLeft, PaginateRight } from "@/assets/button";
function Paginate() {
  return (
    <Flex className="items-center gap-6">
      <Text className="text-md text-brown_m2">10 of 332</Text>
      <Flex className="gap-2 justify-center text-center items-center">
        <Flex className="bg-mint_m9 w-7 h-7 justify-center text-center rounded-lg p-2 items-center">
          <PaginateLeft />
        </Flex>
        <Flex className="bg-mint_m9 w-7 h-7 justify-center text-center rounded-lg p-2 items-center">
          <PaginateRight />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Paginate;
