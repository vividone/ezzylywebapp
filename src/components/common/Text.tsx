import { TextProperty } from "@/interface/common";
import React from "react";

const Text = (props: TextProperty) => {
  return <p className={`${props.className}`}>{props.children}</p>;
};

export default Text;
