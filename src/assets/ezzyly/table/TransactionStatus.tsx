import React, { FC, HTMLAttributes } from 'react';

export interface ITransactionStatus extends HTMLAttributes<HTMLDivElement> {
  status: 'pending' | 'successful' | 'failed';
}
export const TransactionStatus: FC<ITransactionStatus> = props => {
  let color = {
    bg: '',
    div: '',
  };
  switch (props.status) {
    case 'pending':
      color.bg = 'bg-[#FFFAEB] ';
      color.div = 'bg-[#FFD84D]';
      break;

    case 'successful':
      color.bg = 'bg-[#D5FFEB] ';
      color.div = 'bg-[#00F8A5]';
      break;

    case 'failed':
      color.bg = 'bg-[#FFEFEF] ';
      color.div = 'bg-[#FF6565]';
      break;
    default:
      color.bg = 'bg-[#D5FFEB] ';
      color.div = 'bg-[#00F8A5]';
      break;
  }
  return (
    <div
      className={`flex space-x-2 rounded-full w-[max-content] h-[max-content] items-center py-2 px-3 ${color.bg}`}
    >
      {/* this changes depending of the status  */}
      <div className={`${color.div} text-sm w-3 rounded-full h-3`} />
      <p className="first-letter:capitalize text-[#323232]">
        {props.status}
      </p>
    </div>
  );
};
