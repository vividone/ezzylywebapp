import React, { FC, useState } from "react";
import Flex from "./Flex";
import { ToastComponent } from "@/assets/ezzyly/specials/Toast";
import Text from "./Text";
import ArrowBlueDown from "@/assets/navigation/ArrowBlueDown";
import ProfileIcon from "@/assets/inputs/ProfileIcon";
import SettingsIcon from "@/assets/navigation/SettingsIcon";
import LogoutIcon from "@/assets/navigation/Logout";
import useSessionStorage from "@/hooks/useSessionStorage";
import { logOutUserReq } from "@/helpers/api/useAuth";
import { IAuthRegister } from "@/interface/auth";
import { toast } from "react-hot-toast";
import { TOKEN } from "@/utils/token";

interface IPopupMenu {
  isCollapse: boolean;
}
const PopupMenu: FC<Partial<IPopupMenu>> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userDetails] = useSessionStorage<IAuthRegister>(TOKEN.USER);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // logout

  const handleLogout = () => {
    logOutUserReq();
    toast.custom((t) => (
      <ToastComponent
        t={t}
        status="success"
        title="Logout Successful"
        description="You have been logged out from Ezzyly"
      />
    ));
  };

  return (
    <>
      <div className="relative w-full">
        {/* Trigger button */}
        <Flex
          onClick={toggleMenu}
          className={`cursor-pointer space-x-2 ${
            props.isCollapse ? "items-center" : ""
          }`}
        >

          {/* <Avatar
            name={`${userDetails?.firstName} ${userDetails?.lastName}`}
            className="min-w-[40px] min-h-[40px]"
          /> */}

          <div
            className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full bg-slate-200"
          >
            {`${userDetails?.firstName.charAt(0)}${userDetails?.lastName.charAt(0)}`}
          </div>

          {props.isCollapse && <ArrowBlueDown />}
          {!props.isCollapse && (
            <Flex className="flex-col">
              <Flex className="items-center space-x-2">
                <Text className="text-mixed_m6 font-bold">
                  {`${userDetails?.firstName || ""} ${
                    userDetails?.lastName || ""
                  }`}
                </Text>{" "}
                <ArrowBlueDown />
              </Flex>
              <Text className="text-[11px] mt-2 text-mixed_m4">
                {userDetails?.email || ""}
              </Text>
            </Flex>
          )}
        </Flex>

        {/* Popup menu */}
        {isOpen && (
          <Flex className="absolute z-10 space-y-1 -top-28 -right-20 flex-col -mt-2 py-3 w-48 bg-white rounded-md shadow-lg">
            {/* Menu items */}
            <a
              href="/account/profile"
              className=" flex px-4 py-2 items-center text-mixed_m7 space-x-4"
              onClick={closeMenu}
            >
              <ProfileIcon />
              <p> Profile</p>
            </a>

            <a
              href="#"
              className=" flex items-center px-4 py-3 text-mixed_m7 space-x-4 "
              onClick={closeMenu}
            >
              <SettingsIcon />
              <p> Settings</p>
            </a>

            {/* div detail */}
            <div className="w-full h-[1px] bg-mixed_m1" />
            <div
              onClick={handleLogout}
              className="flex px-4  cursor-pointer py-3 items-center space-x-4 text-sec_red_l1"
            >
              <LogoutIcon />
              <p>Logout </p>
            </div>
          </Flex>
        )}
      </div>
    </>
  );
};

export default PopupMenu;
