import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/loader/Loader";
import VerifyOTP from "../../components/verifyOTP/VerifyOTP";
import Button from "../../inputControls/button/Button";
import FloatingInput from "../../inputControls/floatingInput/FloatingInput";
import { notify } from "../../inputControls/toast/Toast";
import { generateOtpActn, GENERATE_OTP_FAILURE, GENERATE_OTP_SUCCESS } from "../../redux/actions/AuthenticationActn";
import { verifyActn } from "../../redux/actions/StateAction";
import { emailValidator } from "../../utils/validator.js";
import "./SignIn.css";

const SignIn = (props) => {
  //const [email, setEmail] = useState("");
  const email = useSelector((state) => state?.StateReducer?.verify?.email);
  const dispatch = useDispatch();
  const loader = useSelector((state) => state?.AuthReducer?.authObj?.isLoading);
  const generateOtpResponse = useSelector(
    (state) => state?.AuthReducer?.authObj
  );

  useEffect(()=>{
    if(generateOtpResponse?.data?.success === 1 && generateOtpResponse?.status === GENERATE_OTP_SUCCESS){
      notify.success("OPT Sent Successfully!")
    }else if(generateOtpResponse.error && generateOtpResponse.status === GENERATE_OTP_FAILURE){
      let errorMsg = generateOtpResponse?.data?.errorMsg ?? "OTP generation failed";
      notify.danger(errorMsg);
    }
  },[generateOtpResponse])

  const [emailInvalid, setEmailInvalid] = useState({
    invalid: false,
    msg: "",
  });

  const handleInputChange = (e) => {
    debugger;
    dispatch(verifyActn(e));
    if (emailInvalid?.invalid && emailValidator(email)) {
      setEmailInvalid({
        invalid: false,
        msg: "",
      });
    }
  };

  const generateOtpFn = (e) => {
    e.stopPropagation();
    setEmailInvalid(false);
    if (emailValidator(email)) {
      dispatch(generateOtpActn(email));
    } else {
      setEmailInvalid({
        invalid: true,
        msg: "Invalid Email Id",
      });
    }
  };

  return (
    <>
      {loader && <Loader FullScreen={true} />}
      {console.log(generateOtpResponse)}
      {generateOtpResponse?.data?.success !== 1 ? (
        <div className="signInparentCls">
          <div className="parentCompCls">
            <div className="firstSection"></div>
            <div className="secondSection">
              <div className="loginHeader">Login</div>
              <FloatingInput
                type="email"
                label="E-mail"
                htmlFor="email"
                maxLength={37}
                value={email}
                handleChange={(e) => {
                  handleInputChange(e);
                }}
                invalidObj={emailInvalid}
              />
              <div className="signInBtnGrpCls">
                <Button
                  parentClassName="loginBtnCls"
                  value="Close"
                  className="secondary"
                  onClick={props.onClose}
                />
                <Button
                  parentClassName="loginBtnCls"
                  value="Generate OTP"
                  onClick={(e)=>generateOtpFn(e)}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <VerifyOTP onClick={props.onClose}/>
      )}
    </>
  );
};
export default SignIn;
