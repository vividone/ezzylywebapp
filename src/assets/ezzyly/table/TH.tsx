import React, { FC, HTMLAttributes } from "react";

type ITH = HTMLAttributes<HTMLTableColElement>;
const TH: FC<ITH> = (props) => {
  return <th className="bg-transparent">{props.children}</th>;
};

export default TH;
