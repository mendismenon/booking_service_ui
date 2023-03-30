import axios from 'axios';

export const mockApi = true;
//import Logout from './Logout/Logout';
axios.defaults.withCredentials = true;

export const apiCall = async (pmethod,purl,preqObj) => {
  if(pmethod === "post" || pmethod === "patch"){
    return axios[pmethod](purl,preqObj,axiosConfig())
    .then(response =>{
      return response;
    }).catch(err =>{
      if(err.response.data.status===401){
        //Logout()
      }else{
        return err.response
      }
    })
  }
  else if(pmethod === "get"){
    let lconfig = axiosConfig();
    lconfig.params = preqObj;
    return axios[pmethod](purl, lconfig)
    .then(response =>{
      return response;
    }).catch(err =>{
      if(err.response.status===401){
        //Logout()
      }else{
        return err.response
      }
    })
  }
};
const axiosConfig = () => {
    return {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            "access_key":'token dpHau891H5uKt5ACrGKHENIuQLGL2JkD',
            "authorization":`bearer ${localStorage.getItem('token')}`
           }
      };
}
// apiCall(method, url, data).then(function(response) {
//   console.log(response);
// });
export const storeData = (pkey,pvalue) => {
  localStorage.setItem(pkey, pvalue);
}

export const retrieveData = (pkey) => {
  return localStorage.getItem(pkey);
}

export const encryptStr = (pstr) => {
  return window.btoa(pstr);
}

export const decryptStr = (pstr) => {
  return window.atob(pstr);
}

export const outTxtByTime = () => {
  let today = new Date();
  let loutTxt = "";
  let curHr = today.getHours();
  if (curHr < 12) {
    loutTxt = 'Good Morning';
  } else if (curHr < 16) {
    loutTxt = 'Good Afternoon';
  } else if (curHr < 20){
    loutTxt = 'Good Evening';
  }else{
    loutTxt = 'Good To See You';
  }
  return loutTxt;
}

export const numberWithCommas = (x) =>{
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const heightWidthCalc = () => {
  var w = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

  var h = window.innerHeight
  || document.documentElement.clientHeight
  || document.body.clientHeight;

  return {
    height : h,
    width: w
  }
}
