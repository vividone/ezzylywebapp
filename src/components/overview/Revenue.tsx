import React, { useState } from "react";
import Flex from "../common/Flex";
import Text from "../common/Text";
import EyeSlashIcon from "@/assets/overview/EyeSlash";
import EyeIcon from "@/assets/overview/EyeIcon";

const Revenue = () => {
  const [hide, setHide] = useState(true);
  const toggleHide = () => {
    setHide(!hide);
  };
  return (
    <Flex className="flex-col px-5 rounded-xl justify-between py-6 bg-vibing_blue_9 min-w-[237px] lg:min-w-[300px] lg:max-w-[300px] min-h-[149px] max-h-[149px]">
      <Flex className="flex-col">
        <Text className="text-vibing_blue_1 font-medium">Revenue</Text>

        <Text className=" text-[33px] leading-[49.5px] font-satoshi text-vibing_blue_1 font-black">
          {hide ? "********" : "₦ 0"}
        </Text>
      </Flex>
      {/* show hide balance */}
      {hide ? (
        <Flex className="items-center" onClick={toggleHide}>
          <EyeIcon className="cursor-pointer" />
          <Text className="text-mixed_m7 ml-2 text-sm cursor-pointer">
            Show Balance
          </Text>
        </Flex>
      ) : (
        <Flex className="items-center" onClick={toggleHide}>
          <EyeSlashIcon className="cursor-pointer" />
          <Text className="text-mixed_m7 ml-2 text-sm cursor-pointer">
            Hide Balance
          </Text>
        </Flex>
      )}
    </Flex>
  );
};

export default Revenue;
