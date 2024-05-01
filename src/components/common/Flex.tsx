import { TextProperty } from "@/interface/common";
import React from "react";

const Flex = ({ className = "", children, ...props }: TextProperty) => {
  return (
    <div className={`flex ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Flex;
