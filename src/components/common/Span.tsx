import { TextProperty } from "@/interface/common";
import React from "react";

const Span = (props: TextProperty) => {
  return <span className={`${props.className}`}>{props.children}</span>;
};

export default Span;
