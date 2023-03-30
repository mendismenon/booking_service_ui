import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../inputControls/button/Button";
import FloatingInput from "../../inputControls/floatingInput/FloatingInput";
import { notify } from "../../inputControls/toast/Toast";
import { validateOtpActn, VALIDATE_OTP_FAILURE, VALIDATE_OTP_SUCCESS } from "../../redux/actions/AuthenticationActn";
import { checkDigits } from "../../utils/validator";
import "./verifyOTP.css";

const VerifyOTP = (props) => {
  const [otpNumber, setOTPNumber] = useState("");
  const dispatch = useDispatch();

  const [otpInvalid, setotpInvalid] = useState({
    invalid: false,
    msg: "",
  });

  const generateOtpResponse = useSelector(
    (state) => state?.AuthReducer?.authObj
  );

  useEffect(()=> {
    if(generateOtpResponse.auth && generateOtpResponse.status === VALIDATE_OTP_SUCCESS){
      notify.success("OTP Validated successfully!")
      props.onClick();
    }else if(!generateOtpResponse.auth && generateOtpResponse.status === VALIDATE_OTP_FAILURE){
      notify.danger("OTP Validation failed!");
    }
  },[generateOtpResponse])

  const handleInputChange = (e) => {
    setOTPNumber(e);
    if(otpInvalid.invalid && e.length === 6 && checkDigits(e)){
        setotpInvalid({
            invalid: false,
            msg: "",
          });
    }
  };

  const verifyOtpFn = () => {
      if(otpNumber.length === 6 && checkDigits(otpNumber)){
        debugger;
        let lrequest = {
            transactionId: generateOtpResponse?.data?.transactionId,
            otp: otpNumber,
            email: generateOtpResponse?.data?.email
        }
        dispatch(validateOtpActn(lrequest))
      }else{
        setotpInvalid({
            invalid: true,
            msg: "OTP Number should be 6 digits",
          });
      }
  };

  return (
    <>
    {console.log(generateOtpResponse)}
      <div className="signInparentCls">
        <div className="parentCompCls">
          <div className="firstSection"></div>
          <div className="secondSection">
            <div className="loginHeader">Verify OTP</div>
            <div className="otpMsgCls">
                {"The OTP has sent to "+generateOtpResponse?.data?.email}
            </div>
            <FloatingInput
              type="text"
              label="Enter OTP"
              htmlFor="otp"
              maxLength={6}
              value={otpNumber}
              handleChange={(e) => {
                handleInputChange(e);
              }}
              invalidObj={otpInvalid}
            />
            <div className="signInBtnGrpCls">
              <Button
                parentClassName="loginBtnCls"
                value="Close"
                className="secondary"
                onClick={props.onClick}
              />
              <Button
                parentClassName="loginBtnCls"
                value="Verify OTP"
                onClick={verifyOtpFn}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default VerifyOTP;
