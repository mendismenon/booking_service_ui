import { fetchPlanMock } from "../../mocks/fetchPlanMock";
import { pageURL } from "../../utils/MicroServiceURL";
import { FETCH_PLANS, FETCH_PLANS_FAILURE, FETCH_PLANS_SUCCESS } from "../actions/BookingPlanActn";
import { put, takeLatest, call } from "redux-saga/effects";
import { apiCall, mockApi } from "../../utils/Api";

function* fetchPlansFn(action) {
    try {
      let fetchPlanUrl = pageURL.FETCH_PLANS;
      let response = yield call(apiCall, "post", fetchPlanUrl, action.data);
      if (mockApi) {
        response = fetchPlanMock;
      }
      if (response?.data?.success === 1) {
        yield put({ type: FETCH_PLANS_SUCCESS, data: response.data });
      } else {
        yield put({ type: FETCH_PLANS_FAILURE, data: response.data });
      }
    } catch (e) {
      yield put({
        type: FETCH_PLANS_FAILURE,
        data: {
          error: true,
        },
      });
    }
  }

export function* fetchingPlanWatcher() {
    yield takeLatest(FETCH_PLANS, fetchPlansFn);
  }