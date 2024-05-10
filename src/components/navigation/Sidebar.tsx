import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Flex from "../common/Flex";
import Hamburger from "@/assets/common/Hamburger";
import { NavigationItems } from "@/assets/ezzyly/navitems/NavigationItems";
import CloseMenu from "@/assets/common/CloseMenu";
import { providerRoutes } from "@/utils/provider";
import { useRouter } from "next/router";
import PopupMenu from "../common/PopupMenu";

const Sidebar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [isCollapse, setIsCollapse] = useState(false);
  const [providerMenu] = useState(providerRoutes);
  const router = useRouter();
  const handleMobile = () => {
    setIsMenu(!isMenu);
  };
  const handleDesktopCollapse = () => {
    setIsCollapse(!isCollapse);
  };

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  };

  const sidebarTransition = {
    duration: 0.3,
    ease: "linear",
  };

  useEffect(() => {
    //to reduced use effect
  }, []);

  return (
    <Flex className="lg:flex-col lg:max-w-[263px] lg:min-w-[263px] w-full transition-all ease-linear duration-700">
      <Flex className="px-8 py-[30px] w-full flex-row items-center justify-between">
        <Hamburger onClick={handleMobile} className="cursor-pointer" />
        <div
          className="min-w-[40px] max-w-[40px] min-h-[40px] max-h-[40px] lg:hidden"
        >
          Dera
        </div>
      </Flex>
      <AnimatePresence>
        {/* Mobile Navigation */}
        {isMenu && (
          <>
            <div className="absolute z-0 blur-sm w-full min-h-screen " />
            <motion.div
              className={
                "min-h-screen fixed flex lg:hidden justify-between z-10  bg-[#F1F6F799] "
              }
              initial={{ opacity: 0, x: -150 }}
              animate={isMenu ? "open" : "closed"}
              exit={{
                opacity: 0,
                x: -150,
              }}
              variants={sidebarVariants}
              transition={sidebarTransition}
              onClick={handleMobile}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              {/* Ezzyly nav */}
              <Flex
                className={`flex-col z-10 px-8 py-[45px] justify-between 
                min-w-[301px] min-h-screen bg-mint_m1 `}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Ezzyly */}
                <Flex className="flex-col space-y-12">
                  
                  <Flex className="flex-col space-y-2">
                    {providerMenu.map((data) => (
                      <NavigationItems
                        lefticon={data.icon}
                        activelefticon={data.activeIcon}
                        key={data.name}
                        isActive={
                          router.asPath.indexOf(data.path) === 0 ? true : false
                        }
                        onClick={() => router.push(data.path)}
                      >
                        {data.name}
                      </NavigationItems>
                    ))}
                  </Flex>
                </Flex>

                {/* user details */}
                <Flex className="flex-col space-y-8 ">
                  <div className="w-full h-[1px] bg-mixed_m1" />
                  <PopupMenu />
                </Flex>
              </Flex>

              <Flex className="z-10 px-8 py-2">
                <CloseMenu />
              </Flex>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      {/* desktop  */}
      <AnimatePresence>
        <>
          <motion.div
            className={`min-h-screen fixed hidden lg:flex flex-col justify-between z-10  bg-[#F1F6F799]
                    ${isCollapse ? "max-w-[80px]" : ""}}
              `}
            initial={{ opacity: 0, x: -150 }}
            animate={isCollapse ? "open" : "closed"}
            exit={{
              opacity: 0,
              x: -150,
            }}
            variants={sidebarVariants}
            transition={sidebarTransition}
            onClick={handleMobile}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            {/* Ezzyly nav */}
            <Flex
              className={`flex-col min-h-screen hidden lg:flex  z-10 transition-transform duration-500 ease-linear px-8 py-[45px] justify-between
              ${isCollapse ? "items-center" : "min-w-[263px]"} bg-mint_m1 `}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Ezzyly */}
              <Flex
                className={`flex-col space-y-12  ${
                  isCollapse ? "items-center" : ""
                }`}
              >
                <Flex className="space-x-5 items-center">
                  <Hamburger
                    className="cursor-pointer"
                    onClick={handleDesktopCollapse}
                  />
                </Flex>
                <Flex className="flex-col space-y-2">
                  {providerMenu.map((data) => (
                    <NavigationItems
                      lefticon={data.icon}
                      activelefticon={data.activeIcon}
                      key={data.name}
                      isCollapsed={isCollapse}
                      isActive={
                        router.asPath.indexOf(data.path) === 0 ? true : false
                      }
                      onClick={() => router.push(data.path)}
                    >
                      {data.name}
                    </NavigationItems>
                  ))}
                </Flex>
              </Flex>

              {/* user details */}
              <Flex className="flex-col space-y-8">
                <div className="w-full h-[1px] bg-mixed_m1" />
                <PopupMenu isCollapse={isCollapse} />
              </Flex>
            </Flex>
          </motion.div>
        </>
      </AnimatePresence>
    </Flex>
  );
};

export default Sidebar;
