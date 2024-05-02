import React, { FC, HTMLAttributes, useState } from "react";

interface INavigationItems extends HTMLAttributes<HTMLDivElement> {
  isActive: boolean;
  isCollapsed: boolean;
  lefticon: React.ElementType;
  activelefticon: React.ElementType;
  notificationNum: number;
}
export const NavigationItems: FC<Partial<INavigationItems>> = (props) => {
  const {
    isActive,
    isCollapsed,
    notificationNum,
    children,
    className,
    activelefticon,
    lefticon,
    ...rest
  } = props;
  const [hover, setHover] = useState(false);
  return (
    <div
      className={` flex items-center cursor-pointer relative  hover:text-[#147AF0] rounded-lg 
      ${
        isCollapsed ? " py-0 px-0 h-12 justify-center  w-12" : "justify-between"
      }
      ${
        isActive
          ? "bg-[#F1F7FE] text-[#0D63C6] font-[500] "
          : "bg-transparent text-[#356075] hover:bg-[#F1F7FE] "
      } px-4 py-6  ${className}`}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      {...rest}
    >
      {notificationNum && isCollapsed && (
        <div className="bg-white flex items-center justify-center absolute right-1 top-1 rounded-full w-3 h-3">
          <div className="bg-[#DD4040] w-2 h-2 rounded-full " />
        </div>
      )}
      <div className="flex gap-x-3">
        {props.lefticon && !isActive && !hover && <props.lefticon />}
        {((props.activelefticon && isActive) ||
          (props.activelefticon && hover)) && <props.activelefticon />}
        {!isCollapsed && <p>{children}</p>}
      </div>

      {notificationNum && !isCollapsed && (
        <div className="flex  text-white items-center font-[700] text-sm py-1 px-2 justify-center rounded-full bg-[#FF6565]">
          {notificationNum}
        </div>
      )}
    </div>
  );
};

/*  */
