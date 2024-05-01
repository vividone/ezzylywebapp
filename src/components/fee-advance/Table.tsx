import {
  TableBody,
  TableHead,
  TableHeadSection,
  TableRow,
  TableWrapper,
} from "@withlanda/humphrey";
import React, { useState, FC } from "react";
import TableRows from "./TableRow";
import ViewClassModal from "./ViewClassModal";
import EmptyTableIcon from "@/assets/fees/EmptyTable";
import Flex from "../common/Flex";
import Text from "../common/Text";

interface ITable {
  isEmpty: boolean;
}
const FeesTable: FC<Partial<ITable>> = (props) => {
  const [openViewClassModal, setopenViewClassModal] = useState<boolean>(false);
  return (
    <>
      <TableWrapper
        className={"lg:min-w-[700px] xl:!min-w-[600px] font-satoshi"}
      >
        <TableHeadSection>
          <TableRow className="!bg-[#F6F9FA]  ">
            <TableHead className="w-[150px] fixed lg:static">Class</TableHead>
            <TableHead className="lg:hidden min-w-[170px] "></TableHead>
            <TableHead>Level</TableHead>
            <TableHead>Fee</TableHead>
            <TableHead>Class Size</TableHead>
            <TableHead>Payment Session</TableHead>
            <TableHead>Payment Schedule</TableHead>
          </TableRow>
        </TableHeadSection>

        {/* table body */}

        {!props.isEmpty && (
          <TableBody>
            <TableRows />
          </TableBody>
        )}
      </TableWrapper>
      {props.isEmpty && (
        <Flex className="w-full flex-col space-y-2 justify-center items-center mt-20">
          <EmptyTableIcon />
          <Text className="font-bold text-neutral_white_l11">
            No school fees added yet
          </Text>
          <Text className="text-mixed_m5 text-sm">
            See recent school fees here when you create them.
          </Text>
        </Flex>
      )}
      <ViewClassModal
        open={openViewClassModal}
        close={() => setopenViewClassModal(false)}
      />
    </>
  );
};

export default FeesTable;
