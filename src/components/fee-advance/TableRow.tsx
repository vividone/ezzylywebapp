import { TableData, TableRow } from "@withlanda/humphrey";
import React, { useState } from "react";
import { ArrowRight } from "@/assets/inputs";
import { Flex, Text } from "../common";
import ViewClassModal from "./ViewClassModal";
import { useClassManagement } from "@/helpers/api/useClassManagementRequest";

const TableRows = () => {
  const { tableData } = useClassManagement();
  // console.log(tableData);
  const [classData, setClassData] = useState<any>(null);
  // console.log(classData);
  const [openViewClassModal, setopenViewClassModal] = useState<boolean>(false);

  return (
    <>
      {tableData.map((item: any, index: number) => (
        <TableRow key={index} className="border-[#F6F9FA]">
          <TableData
            onClick={() => {
              setopenViewClassModal(true);
              setClassData(item);
            }}
            className="w-[150px]"
          >
            <Flex className="items-center gap-1 space-x-1">
              <Text>{item.class}</Text>
              <ArrowRight />
            </Flex>
          </TableData>
          <TableData className="lg:hidden shadow-[#D4E7FC] shadow-glow"></TableData>
          <TableData>
            <Text>{item.level}</Text>
          </TableData>
          <TableData>
            <div className="flex items-center space-x-10">
              <p>₦</p>
              <p>{item.fee}</p>
            </div>
          </TableData>
          <TableData>{item.classSize}</TableData>
          <TableData>{item.paymentSession}</TableData>
          <TableData>{item.paymentSchedule}</TableData>
        </TableRow>
      ))}
      <ViewClassModal
        open={openViewClassModal}
        close={() => setopenViewClassModal(false)}
        classData={classData}
      />
    </>
  );
};
export default TableRows;
