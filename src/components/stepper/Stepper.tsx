import React from "react";
import { Flex, Span } from "../common";
import { ArrowRight, CircleCheckbox } from "@/assets/inputs";
interface Stepperprops {
  step: number;
  completed: boolean;
}

function Stepper({ step, completed }: Stepperprops) {
  return (
    <Flex className="flex-row items-center lg:text-center mb-2 mt-4 lg:mt-2 gap-1 lg:gap-5 py-2 lg:pl-2 justify-center">
      {/* <Flex
        className={
          "flex-row gap-[5px] lg:gap-2 text-center justify-start items-center"
        }
      >
        <CircleCheckbox />
        <Span className="text-mixed_m6 gap-1 lg:gap-1 lg:text-lg flex items-start text-sm lg:text-md font-medium">
          <span>Basic</span> <span>Info</span>
        </Span>
        <ArrowRight />
      </Flex> */}
      <Flex
        className={
          "flex-row gap-2 lg:gap-2 text-center justify-start items-center"
        }
      >
        {completed ? (
          <CircleCheckbox />
        ) : (
          <Flex
            className={` ${
              step === 0
                ? "text-vibing_blue_3  bg-vibing_blue_8"
                : "text-mixed_m3 bg-mint_m4"
            } rounded-full p-3 w-2 h-2 lg:w-5 lg:h-5 text-sm items-center justify-center text-center`}
          >
            2
          </Flex>
        )}
        <Span
          className={`${
            step === 0
              ? "text-vibing_blue_3 "
              : step === 0 && completed
              ? "text-mixed_m6"
              : "text-mixed_m6"
          } font-medium gap-1 flex lg:gap-2 lg:flex-row items-start leading-4 lg:text-lg text-sm`}
        >
          <span>Bank</span> <span>Details</span>
        </Span>
        <ArrowRight />
      </Flex>
      <Flex
        className={
          "flex-row gap-2 lg:gap-2 text-center justify-start items-center"
        }
      >
        <Flex
          className={`${
            step === 1
              ? "text-vibing_blue_3  bg-vibing_blue_8"
              : "bg-mint_m4 text-mixed_m3"
          } rounded-full p-3 w-2 h-2 lg:w-5 lg:h-5 text-md items-center justify-center text-center `}
        >
          3
        </Flex>
        <Span
          className={`${
            step === 1 ? "text-vibing_blue_3 " : "text-mixed_m3"
          } font-medium flex leading-4 lg:gap-2 lg:text-lg lg:flex-row items-start text-sm`}
        >
          <span>Admin</span> <span>Setup</span>
        </Span>
        <ArrowRight />
      </Flex>
    </Flex>
  );
}

export default Stepper;
