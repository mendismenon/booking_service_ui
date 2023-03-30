import LazyLoad from "react-lazyload";
import "./MealCard.css";

import React, { useState, useEffect } from "react";
import Button from "../../inputControls/button/Button";
import FloatingInput from "../../inputControls/floatingInput/FloatingInput";
import { MAXIMUM_BOOKING_COUNT, MINIMUM_BOOKING_COUNT } from "../../utils/Constants";

const MealCard = (props) => {

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
    <div className={props.className}>
      <div className={"OrgDynamicCards"}>
        <div className="mb-3 mt-2 mx-1 text-center">
          <LazyLoad>
            <img
              height="180px"
              alt={props.alt}
              src={props.img}
              className="lazyload imgMealCls"
            />
          </LazyLoad>
        </div>
        <div className="CardDymcHeading text-center py-1 px-4 cntHead_sn">
          {props.category}
        </div>
        <div className="text-center px-3 cnt_subH_sn">{`₹ ${props.price}/-`}</div>
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
            onClick={() => {
              updateCountFn(props.value, props.id, props.index, "max");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MealCard;
