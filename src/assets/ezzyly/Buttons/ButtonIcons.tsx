import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { Loader } from './Loader';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'special' | 'terminus';
  size?: 'sm' | 'md' | 'lg' | 'full';
  color?: 'primary' | 'secondary' | 'special' | 'terminus';
  switchButtons?: boolean;
  icon?: any;
  isLoading?: boolean;
}

export const ButtonIcons = ({
  size = 'sm',
  variant = 'primary',
  icon,
  isLoading,
  children,
  className,
  switchButtons,
  ...props
}: Props) => {
  const sizes = {
    sm: 'py-[8px] text-[12px] px-[8px] w-[77px] h-[32px]',
    md: ' py-[22px] text-[13px] px-[18px] w-[129px] h-[40px]',
    lg: ' w-[157px] text-[15px] h-[48px] py-[18px] px-[20px]',
    full: 'w-full py-[18px] px-5',
    xxl: 'text-base',
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
      className={`flex items-center gap-2 justify-center rounded-md 
      transition-all 
      duration-300  ease-in-out
      ${sizeClassName} ${colorClassName}${className}`}
      {...props}
    >
      {isLoading ? (
        <Loader />
      ) : switchButtons ? (
        <>
          <span>{children}</span>
          {icon}
        </>
      ) : (
        <>
          {icon}
          <span>{children}</span>
        </>
      )}
    </button>
  );
};
