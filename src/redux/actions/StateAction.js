export const VERIFY = "VERIFY";
export const PLAN_SELECT = "PLAN_SELECT";

export const verifyActn = (pemail) => {
    return {
        type: VERIFY,
        data: pemail
    }
}

export const planFetch = (pdata) => {
    return {
        type: PLAN_SELECT,
        data: pdata
    }
}