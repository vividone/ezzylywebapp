import React, { FC, HTMLAttributes } from "react";
import CloseIconRed from "@/assets/ezzyly/assets/specials//CloseIconRed";
import TickCircle from "@/assets/ezzyly/assets/specials//TickCircle";
import { Toast as IToastProps, toast } from "react-hot-toast";
import CloseCircle from "@/assets/ezzyly/assets/specials/CloseCircle";

interface IToast extends HTMLAttributes<HTMLDivElement> {
  active: boolean;
  status: "success" | "error";
  message: string;
}
export const Toast: FC<Partial<IToast>> = ({
  className,
  message,
  ...props
}) => {
  switch (props.status) {
    case "success":
      return (
        <div className="flex w-full transition-all duration-300 ease-in-out">
          <div
            className={`${
              props.active ? "hidden" : "flex"
            } bg-[#F5FEFB] px-5 rounded-lg  w-full py-4 
            space-x-3  items-start text-[#0BAC77] text-sm
          ${className}
          `}
          >
            <TickCircle />
            <p>{message || ""}</p>
          </div>
        </div>
      );
    case "error":
      return (
        <div className="flex w-full transition-all duration-300 ease-in-out">
          <div
            className={`${
              props.active ? "hidden" : "flex"
            }  bg-[#FFF9F7] px-5 rounded-lg  w-full py-4 space-x-3 flex items-start text-[#FF6565] ${className}`}
          >
            <CloseIconRed />
            <p>{message || ""}</p>
          </div>
        </div>
      );
    default:
      return <></>;
  }
};

export interface IToastComponent {
  t: IToastProps;
  title?: string;
  description?: string;
  status: "success" | "error" | "custom";
  Icon?: React.ComponentType;
}
export const ToastComponent: FC<IToastComponent> = ({ t, Icon, ...rest }) => {
  return (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-md w-full bg-white  shadow-lg rounded-2xl relative pointer-events-auto flex font-satoshi `}
    >
      <div className="flex-1 z-20 w-0 p-5">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
            {rest.status == "success" && <TickCircle />}
            {rest.status === "error" && <CloseCircle />}
            {rest.status === "custom" && Icon && <Icon />}
          </div>
          <div className="ml-4 flex-1">
            <p className="text-base font-bold text-[#323232]">{rest.title}</p>
            <p className="mt-1 text-sm text-[#356075]">{rest.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
// a toast that comes from the top

export const ToastInfo = () => {
  const onClick = () =>
    toast.custom(
      (t) => <ToastComponent status="error" t={t} title="Account Created" />,
      {
        duration: 2000,
      }
    );
  return <div onClick={onClick}>Toast me</div>;
};
