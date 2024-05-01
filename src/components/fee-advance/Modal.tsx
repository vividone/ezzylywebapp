import React, { useRef, useState } from "react";
import { Flex, Span, Text } from "../common";
import { Buttons } from "@withlanda/humphrey";
import { modalProps } from "@/interface/common";
import { motion } from "framer-motion";
import { ArrowLeft, DirectSend } from "@/assets/button";
import DeleteModal from "./DeleteModal";

export default function Modal({ open, close }: modalProps) {
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

  const fileInputRef = useRef<HTMLInputElement>(null);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const handleLabelClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const [deleteModal, setDeleteModal] = useState<boolean>(false);

  const openDeleteModal = () => {
    setDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setDeleteModal(false);
  };

  const handleDelete = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    closeDeleteModal();
  };

  return (
    <>
      <motion.div
        className="modal-content fixed  top-0 left-0 w-full lg:left-[20%] lg:w-[80%] z-20 bg-white  h-screen"
        initial="hidden"
        animate={open ? "visible" : "hidden"}
        exit="hidden"
        variants={modalVariants}
      >
        {/* Modal content */}
        <Flex className="flex-col items-center justify-center text-center">
          <Flex
            className="border-b boreder-2 justify-center items-center w-[90%] lg:w-[58rem] border-mint_m8 pt-8 pb-5 gap-3 font-bold text-mixed_m6 text-lg "
            onClick={close}
          >
            <ArrowLeft /> Batch Upload
          </Flex>
          <Flex className="bg-neutral_white_l1 p-8 flex-col w-full lg:w-[30rem] mt-8 h-[30.5rem] border border-mint_m8 rounded-lg">
            <Flex className="justify-between w-full lg:w-[22.7rem] items-center mb-6 text-start">
              <Text className="text-mixed_m5 p-2 font-bold text-lg">
                File Upload
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
            <Flex
              className={`${
                !selectedFile ? "h-[35rem]" : "h-auto"
              } border-dashed border-2 border-mixed_m1 justify-center items-center text-center rounded-2xl pt-4 px-3 gap-3 flex-col`}
            >
              {!selectedFile && <DirectSend width={100} height={80} />}
              <input
                type="file"
                className="hidden"
                id="brand-img"
                ref={fileInputRef}
                onChange={handleFileChange}
              />
              {selectedFile ? (
                <div className="w-full mb-4 flex justify-between items-center">
                  <Flex className="justify-start gap-2 items-center">
                    <DirectSend />
                    <Span className="text-sm text-mixed_m5 font-bold leading-[21px]">
                      Upload complete
                    </Span>
                  </Flex>
                  <Buttons
                    className="cursor-pointer"
                    onClick={openDeleteModal}
                    variant="terminus"
                    size="sm"
                  >
                    delete
                  </Buttons>
                </div>
              ) : (
                <label
                  htmlFor="brand-img"
                  className="font-bold text-lg leading-6"
                >
                  <Flex className="text-brown_m2">
                    <Span
                      className="text-vibing_blue_x mr-2 cursor-pointer"
                      onClick={handleLabelClick}
                    >
                      Browse
                    </Span>{" "}
                    to upload file
                  </Flex>
                  <Text className="text-base leading-[21px] font-normal text-brown_m3 pt-3">
                    CSV and XLS format only
                  </Text>
                </label>
              )}
            </Flex>

            {selectedFile && (
              <Flex className="flex-col mt-10 items-start">
                <Span className="text-md font-bold leading-6 text-brown_m2">
                  Activity log
                </Span>
                <Span className="text-sm font-normal mt-4 leading-[21px] text-[#646668]">
                  54 classes successfully created.
                </Span>
                <Buttons
                  variant="primary"
                  className="mt-10 w-full h-12 rounded-lg"
                  size="md"
                >
                  Save changes
                </Buttons>
              </Flex>
            )}
          </Flex>
        </Flex>
      </motion.div>
      <DeleteModal
        open={deleteModal}
        handleDelete={handleDelete}
        closeDeleteModal={closeDeleteModal}
      />
    </>
  );
}
