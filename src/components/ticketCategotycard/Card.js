import React from "react";
import Button from "../../inputControls/button/Button";
import FloatingInput from "../../inputControls/floatingInput/FloatingInput";
import {
  MAXIMUM_BOOKING_COUNT,
  MINIMUM_BOOKING_COUNT,
} from "../../utils/Constants";
import "./Card.css";
const Card = (props) => {
  const checkDisabled = (pval, pflag) => {
    if (pflag === "min" && parseInt(pval) === MINIMUM_BOOKING_COUNT) {
      return "disabled";
    } else if (pflag === "max" && parseInt(pval) >= MAXIMUM_BOOKING_COUNT) {
      return "disabled";
    }
  };

  const updateCountFn = (pval, pid, pindex, pflag) => {
    pval = parseInt(pval);
    if (pflag === "min") {
      --pval;
    } else if (pflag === "max") {
      ++pval;
    }
    props.handleChange(pval.toString(), pid, pindex);
  };
  return (
    <>
      <div className="cardPrntTicketCls">
        <div className="firstTicktcardCls">
          <div className="ticktcardTitleCls">
            <h3 className="cardHeadCls">{props.category}</h3>
            <p>{props.desc}</p>
          </div>
        </div>
        <div className="secndTicktcardCls">
          <img
            src={props.img}
            alt={props.category}
            className="imgCardTicktCls"
          />
        </div>
        <div className="thrdTicktcardCls">
          <div className="ticktcardTitleCls">
            <div className="priceSectnTicktCls">
              <div className="priceHeadTicktCrdCls">Price</div>
              <div className="prriceNmTicktCls">
                {"₹ " + props.price + "/-"}
              </div>
            </div>
            <div className="btnGrpTicktCls">
              <Button
                className="minusBtnCls"
                value="-"
                disabled={checkDisabled(props.value, "min")}
                onClick={() =>
                  updateCountFn(props.value, props.id, props.index, "min")
                }
              />
              <FloatingInput
                className="totalCountTicketCls"
                value={props.value}
                handleChange={props.handleChange}
                invalidObj={props.invalidObj}
              />
              <Button
                className="plusBtnCls"
                value="+"
                disabled={checkDisabled(props.value, "max")}
                onClick={ () =>{
                  updateCountFn(props.value, props.id, props.index, "max")}
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
