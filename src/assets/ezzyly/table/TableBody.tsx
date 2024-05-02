import React, { FC, HTMLAttributes } from "react";

type ITableBody = HTMLAttributes<HTMLTableSectionElement>;
const TableBody: FC<Partial<ITableBody>> = ({ children }) => {
  return <tbody>{children}</tbody>;
};

export default TableBody;
