export const FETCH_PLANS = "FETCH_PLANS";
export const FETCH_PLANS_SUCCESS = "FETCH_PLANS_SUCCESS";
export const FETCH_PLANS_FAILURE = "FETCH_PLANS_FAILURE";

export const fetchPlanApiActn = (pobj) => {
    return {
        type: FETCH_PLANS,
        data: pobj
    }
}