import React, { useState } from "react";
import InAppLayout from "@/layouts/InAppLayout";
import { Flex, Span, Text } from "@/components/common";
import { Buttons } from "@withlanda/humphrey";
import { Add, DirectSend } from "@/assets/button";
import Paginate from "@/components/fee-advance/Paginate";
import PaginateBottom from "@/components/fee-advance/PaginateBottom";
import Modal from "@/components/fee-advance/Modal";
import CreateClassModal from "@/components/fee-advance/CreateClassModal";
import FeesTable from "@/components/fee-advance/Table";

function FeeAdvance() {
  const [open, setOpen] = useState<boolean>(false);
  const [openCreateClassModal, setopenCreateClassModal] =
    useState<boolean>(false);

  return (
    <InAppLayout childClassName="!px-0 lg:!px-8">
      <Flex className="justify-center w-full gap-10 lg:text-start text-center lg:justify-start mb-4 lg:gap-6 items-center">
        <Flex className="flex-col ">
          <Text className="text-mixed_m6 mt-4 text-[19px] lg:text-[23px] font-bold">
            Fee Management
          </Text>
          <Flex className="justify-between flex-col lg:flex-row lg:w-[60rem] w-full mt-3 gap-7 p-2 items-center">
            <Flex className="lg:gap-4 gap-2">
              <Buttons
                className="w-full text-md pr-[18px] py-[10px] flex"
                variant="primary"
                onClick={() => setopenCreateClassModal(true)}
                size="md"
              >
                <Flex className="items-center text-md gap-2 text-center justify-center">
                  <Add />
                  <Span className="text-neutral_white_l1 font-normal text-md">
                    New Class
                  </Span>
                </Flex>
              </Buttons>
              <Buttons
                variant="secondary"
                size="md"
                className="pr-[18px] py-[10px] flex w-full"
                onClick={() => setOpen(true)}
              >
                <Flex className="items-center gap-2 text-center justify-center">
                  <DirectSend />
                  <Span className="text-Dark_blue_L1 text-md font-normal ">
                    Batch Upload
                  </Span>
                </Flex>
              </Buttons>
            </Flex>
            <Paginate />
          </Flex>
        </Flex>
      </Flex>
      {/* tables */}
      <FeesTable />
      <PaginateBottom />
      <Modal open={open} close={() => setOpen(false)} />
      <CreateClassModal
        open={openCreateClassModal}
        close={() => setopenCreateClassModal(false)}
      />
    </InAppLayout>
  );
}

export default FeeAdvance;
