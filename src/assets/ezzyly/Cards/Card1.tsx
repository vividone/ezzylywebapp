import React, { HTMLAttributes, ReactNode, useState } from "react";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  variant?: "Primary" | "Disabled";
  size?: "sm" | "md" | "lg";
  color?: "Primary" | "Disabled";
  title?: string;
  number?: number;
  switchIcon?: boolean;
  text?: string;
  icon?: any;
}

export const Card1 = ({
  size = "lg",
  variant = "Primary",
  children,
  number,
  icon,
  title,
  text,
  switchIcon,
  ...props
}: Props) => {
  const sizes = {
    sm: "py-[8px] text-[12px] px-[6px] w-[77px] h-[32px]",
    md: " py-2 text-[13px] px-2 w-[21rem] h-[10rem]",
    lg: " w-[157px] text-[15px] h-[48px] py-[18px] px-[20px]",
    xxl: "text-base",
  };
  const colors = {
    Primary: "bg-[#F1F7FE]  text-[#0B56AD]",
    Disabled: "bg-[#FCFDFD] font-medium text-[#CFD9DE]",
  };
  const sizeClassName = sizes[size];
  const colorClassName = colors[variant];
  const [hideAmount, setHideAmount] = useState(false);
  return (
    <div
      className={`flex pl-6 flex-col gap-2 text-start items-cen justify-start rounded-xl ${sizeClassName} ${colorClassName}`}
      {...props}
    >
      <div className="mb-4 flex flex-col mt-3">
        <span className="mb-2 font-medium text-md">{title}</span>
        {hideAmount ? (
          <span className="mb-2 font-black text-3xl text-md">***********</span>
        ) : (
          <span className="mb-2 font-black text-3xl text-md">N {number}</span>
        )}
      </div>
      {switchIcon ? (
        <div className="flex gap-2 justify-start items-center text-mixed_m6">
          <div
            onClick={() => setHideAmount(!hideAmount)}
            className="cursor-pointer mt-1"
          >
            {icon}
          </div>
          <span className="font-normal fs-sm">{children}</span>
        </div>
      ) : (
        <div className="flex gap-2 p-2 justify-start items-center text-black">
          <span className="font-normal fs-sm"> {children}</span>
          <div> {icon}</div>
        </div>
      )}
    </div>
  );
};
