import React, { FC, HTMLAttributes } from 'react';

interface ITableWrapper extends HTMLAttributes<HTMLDivElement> {}
export const TableWrapper: FC<Partial<ITableWrapper>> = ({
  className,
  ...props
}) => {
  return (
    <div className="overflow-x-auto max-w-[100%]  w-full ">
      <table className={`w-full ${className} `}>{props.children}</table>
    </div>
  );
};

interface ITableBody extends HTMLAttributes<HTMLTableSectionElement> {}

export const TableBody: FC<Partial<ITableBody>> = ({ children }) => {
  return <tbody>{children}</tbody>;
};

interface ITableData extends HTMLAttributes<HTMLTableCellElement> {}
export const TableData: FC<Partial<ITableData>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <td
      className={`p-4 text-left whitespace-nowrap first-of-type:rounded-l-lg last-of-type:rounded-r-lg  first-of-type:bg-white lg:first-of-type:bg-transparent
    first-of-type:absolute lg:first-of-type:static ${className}
    `}
      {...props}
    >
      {children}
    </td>
  );
};

interface ITableHeadSection extends HTMLAttributes<HTMLTableElement> {}
export const TableHeadSection: FC<Partial<ITableHeadSection>> = ({
  className,
  ...props
}) => {
  return <thead className={`${className}`} >{props.children}</thead>;
};

interface ITableRow extends HTMLAttributes<HTMLTableRowElement> {}
export const TableRow: FC<Partial<ITableRow>> = ({ className, ...props }) => {
  return (
    <tr
      className={` border-b cursor-pointer  transition-colors duration-500 ease-in-out border-[#F6F9FA] 
    hover:bg-[#FCFDFD] active:bg-[#F6F9FA] 
    ${className}`}
    {...props}
    >
      {props.children}
    </tr>
  );
};

interface ITableHead extends HTMLAttributes<HTMLTableCellElement> {}
export const TableHead: FC<ITableHead> = ({ className, ...props }) => {
  return (
    <th
      className={`text-left whitespace-nowrap first-of-type:rounded-l-lg last-of-type:rounded-r-lg  lg:first-of-type:static first-of-type:absolute  text-sm text-[#356075] normal-case  p-4 
    first-of-type:bg-[#F6F9FA] lg:first-of-type:bg-transparent 
    ${className}`}
    {...props}
    >
      {props.children}
    </th>
  );
};

/*

*/
export default TableWrapper;
