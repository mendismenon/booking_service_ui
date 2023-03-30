export const GENERATE_OTP = "GENERATE_OTP";
export const GENERATE_OTP_SUCCESS = "GENERATE_OTP_SUCCESS"
export const GENERATE_OTP_FAILURE = "GENERATE_OTP_FAILURE"
export const GENERATE_OTP_INITIALIZE = "GENERATE_OTP_INITIALIZE";
export const VALIDATE_OTP = "VALIDATE_OTP";
export const VALIDATE_OTP_SUCCESS = "VALIDATE_OTP_SUCCESS";
export const VALIDATE_OTP_FAILURE = "VALIDATE_OTP_FAILURE";

export const generateOtpActn = (pemail) => {
  return {
    type: GENERATE_OTP,
    email: pemail,
  };
};

export const initiateOtpActn = (pemail) => {
  return {
    type: GENERATE_OTP_INITIALIZE,
    email: pemail,
  };
};

export const validateOtpActn = (pobj) => {
  return {
    type: VALIDATE_OTP,
    data: {...pobj}
  }
}