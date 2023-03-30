import {
  GENERATE_OTP,
  GENERATE_OTP_FAILURE,
  GENERATE_OTP_SUCCESS,
  VALIDATE_OTP,
  VALIDATE_OTP_FAILURE,
  VALIDATE_OTP_SUCCESS,
} from "../actions/AuthenticationActn";
import { put, takeLatest, call } from "redux-saga/effects";
import { pageURL } from "../../utils/MicroServiceURL";
import { apiCall, mockApi } from "../../utils/Api";
import { generateOtp } from "../../mocks/generateOtpMock";
import { validateOtpMock } from "../../mocks/validateOtpMock";

function* generateOtpFn(action) {
  try {
    let generateOtpUrl = pageURL.GENERATE_OTP_URL;
    let response = yield call(apiCall, "post", generateOtpUrl, {
      email: action.email,
    });
    if (mockApi) {
      response = generateOtp;
    }
    if (response?.data?.success === 1) {
      yield put({ type: GENERATE_OTP_SUCCESS, data: response.data });
    } else {
      yield put({ type: GENERATE_OTP_FAILURE, data: response.data });
    }
  } catch (e) {
    yield put({
      type: GENERATE_OTP_FAILURE,
      data: {
        error: true,
      },
    });
  }
}
export function* generateOptWatcher() {
  yield takeLatest(GENERATE_OTP, generateOtpFn);
}
function* validateOtpFn(action) {
  try {
    let validateOtpUrl = pageURL.VALIDATE_OTP_URL;
    let response = yield call(apiCall, "post", validateOtpUrl, action.data);
    if (mockApi) {
      response = validateOtpMock;
    }
    if (response?.data?.success === 1) {
      yield put({ type: VALIDATE_OTP_SUCCESS, data: response.data });
    } else {
      yield put({ type: VALIDATE_OTP_FAILURE, data: response.data });
    }
  } catch (e) {
    yield put({
      type: VALIDATE_OTP_FAILURE,
      data: {
        error: true,
      },
    });
  }
}
export function* validateOtpWatcher() {
  yield takeLatest(VALIDATE_OTP, validateOtpFn);
}
