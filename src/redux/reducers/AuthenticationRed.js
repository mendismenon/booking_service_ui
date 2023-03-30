import {
  GENERATE_OTP,
  GENERATE_OTP_FAILURE,
  GENERATE_OTP_INITIALIZE,
  GENERATE_OTP_SUCCESS,
  VALIDATE_OTP,
  VALIDATE_OTP_FAILURE,
  VALIDATE_OTP_SUCCESS,
} from "../actions/AuthenticationActn";

const initialState = {
  authObj: {
    auth: false,
    email: "",
    status: "",
    isLoading: false,
    data: null,
    error: null,
    validOtpData: null,
  },
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case GENERATE_OTP:
      return {
        ...state,
        authObj: {
          email: action?.email,
          status: GENERATE_OTP,
          isLoading: true,
          data: null,
          validOtpData: null,
        },
      };
    case GENERATE_OTP_SUCCESS:
      return {
        ...state,
        authObj: {
          auth: true,
          email: "",
          status: GENERATE_OTP_SUCCESS,
          isLoading: false,
          data: action.data,
          error: false,
          validOtpData: null,
        },
      };
    case GENERATE_OTP_FAILURE:
      return {
        ...state,
        authObj: {
          auth: false,
          email: "",
          status: GENERATE_OTP_FAILURE,
          isLoading: false,
          data: null,
          error: true,
          validOtpData: null,
        },
      };
    case GENERATE_OTP_INITIALIZE:
      return {
        ...state,
        authObj: {
          auth: false,
          email: "",
          status: GENERATE_OTP_INITIALIZE,
          isLoading: false,
          data: null,
          validOtpData: null,
          error: false,
        },
      };
    case VALIDATE_OTP: {
      return {
        ...state,
        authObj: {
          auth: false,
          email: state?.authObj?.data?.email,
          status: VALIDATE_OTP,
          isLoading: true,
          data: state?.authObj?.data,
          error: false,
          validOtpData: null,
        },
      };
    };
    case VALIDATE_OTP_SUCCESS: {
      return {
        ...state,
        authObj: {
          auth: true,
          email: state?.authObj?.data?.email,
          status: VALIDATE_OTP_SUCCESS,
          isLoading: false,
          data: state?.authObj?.data,
          error: false,
          validOtpData: action?.data,
        },
      };
    };
    case VALIDATE_OTP_FAILURE: {
      return {
        ...state,
        authObj: {
          auth: false,
          email: state?.authObj?.data?.email,
          status: VALIDATE_OTP_FAILURE,
          isLoading: false,
          data: state?.authObj?.data,
          error: false,
          validOtpData: action?.data,
        },
      };
    };
    default:
      return state;
  }
};

export default AuthReducer;
