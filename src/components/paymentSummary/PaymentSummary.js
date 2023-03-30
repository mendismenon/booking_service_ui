import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./PaymentSummary.css";

const PaymentSummary = (props) => {
  const [ticketHead, setTicketHead] = useState(false);
  const [ticketPrice, setTicketPrice] = useState(0);
  const [mealPrice, setMealPrice] = useState(0);
  const [mealHead, setMealHead] = useState(false);
  const selectPlanObj = useSelector(
    (state) => state?.StateReducer?.planSelected
  );
  useEffect(() => {
    setTicketHead(false);
    setMealHead(false);
    let lticketPrice = 0;
    let lmealPrice = 0;
    selectPlanObj?.tickets?.map((lobj, lind) => {
      if (lobj.value !== "" && lobj.value != 0 && lobj.value !== undefined) {
          debugger;
        lticketPrice = lticketPrice + (lobj.value * lobj.price);
        setTicketHead(true);
      }
    });
    selectPlanObj?.meals?.map((lobj, lind) => {
      if (lobj.value !== "" && lobj.value != 0 && lobj.value !== undefined) {
        lmealPrice = lmealPrice + (lobj.value * lobj.price);
        setMealHead(true);
      }
    });
    setTicketPrice(lticketPrice);
    setMealPrice(lmealPrice);
  }, [selectPlanObj]);
  const getPriceData = (pcount, pprice) => {
    let ltotal = 0;
    ltotal = pcount * pprice;
    return `₹ ${ltotal}/-`;
  };
  const getGstAmount = () => {
      let lgstAmount = 0;
      let ltotalAmount = mealPrice+ticketPrice;
      lgstAmount = (ltotalAmount*10)/100;
      return lgstAmount;
  }
  return (
    <div className="paymentSummarySkltn">
      <div className="sumaryHeadSecCls">Payment Summary</div>
      {ticketHead && <div className="ticketHeadSecCls">Ticket Summary</div>}
      {selectPlanObj?.tickets?.map((lobj, lind) => (
        <>
          {lobj.value !== "" && lobj.value != 0 && lobj.value !== undefined && (
            <div className="ticketPriceSecCls">
              <div className="ticktCatCls">{lobj.category}</div>
              <div className="ticktCountCls">{lobj.value}</div>
              <div className="ticktPriceCls">
                {getPriceData(lobj.value, lobj.price)}
              </div>
            </div>
          )}
        </>
      ))}
      {mealHead && (
        <div className="ticketHeadSecCls mealHeadSecCls">Meal Summary</div>
      )}
      {selectPlanObj?.meals?.map((lobj, lind) => (
        <>
          {lobj.value !== "" && lobj.value != 0 && lobj.value !== undefined && (
            <div className="ticketPriceSecCls">
              <div className="ticktCatCls">{lobj.category}</div>
              <div className="ticktCountCls">{lobj.value}</div>
              <div className="ticktPriceCls">
                {getPriceData(lobj.value, lobj.price)}
              </div>
            </div>
          )}
        </>
      ))}
      {<div className="ticketHeadSecCls mealHeadSecCls">Total Summary</div>}
      <div className="ticketPriceSecCls">
        <div className="ticktCatCls">Ticket Price</div>
        <div className="ticktCountCls"></div>
        <div className="ticktPriceCls">{`₹ ${ticketPrice.toFixed(2)}/-`}</div>
      </div>
      <div className="ticketPriceSecCls">
        <div className="ticktCatCls">Meal Price</div>
        <div className="ticktCountCls"></div>
        <div className="ticktPriceCls">{`₹ ${mealPrice.toFixed(2)}/-`}</div>
      </div>
      <div className="ticketPriceSecCls">
        <div className="ticktCatCls">Sub total</div>
        <div className="ticktCountCls"></div>
        <div className="ticktPriceCls">{`₹ ${(mealPrice+ticketPrice).toFixed(2)}/-`}</div>
      </div>
      <div className="ticketPriceSecCls">
        <div className="ticktCatCls">GST (10%)</div>
        <div className="ticktCountCls"></div>
        <div className="ticktPriceCls">{`₹ ${getGstAmount().toFixed(2)}/-`}</div>
      </div>
      <div className="ticketPriceSecCls">
        <div className="ticktCatCls">Total Amount to be paid</div>
        <div className="ticktCountCls"></div>
        <div className="ticktPriceCls">{`₹ ${(getGstAmount()+mealPrice+ticketPrice).toFixed(2)}/-`}</div>
      </div>
    </div>
  );
};
export default PaymentSummary;
