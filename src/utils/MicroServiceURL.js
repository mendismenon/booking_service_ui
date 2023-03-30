//############################################//
let env = "local"; //local, dev, qa, prod
//############################################//

const profileConfig = {
  local: {
    global: "http://localhost:3000",
  },
};

export const DashboardUrl = profileConfig[env].dashboardUrl;

const urlPrefixGlobal = (url) => {
  return profileConfig[env].global + url;
};

export const pageURL = {
  ENV: env,
  GENERATE_OTP_URL: urlPrefixGlobal("/generateOtp"),
  VALIDATE_OTP_URL: urlPrefixGlobal("/validateOtp"),
  FETCH_PLANS: urlPrefixGlobal("/fetchPlans")
};
