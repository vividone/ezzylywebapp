import EzzylyLogo from "@/assets/common/EzzlylyLogo";
import VerifyLoginComponent from "@/components/auth/VerifyLoginComponent";
import Flex from "@/components/common/Flex";
import AuthOthersLayout from "@/layouts/AuthOthersLayout";
import React from "react";

// const VerifyLogin = () => {
//   return (
//     <AuthOthersLayout className="justify-center py-8 px-4">
//       <Flex className="w-full flex-col items-center lg:flex-row lg:mt-0 lg:justify-center lg:items-start bg-container">
//         <Flex className="w-full items-center lg:mt-10 lg:items-start flex-col">
//           <a href={PAGES.LOGIN}>
//             <EzzylyBlack />
//           </a>
//           <Image
//             src="/img/mockup.png"
//             className="ml-8 mt-6 hidden lg:block"
//             width={750}
//             height={563}
//             alt="Ezzyly mockup for iphone 13"
//           />
//           <Text className="text-center hidden lg:inline  lg:mt-10 max-w-[258px] lg:max-w-[max-content] mx-auto lg:mx-0 font-medium  text-mixed_m3 text-[11px] md:text-sm">
//             © 2023. Ezzyly is a product of Landa Finance Ltd. All rights
//             reserved.
//           </Text>
//         </Flex>
//         <Flex className="bg-neutral_white_l1 w-full  sm:max-w-[430px] lg:max-w-[500px] sm:mx-auto lg:mx-0 mt-6 px-5 md:px-10 py-14 pb-10 lg:px-10 lg:pb-10 flex-col rounded-3xl">
//           {/* dummy image space  */}
//           <Flex className="bg-mint_m8 p-10 mx-auto rounded-2xl  max-w-[max-content]">
//             <SecureLogin />
//           </Flex>
//           <VerifyLoginComponent />
//         </Flex>
//       </Flex>
//     </AuthOthersLayout>
//   );
// };

// export default VerifyLogin;

const VerifyLogin = () => {
  return (
    <AuthOthersLayout className="justify-center   lg:py-0 px-4 lg:px-0">
      {/*  <Flex className="w-full flex-col lg:flex-row  lg:justify-start lg:items-start lg:space-x-4 ">
        <div className="hidden lg:block fixed lg:min-w-[40%] lg:min-h-[100vh] xl:min-w-[50%] xl:min-h-[100vh] bg-landa-side bg-cover bg-top-center" />
        <div className="hidden lg:block  lg:min-w-[40%] lg:min-h-[100vh] xl:min-w-[50%] xl:min-h-[100vh]" /> 
        <Flex className="bg-neutral_white_l1 w-full lg:mt-16  sm:max-w-[430px] lg:max-w-[572px] sm:mx-auto lg:mx-0 mt-6 px-5 md:px-10 py-14 pb-10 lg:px-20 lg:pb-20 flex-col rounded-3xl">
         
          <Flex className="bg-mint_m8 p-5 mx-auto rounded-2xl  max-w-[max-content]">
            <SecureLogin />
          </Flex>
        </Flex>
      </Flex>
*/}
      <Flex className="flex-col w-full py-5 lg:py-0 px-2 md:mt-6 h-screen lg:h-auto lg:mt-0 lg:justify-start items-center">
        <Flex className="">
          <EzzylyLogo />
        </Flex>
        {/* background white form field */}
        <VerifyLoginComponent />
      </Flex>
    </AuthOthersLayout>
  );
};

export default VerifyLogin;
