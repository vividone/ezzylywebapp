import React, { FC, HTMLAttributes } from 'react';

interface ITableBody extends HTMLAttributes<HTMLTableSectionElement> {}
const TableBody: FC<Partial<ITableBody>> = ({ children }) => {
  return <tbody>{children}</tbody>;
};

export default TableBody;
