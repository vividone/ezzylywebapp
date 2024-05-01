import React, { FC, HTMLAttributes } from "react";
import Flex from "../common/Flex";
import Text from "../common/Text";
import ArrowRightIcon from "@/assets/overview/ArrowRightIcon";

interface IQuickActions extends HTMLAttributes<HTMLDivElement> {
  text: string;
  linkText: string;
  path: string;
}
const QuickActionsSingle: FC<IQuickActions> = (props) => {
  // intentional so that the ...rest doesn't conflict
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { text, linkText, path, className, ...rest } = props;
  return (
    <Flex
      className={`flex-col justify-between min-h-[88px] max-h-[88px] px-5 py-6
      md:min-h-[120px] md:max-h-[120px]
      md:min-w-[250px] md:max-w-[250px]
      ${className}`}
      {...rest}
    >
      <Text className=" md:max-w-[141px] font-bold">{props.text || ""}</Text>

      <a
        className="flex items-center cursor-pointer mt-3 gap-x-[9px]"
        href={props.path}
      >
        <Text className="text-mixed_m6 text-sm"> {props.linkText || ""}</Text>
        <ArrowRightIcon />
      </a>
    </Flex>
  );
};

export default QuickActionsSingle;
