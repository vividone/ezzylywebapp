import React, { FormEvent, useEffect, useState } from "react";
import { Flex, Text } from "../common";
import { usePostClassManagement } from "@/helpers/api/useClassManagementRequest";
import { motion } from "framer-motion";
import { Buttons, Dropdown, Input, ToastComponent } from "@withlanda/humphrey";
import { Createclassmodalprops } from "@/interface/common";
import { Option } from "@/interface/auth";
import {
  Level,
  ActiveLevel,
  ProfileUser,
  ActiveProfileUser,
  Money,
  ActiveMoney,
  ActiveGraph,
  Graph,
  ArrowLeft,
} from "@/assets/button";
import {
  Teacher,
  ActiveTeacher,
  Calendar,
  ActiveCalendar,
} from "@/assets/inputs";
import toast from "react-hot-toast";

export default function CreateClassModal({
  open,
  close = () => {
    null;
  },
}: Createclassmodalprops) {
  const { formik, isLoading, isSuccess, isError, error } =
    usePostClassManagement();
  const [selectedLevel, setselectedLevel] = useState<Option | null>(null);
  const [paymentSchedule, setpaymentSchedule] = useState<Option | null>(null);
  const [paymentSession, setpaymentSession] = useState<Option | null>(null);
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
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
    formik.handleSubmit();
  };
  useEffect(() => {
    if (isSuccess) {
      toast.custom((t) => (
        <ToastComponent t={t} status="success" title="New Class Fees" />
      ));
      close();
    } else if (isError) {
      toast.custom((t) => (
        <ToastComponent
          t={t}
          status="error"
          title="Failed to add class"
          description={error}
        />
      ));
    }
  }, [isSuccess, isError]);
  useEffect(() => {
    formik.validateForm();
  }, []);
  return (
    <>
      <motion.div
        className="modal-content fixed  top-0 left-0 lg:left-[20%] w-full lg:w-[80%] z-20 bg-white overflow-scroll overflow-x-hidden  h-screen"
        initial="hidden"
        animate={open ? "visible" : "hidden"}
        exit="hidden"
        variants={modalVariants}
      >
        {/* Modal content */}
        <Flex className="flex-col items-center justify-center text-center">
          <Flex
            className="border-b gap-3 justify-center items-center w-[90%] lg:w-[58rem] border-mint_m8 pt-8 pb-5 font-bold fixed top-0 z-20 text-mixed_m6 cursor-pointer text-lg "
            onClick={close}
          >
            <ArrowLeft /> Create new
          </Flex>
          <Flex className="bg-neutral_white_l1 mt-28 p-8 flex-col w-full lg:w-[30rem] h-[40.5rem] border border-mint_m8 rounded-lg overflow-scroll overflow-x-hidden">
            <Flex className="justify-between w-full lg:w-[22.7rem] items-center mb-6 text-start">
              <Text className="text-mixed_m5 p-2 font-bold text-lg">
                New class
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
            <form
              autoComplete="false"
              onSubmit={handleSubmit}
              className="flex flex-col mt-2 space-y-4"
            >
              {/* to falsify auto complete */}
              <Input
                variant="primary"
                autoComplete="false"
                containerClassName="hidden"
              />
              <Input
                lefticon={Teacher}
                variant="primary"
                activelefticon={ActiveTeacher}
                placeholder="Class Name"
                name="class"
                className="items-start text-start"
                disabled={isLoading}
                value={formik.values.class}
                error={
                  formik.errors.class && formik.touched.class ? true : false
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <Dropdown
                Icon={Level}
                ActiveIcon={ActiveLevel}
                placeholder="Level"
                name="level"
                className="items-start text-start"
                isDisabled={isLoading}
                value={selectedLevel}
                error={
                  formik.errors.level && formik.touched.level ? true : false
                }
                onChange={(value) => {
                  const selectedOption = value as Option;
                  setselectedLevel(selectedOption);
                  formik.setFieldValue(
                    "level",
                    selectedOption ? selectedOption.value : null
                  );
                }}
                onBlur={() => {
                  formik.setFieldTouched("selectedLevel", true);
                }}
                options={[
                  { label: "Nursery", value: "nursery" },
                  { label: "Primary", value: "primary" },
                  { label: "Secondary", value: "secondary" },
                  { label: "Tertiary", value: "tertiary" },
                  { label: "Other", value: "other" },
                ]}
              />
              <Input
                lefticon={ProfileUser}
                variant="primary"
                activelefticon={ActiveProfileUser}
                placeholder="Number of students"
                name="classSize"
                className="items-start text-start"
                disabled={isLoading}
                value={formik.values.classSize}
                error={
                  formik.errors.classSize && formik.touched.classSize
                    ? true
                    : false
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <Input
                lefticon={Money}
                variant="primary"
                activelefticon={ActiveMoney}
                placeholder="Fee"
                name="fee"
                className="items-start text-start"
                disabled={isLoading}
                value={formik.values.fee?.toLocaleString()}
                error={formik.errors.fee && formik.touched.fee ? true : false}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <Dropdown
                Icon={Calendar}
                ActiveIcon={ActiveCalendar}
                placeholder="Payment schedule"
                name="paymentSchedule"
                className="items-start text-start"
                isDisabled={isLoading}
                value={paymentSchedule ?? ""}
                error={
                  formik.errors.paymentSchedule &&
                  formik.touched.paymentSchedule
                    ? true
                    : false
                }
                onChange={(value) => {
                  if (value) {
                    const selectedOption = value as Option;
                    setpaymentSchedule(selectedOption);
                    formik.setFieldValue(
                      "paymentSchedule",
                      selectedOption.value
                    );
                  } else {
                    setpaymentSchedule(null); // Handle the case when null is passed
                    formik.setFieldValue("paymentSchedule", null);
                  }
                }}
                onBlur={() => {
                  formik.setFieldTouched("paymentSchedule", true);
                }}
                options={[
                  { label: "Monthly", value: "month" },
                  { label: "Semester", value: "semester" },
                  { label: "Term", value: "term" },
                  { label: "Annual", value: "annual" },
                  { label: "Semi-Annual", value: "semi-annual" },
                  { label: "Quarterly", value: "quarterly" },
                  { label: "Others", value: "others" },
                ]}
              />
              <Dropdown
                Icon={Graph}
                ActiveIcon={ActiveGraph}
                placeholder="Payment session"
                name="paymentSession"
                className="items-start text-start"
                value={paymentSession ?? ""}
                error={
                  formik.errors.paymentSession && formik.touched.paymentSession
                    ? true
                    : false
                }
                onChange={(value) => {
                  if (value) {
                    const selectedOption = value as Option;
                    setpaymentSession(selectedOption);
                    formik.setFieldValue(
                      "paymentSession",
                      selectedOption.value
                    );
                  } else {
                    setpaymentSession(null); // Handle the case when null is passed
                    formik.setFieldValue("paymentSession", null);
                  }
                }}
                onBlur={() => {
                  formik.setFieldTouched("paymentSession", true);
                }}
                options={[
                  { label: "First", value: "first" },
                  { label: "Second", value: "second" },
                  { label: "Third", value: "third" },
                  { label: "Others", value: "others" },
                ]}
              />
              <Flex className="items-center justify-center text-center">
                <Buttons
                  variant="primary"
                  type="submit"
                  className="text-[15px] font-bold  mt-4 "
                  size="md"
                  isLoading={isLoading}
                  disabled={!formik.isValid || isLoading}
                >
                  Setup class
                </Buttons>
              </Flex>
            </form>
          </Flex>
        </Flex>
      </motion.div>
    </>
  );
}
