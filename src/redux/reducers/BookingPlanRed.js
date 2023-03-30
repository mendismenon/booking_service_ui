import {
  FETCH_PLANS,
  FETCH_PLANS_FAILURE,
  FETCH_PLANS_SUCCESS,
} from "../actions/BookingPlanActn";

const initialState = {
  date: "",
  isLoading: false,
  data: null,
  error: false,
};

const BookPlanReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLANS: {
      return { ...state, isLoading: true, data: null };
    }
    case FETCH_PLANS_SUCCESS:
      return {
        ...state,
        status: FETCH_PLANS_SUCCESS,
        isLoading: false,
        data: action.data,
        error: false,
      };
    case FETCH_PLANS_FAILURE:
      return {
        ...state,
        status: FETCH_PLANS_FAILURE,
        isLoading: false,
        data: action.data,
        error: true,
      };
    default: {
      return state;
    }
  }
};
export default BookPlanReducer;
