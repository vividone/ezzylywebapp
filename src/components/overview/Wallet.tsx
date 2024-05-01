import React, { FC } from "react";
import Flex from "../common/Flex";
import SmartWalletIcon from "@/assets/overview/SmartWalletIcon";
import Text from "../common/Text";
import FlashIcon from "./FlashIcon";
import StudyWalletIcon from "@/assets/overview/StudyWalletIcon";

interface IWallet {
  type: "smart" | "study";
}
const Wallet: FC<IWallet> = ({ type }) => {
  return (
    <Flex className="flex-col  bg-wallet bg-cover  rounded-xl justify-between pt-6 bg-vibing_blue_9 min-w-[237px] lg:min-w-[300px] lg:max-w-[300px]  min-h-[149px] max-h-[149px]">
      <Flex className="flex-col space-y-4 px-5 w-full justify-center items-center">
        {type === "study" ? <SmartWalletIcon /> : <StudyWalletIcon />}
        <Text
          className={`${
            type === "study" ? "text-[#4405CF]" : "text-[#0ED398]"
          } font-medium text-[19px]`}
        >
          {type === "study" ? "Study Wallet" : "Smart Wallet"}
        </Text>
      </Flex>

      <Flex className="w-full min-h-[32px] space-x-3 max-h-[32px] justify-center items-center bg-neutral_white_l6">
        <FlashIcon />
        <Text className="text-neutral_white_l11 text-sm">Launching soon</Text>
        <FlashIcon />
      </Flex>
    </Flex>
  );
};

export default Wallet;
