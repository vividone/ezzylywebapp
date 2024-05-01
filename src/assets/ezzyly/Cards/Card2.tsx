import React, { HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  variant?: 'Primary' | 'Secondary';
  size?: 'sm' | 'md' | 'lg';
  color?: 'Primary' | 'Secondary';
  header1?: string;
  text?: string;
  icon?: any;
  img?: any;
}

export const Card2 = ({
  size = 'lg',
  variant = 'Primary',
  children,
  icon,
  header1,
  text,
  img,
  ...props
}: Props) => {
  const sizes = {
    sm: 'py-[8px] text-[12px] px-[6px] w-[77px] h-[32px]',
    md: ' py-2 text-[13px] px-2 w-[17rem] h-[10.2rem]',
    lg: ' w-[157px] text-[15px] h-[48px] py-[18px] px-[20px]',
    xxl: 'text-base',
  };
  const colors = {
    Primary: 'bg-Peach_L9 ',
    Secondary: 'bg-mint_m1 text-Primary_Dark',
  };
  const sizeClassName = sizes[size];
  const colorClassName = colors[variant];
  return (
    <div
      className={`flex pl-6 flex-col gap-2 text-start items-start justify-start rounded-xl ${sizeClassName} ${colorClassName}`}
      {...props}
    >
      <div className=" flex flex-col mt-3">
        <span className=" font-bold  text-[#FF6565] max-w-[9.5rem]">
          {header1}
        </span>
      </div>
      <div className="flex justify-between items-center max-w-[15.5rem] ">
        <div className="flex gap-3 mt-[3.5rem] w-[7rem] justify-start items-center text-center text-mixed_m6">
          <span className="font-normal text-normal ">{text}</span>
          <span className="">{icon}</span>
        </div>

      </div>
    </div>
  );
};
