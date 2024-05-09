export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const TOKEN_VALUE = "Ezzyly_AUTH";
export const WEBSITE_URL = process.env.NEXT_WEBSITE_URL;

export function useUrls() {
  // Auth endpoints
  // i did not put v1 in the base url because of these things can change

  // Step 1
  const registerUrl = `${BASE_URL}/account/register`;
  // Step 2
  const onboardServiceProviderUrl = `${BASE_URL}/service-provider/create`;
  // Step 3
  const sendOtp = `${BASE_URL}/account/sendOtp`;
  //
  const verifyLoginUrl = `${BASE_URL}/account/validateOtp`;

  const loginUrl = `${BASE_URL}/account/login`;

  const validateOtp = `${BASE_URL}/account/validateOtp`;
  const resendOTPUrl = `${BASE_URL}/api/v1/auth/request-otp`;
  const resetPasswordUrl = `${BASE_URL}/api/v1/auth/reset-password`;
  const getServiceProviderByUserId = `${BASE_URL}/service-provider/getServiceProviderByUserId`;
  const privacyPolicy = `${WEBSITE_URL}/privacy-policy`;
  const partnerTerms = `${WEBSITE_URL}/partner-terms`;
  const termsOfUse = `${WEBSITE_URL}/terms-of-use`;
  const cookiePolicy = `${WEBSITE_URL}/cookie-policy`;

  return {
    loginUrl,
    registerUrl,
    sendOtp,
    verifyLoginUrl,
    validateOtp,
    resendOTPUrl,
    onboardServiceProviderUrl,
    resetPasswordUrl,
    getServiceProviderByUserId,
    privacyPolicy,
    partnerTerms,
    termsOfUse,
    cookiePolicy,
  };
}
