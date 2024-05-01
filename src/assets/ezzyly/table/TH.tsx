import React, { FC, HTMLAttributes } from 'react';

interface ITH extends HTMLAttributes<HTMLTableColElement> {}
const TH: FC<ITH> = props => {
  return <th className="bg-transparent">{props.children}</th>;
};

export default TH;
