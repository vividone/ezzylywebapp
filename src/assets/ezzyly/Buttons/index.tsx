import React, { ButtonHTMLAttributes, SVGProps, ReactNode } from "react";
import { Loader } from "./Loader";
export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: // This ones here are from the design
  "primary" | "secondary" | "special" | "terminus";
  size?: "sm" | "md" | "lg" | "full"; // the last 'full' is for default fields so it takes all the space
  isLoading?: boolean;
  color?: "primary" | "secondary" | "special" | "terminus";
  switchButton?: boolean;
  switchRedButton?: boolean;
  icon?: SVGProps<SVGSVGElement> | any;
}

export const Buttons = ({
  size = "full",
  className,
  variant = "primary",
  children,
  isLoading,
  switchButton,
  switchRedButton,
  icon,
  ...props
}: Props) => {
  const sizes = {
    sm: "py-[8px] text-[12px] px-[6px] w-[77px] h-[32px]",
    md: " py-[22px] text-[13px] px-[14px] w-[129px] h-[40px]",
    lg: " w-[157px] text-[15px] h-[48px] py-[18px] px-[20px]",
    full: "w-full py-[18px] px-5",
    xxl: "text-base",
  };
  const colors = {
    primary: `bg-[#0D63C6]  hover:bg-[#147AF0] active:bg-[#0B56AD] 
    text-white
    disabled:opacity-30 `,
    secondary: `bg-[#F9F9F9] hover:border hover:bg-[#FBFCFD] hover:text-[#0D63C6] hover:border-[#AEBFC8] active:bg-[#DBE4FF] 
    text-[#104C6A] active:text-[#104C6A]
    disabled:opacity-30 `,
    special: `bg-[#FF6565] hover:bg-[#FF8181] hover:text-[#FEFEFE]  active:bg-[#F65555] 
    text-[#FEFEFE] `,
    terminus: `bg-[#FFFCFB] hover:bg-[#FFE5D5] border border-[#FFE5D5] hover:text-[#F65555] active:bg-[#FFE5D5] 
    text-[#F65555] `,
  };
  const sizeClassName = sizes[size];
  const colorClassName = colors[variant];

  return (
    <button
      className={`flex gap-2 text-center whitespace-nowrap items-center justify-center transition-all 
      duration-300  ease-in-out cursor-pointer disabled:cursor-not-allowed
       rounded-md ${sizeClassName} ${colorClassName} ${className}`}
      {...props}
    >
      {isLoading ? (
        <Loader />
      ) : switchButton ? (
        <>
          <span>{children}</span>
        </>
      ) : (
        <>
          {switchRedButton ? (
            <>
              <span>{icon}</span>
              <span>{children}</span>
            </>
          ) : (
            <>
              <span className="text-bold">{icon}</span>
              <span>{children}</span>
            </>
          )}
        </>
      )}
    </button>
  );
};
