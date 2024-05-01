import React, { FormEvent, useEffect, useState } from "react";
import { Flex, Text } from "../common";
// import { Buttons } from "@withlanda/humphrey";
// import { modalProps } from "@/interface/common";
import { motion } from "framer-motion";
import { Buttons, Dropdown, Input, ToastComponent } from "@withlanda/humphrey";
import { Createclassmodalprops } from "@/interface/common";
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
import { useEditClassManagement } from "@/helpers/api/useClassManagementRequest";
import toast from "react-hot-toast";
import { Option } from "@/interface/auth";

export default function EditClassModal({
  open,
  close = () => {
    null;
  },
  onSuccess,
}: Createclassmodalprops) {
  const { formik, isLoading, isSuccess, isError, error, currentValues } =
    useEditClassManagement();
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
        <ToastComponent t={t} status="success" title="Account Edited" />
      ));
      close();
      if (onSuccess) {
        onSuccess(); // Invoke onSuccess only if it is defined
      }
    } else if (isError) {
      toast.custom((t) => (
        <ToastComponent
          t={t}
          status="error"
          title="Edit Failed"
          description={error}
        />
      ));
    }
  }, [isSuccess, isError]);
  useEffect(() => {
    formik.setValues(currentValues);
    formik.validateForm();
  }, []);
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
            <ArrowLeft /> Edit Class
          </Flex>
          <Flex className="bg-neutral_white_l1 p-8 flex-col w-full lg:w-[30rem] mt-8 h-[30.5rem] border border-mint_m8 rounded-lg overflow-scroll overflow-x-hidden">
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
                  { label: "first", value: "first" },
                  { label: "second", value: "second" },
                  { label: "third", value: "third" },
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
                  { label: "Monthly", value: "monthly" },
                  { label: "Semester", value: "semester" },
                  { label: "Term", value: "term" },
                  { label: "Annual", value: "annual" },
                  { label: "Semi-Annual", value: "semi-annual" },
                  { label: "Quaterly", value: "quaterly" },
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
                  Edit Class
                </Buttons>
              </Flex>
            </form>
          </Flex>
        </Flex>
      </motion.div>
    </>
  );
}
