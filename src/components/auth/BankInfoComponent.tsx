import React, { useState } from "react";
import Stepper from "../stepper/Stepper";
import { Flex, Text } from "../common";
import { Buttons, Input } from "@withlanda/humphrey";
import {
  RegistrationNumber,
  ActiveRegistrationNumber,
  Bank,
  ActiveBank,
  PasswordCheck,
  ActivePasswordCheck,
} from "@/assets/inputs";
interface Bankinfoprops {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  completed: boolean;
}

function BankInfoComponent({ step, setStep }: Bankinfoprops) {
  const [completed, setCompleted] = useState(false);
  const handleNext = () => {
    setStep(step + 1);
    setCompleted(true);
  };
  return (
    <Flex
      className={
        "w-full md:w-[494px] mt-4 lg:mt-4 flex-col rounded-2xl md:text-center lg:py-10 px-4 md:px-8 bg-white mx-8"
      }
    >
      <Flex className={"justify-center mb-1 text-start items-start lg:gap-3"}>
        <Stepper completed={completed} step={step} />
      </Flex>
      <Text className="text-neutral-black justify-start text-start items-start font-bold leading-[31.05px] text-[22px] md:text-[23px]">
        Bank Info
      </Text>
      {/* form fields */}
      <form autoComplete="false" className="flex flex-col mt-2 space-y-4">
        {/* to falsify auto complete */}
        <Input
          variant="primary"
          autoComplete="false"
          containerClassName="hidden"
        />
        <Input
          lefticon={Bank}
          variant="primary"
          activelefticon={ActiveBank}
          aria-autocomplete="none"
          autoComplete="new-password"
          placeholder="Banker"
        />
        <Input
          lefticon={RegistrationNumber}
          variant="primary"
          activelefticon={ActiveRegistrationNumber}
          aria-autocomplete="none"
          autoComplete="new-password"
          placeholder="Account Number"
        />
        <Input
          lefticon={RegistrationNumber}
          variant="primary"
          activelefticon={ActiveRegistrationNumber}
          aria-autocomplete="none"
          autoComplete="new-password"
          placeholder="Account Name"
        />
        <Input
          lefticon={PasswordCheck}
          variant="primary"
          activelefticon={ActivePasswordCheck}
          aria-autocomplete="none"
          autoComplete="new-password"
          placeholder="Tax Identification Number"
        />
        <Flex className="lg:pb-0 pb-5">
          <Buttons
            variant="primary"
            className="text-[16px] font-bold lg:px-[24px] px-[20px] mt-3 py-[16px]"
            size="full"
            onClick={handleNext}
          >
            Continue
          </Buttons>
        </Flex>
      </form>
    </Flex>
  );
}

export default BankInfoComponent;
