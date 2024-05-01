import Flex from "@/components/common/Flex";
import Sidebar from "@/components/navigation/Sidebar";
import { Layouts } from "@/interface/common";
import React, { FC } from "react";
// import { toast } from "react-hot-toast";

const InAppLayout: FC<Partial<Layouts>> = (props) => {
  // const handleToast = () => {
  //   toast.custom((t) => (
  //     <ToastComponent
  //       t={t}
  //       Icon={NotificationBellIcon}
  //       status="custom"
  //       title="Request fee advance unavailable"
  //       description="Check back soon "
  //     />
  //   ));
  // };
  return (
    <Flex
      className={`flex-col font-satoshi lg:flex-row  max-w-[100%]  ${props.className}`}
    >
      {/* sidebar  */}
      <Sidebar />
      <Flex
        className={`flex-col w-full max-w-[100%]  px-8 py-8 ${props.childClassName}`}
      >
        {props.children}
      </Flex>
    </Flex>
  );
};

export default InAppLayout;
