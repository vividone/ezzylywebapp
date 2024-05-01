import React, { useState } from "react";
import { Flex, Span, Text } from "../common";
import { motion } from "framer-motion";
import { Buttons } from "@withlanda/humphrey";
import { ClassDataProps, Createclassmodalprops } from "@/interface/common";
import { Level, ProfileUser, Money, Graph, ArrowLeft } from "@/assets/button";
import { Teacher, Calendar } from "@/assets/inputs";
import EditClassModal from "./EditClassModal";
import { useAppDispatch } from "@/redux/store";
import { setUserClassId } from "@/redux/feature/classManagement";

export default function ViewClassModal({
  open,
  close = () => {
    null;
  },
  classData = {} as ClassDataProps,
}: Createclassmodalprops) {
  const modalVariants = {
    hidden: {
      opacity: 0,
      y: "-100%",
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: "0%",
      scale: 1,
    },
  };
  const [openEditModal, setopenEditModal] = useState<boolean>(false);
  // console.log(classData);
  const dispatch = useAppDispatch();
  const handleEditClass = () => {
    setopenEditModal(true);
    dispatch(setUserClassId(classData?._id)); // Dispatch the _id to setUserClassId
  };
  const handleEditSuccess = () => {
    setopenEditModal(false);
    close();
  };

  return (
    <>
      <motion.div
        className="modal-content fixed  top-0 left-0 lg:left-[20%] w-full lg:w-[80%] z-20 bg-white overflow-scroll overflow-x-hidden h-screen"
        initial="hidden"
        animate={open ? "visible" : "hidden"}
        exit="hidden"
        variants={modalVariants}
      >
        {/* Modal content */}
        <Flex className="flex-col items-center justify-center text-center">
          <Flex
            className="border-b gap-3 justify-center items-center w-[90%] lg:w-[58rem] border-mint_m8 pt-8 pb-5 font-bold text-mixed_m6 text-lg "
            onClick={close}
          >
            <ArrowLeft /> View Class
          </Flex>
          <Flex className="bg-neutral_white_l1 py-8 px-3 lg:p-8 flex-col w-full lg:w-[30rem] mt-8 h-[30.5rem] border border-mint_m8 rounded-lg overflow-scroll overflow-x-hidden">
            <Flex className="justify-between w-full lg:w-[22.7rem] items-center mb-6 text-start">
              <Text className="text-mixed_m5 p-2 font-bold text-lg">
                Basic 1
              </Text>
              <Buttons
                variant="terminus"
                className="p-2 font-medium"
                size="sm"
                onClick={close}
              >
                Cancel
              </Buttons>
            </Flex>
            <Flex className="flex flex-col px-1 lg:px-3 mt-2 space-y-4">
              <Flex className="justify-between items-center text-start px-0 lg:px-1 py-2 border-b-2 ">
                <Flex className="gap-3 items-center text-md font-medium text-brown_m2">
                  <Teacher /> <Span>Class name</Span>
                </Flex>
                <Span className=" text-md font-medium text-brown_m2">
                  {classData?.class}
                </Span>
              </Flex>
              <Flex className="justify-between items-center text-start px-0 lg:px-1 py-2 border-b-2 ">
                <Flex className="gap-3 items-center text-md font-medium text-brown_m2">
                  <Level /> <Span>Level</Span>
                </Flex>
                <Span className="text-md font-medium text-brown_m2">
                  {classData?.level}
                </Span>
              </Flex>
              <Flex className="justify-between items-center text-start px-0 lg:px-1 py-2 border-b-2 ">
                <Flex className="gap-3 items-center text-md font-medium text-brown_m2">
                  <ProfileUser /> <Span>Number of students</Span>
                </Flex>
                <Span className="text-md font-medium text-brown_m2">
                  {classData?.classSize}
                </Span>
              </Flex>
              <Flex className="justify-between items-center text-start px-0 lg:px-1 py-2 border-b-2 ">
                <Flex className="gap-3 items-center text-md font-medium text-brown_m2">
                  <Money /> <Span>Fee</Span>
                </Flex>
                <Span className="text-md font-medium text-brown_m2">
                  {classData?.fee}
                </Span>
              </Flex>
              <Flex className="justify-between items-center text-start px-0 lg:px-1 py-2 border-b-2 ">
                <Flex className="gap-3 items-center text-md font-medium text-brown_m2">
                  <Calendar /> <Span>Payment schedule</Span>
                </Flex>
                <Span className="text-md font-medium text-brown_m2">
                  {classData?.paymentSchedule}
                </Span>
              </Flex>
              <Flex className="justify-between items-center text-start px-0 lg:px-1 py-2 border-b-2 ">
                <Flex className="gap-3 items-center text-md font-medium text-brown_m2">
                  <Graph /> <Span>Payment Session</Span>
                </Flex>
                <Span className="text-md font-medium text-brown_m2">
                  {classData?.paymentSession}
                </Span>
              </Flex>
              <Flex
                onClick={handleEditClass}
                className="items-center justify-center text-center"
              >
                <Buttons
                  variant="primary"
                  type="submit"
                  className="text-[15px] font-bold  mt-4 "
                  size="md"
                >
                  Edit Class
                </Buttons>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <EditClassModal
          open={openEditModal}
          close={() => setopenEditModal(false)}
          onSuccess={handleEditSuccess}
        />
      </motion.div>
    </>
  );
}
