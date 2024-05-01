import { Flex } from "../common";
import { motion } from "framer-motion";
import { Deletemodalprops } from "@/interface/common";
import { Buttons } from "@withlanda/humphrey";

export default function DeleteModal({
  open,
  handleDelete,
  closeDeleteModal,
}: Deletemodalprops) {
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

  return (
    <>
      <motion.div
        className="modal-content fixed  top-0 left-0 lg:left-[20%] w-full lg:w-[80%] z-30 bg-[#0000008e] flex justify-center items-center  h-screen"
        initial="hidden"
        animate={open ? "visible" : "hidden"}
        exit="hidden"
        variants={modalVariants}
      >
        {/* Modal content */}
        <Flex className="flex-col justify-start pt-6 w-[17.75rem] h-44 bg-white relative z-40 rounded-2xl border border-mint_m7 text-center">
          <h2 className="text-base text-neutral_black_l6 font-bold">
            Discard upload
          </h2>
          <p className="text-sm mt-4 leading-[18.9px] text-[#646668]">
            Do you wish to delete the <br />
            uploaded document?
          </p>

          <Flex className="gap-2 mt-4 justify-center">
            <button onClick={closeDeleteModal}>Cancel</button>
            <Buttons
              className="px-8 py-2 pr-3 rounded-lg"
              onClick={handleDelete}
              variant="special"
              size="sm"
            >
              Yes, Delete
            </Buttons>
          </Flex>
        </Flex>
      </motion.div>
    </>
  );
}
