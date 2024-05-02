import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { DocumentForward, Setting4, DirectSend } from "iconsax-react";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "tertiary" | "ghost";
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "tertiary" | "ghost";
  buttonSwitch?: boolean;
  onClick?: () => void;
}

export const ButtonIcons2 = ({
  size = "sm",
  variant = "primary",
  children,
  buttonSwitch = false, // Default value is false
  ...props
}: Props) => {
  const sizes = {
    sm: "py-[18px] text-[12px] px-[12px] w-[77px] h-[32px]",
    md: " py-[24px] text-[13px] px-[18px] w-[129px] h-[40px]",
    lg: " w-[157px] text-[15px] h-[48px] py-[18px] px-[20px]",
    xxl: "text-base",
  };
  const colors = {
    primary: " bg-[#F9F9F9] border text-#104C6A",
    secondary: " bg-[#FBFCFD] border text-#104C6A",
    tertiary: "bg-[#DBE4FF] border text-#104C6A",
    ghost: "bg-[#DBE4FF] border border text-#104C6A",
  };
  const sizeClassName = sizes[size];
  const colorClassName = colors[variant];

  return (
    <button
      className={`flex items-center gap-2 justify-center rounded-md ${sizeClassName} ${colorClassName}`}
      {...props}
    >
      {buttonSwitch ? (
        <>
          <span>{children}</span>
          <DocumentForward size="16" color="#104C6A" variant="Outline" />
          <Setting4 size="16" color="#104C6A" variant="Outline" />
        </>
      ) : (
        <>
          <DirectSend size="16" color="#104C6A" variant="Outline" />
          <Setting4 size="16" color="#104C6A" variant="Outline" />
          <span>{children}</span>
        </>
      )}
    </button>
  );
};
