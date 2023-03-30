import React, { useEffect, useRef, useState } from "react";
import Header from "../../inputControls/header/Header";
import "./Booking.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { subDays } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { planFetch, PLAN_SELECT } from "../../redux/actions/StateAction";
import { fetchPlanApiActn } from "../../redux/actions/BookingPlanActn";
import Loader from "../../components/loader/Loader";
import Card from "../../components/ticketCategotycard/Card";
import { checkDigits } from "../../utils/validator";
import {
  MAXIMUM_BOOKING_COUNT,
  MEAL,
  MINIMUM_BOOKING_COUNT,
  PERSONS,
} from "../../utils/Constants";
import MealCard from "../../components/mealCategorycard/MealCard";
import { heightWidthCalc, SideScroll } from "../../utils/Utils";
import PaymentSummary from "../../components/paymentSummary/PaymentSummary";

const Booking = () => {
  const ref = useRef(null);
  const lastIndRef = useRef(null);
  const [nextIcon, setNextIcon] = useState(
    "https://res.cloudinary.com/ddah6xu0g/image/upload/v1654774258/Booking_System/rghtArrwEnb_enable_bxhykp.svg"
  );
  const selectPlanObj = useSelector(
    (state) => state?.StateReducer?.planSelected
  );
  const fetchPlansObj = useSelector((state) => state?.BookPlanReducer?.data);
  const loading = useSelector((state) => state?.BookPlanReducer?.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectPlanObj?.date) {
      dispatch(fetchPlanApiActn(selectPlanObj?.date));
    }
  }, [selectPlanObj?.date]);

  useEffect(() => {
    if (fetchPlansObj?.tickets && fetchPlansObj?.tickets?.length) {
      dispatch(
        planFetch({
          ...selectPlanObj,
          tickets: fetchPlansObj?.tickets,
          meals: fetchPlansObj?.meals,
        })
      );
    }
  }, [fetchPlansObj]);

  const hanldeChangeFn = (pval, pid, pindex, pflag) => {
    let ltickets = []
    if(pflag === PERSONS){
      ltickets = selectPlanObj?.tickets;
    }else{
      ltickets = selectPlanObj?.meals;
    }
    pval = pval?.trim();
    if (checkDigits(pval) && pval?.trim() !== "") {
      pval = parseInt(pval);
      ltickets[pindex].invalidObj = {};
      if (pval > MAXIMUM_BOOKING_COUNT) {
        ltickets[pindex].value = MAXIMUM_BOOKING_COUNT;
        ltickets[pindex].invalidObj = {};
        ltickets[pindex].invalidObj.invalid = true;
        ltickets[
          pindex
        ].invalidObj.msg = `The maximum of ${MAXIMUM_BOOKING_COUNT} persons can be booked.`;
      } else {
        ltickets[pindex].value = pval;
      }
    } else if (pval === "") {
      ltickets[pindex].invalidObj = {};
      ltickets[pindex].value = "0";
    } else {
      ltickets[pindex].invalidObj = {};
      ltickets[pindex].invalidObj.invalid = true;
      ltickets[
        pindex
      ].invalidObj.msg = `The count should be between ${MINIMUM_BOOKING_COUNT} and ${MAXIMUM_BOOKING_COUNT}.`;
    }
    
    if(pflag === PERSONS){
      dispatch(
        planFetch({
          ...selectPlanObj,
          tickets: [...ltickets],
        })
      );
    }else{
      dispatch(
        planFetch({
          ...selectPlanObj,
          meals: [...ltickets],
        })
      );
    }
  };

  const handleCollapseFn = (pindex, pclassName) => {
    debugger;
    const ltickets = selectPlanObj?.tickets;
    if (pclassName === "expand") {
      ltickets[pindex].className = "collapse";
    } else {
      ltickets[pindex].className = "expand";
    }
    if (
      selectPlanObj?.previousExpand !== undefined &&
      selectPlanObj?.previousExpand !== pindex &&
      selectPlanObj?.previousExpand !== -1
    ) {
      ltickets[selectPlanObj?.previousExpand].className = "collapse";
    }
    dispatch(
      planFetch({
        ...selectPlanObj,
        tickets: [...ltickets],
        previousExpand: pindex,
      })
    );
  };
  const HandleBack = () => {
    SideScroll(ref.current, "left", 1, 300, 3);
  };

  const HandleNext = () => {
    SideScroll(ref.current, "right", 1, 300, 3);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrollFn, true);

    return () => {
      window.removeEventListener("scroll", handleScrollFn);
    };
  }, []);

  const handleScrollFn = (e) => {
    try {
      let lastDivWidth = ref.current.querySelector(".lastItem").clientWidth * 3;

      let boundingObj = lastIndRef.current
        .querySelector(".imgRightArwCls")
        .getBoundingClientRect();
        if(e.target.scrollLeft === undefined){
          return;
        }
      else if (
        e.target.scrollLeft + e.target.offsetWidth >=
          boundingObj.left + lastDivWidth        
      ) {
        setNextIcon(
          "https://res.cloudinary.com/ddah6xu0g/image/upload/v1654774258/Booking_System/rightArrw_disable_ucfo0l.svg"
        );
      } else {
        setNextIcon(
          "https://res.cloudinary.com/ddah6xu0g/image/upload/v1654774258/Booking_System/rghtArrwEnb_enable_bxhykp.svg"
        );
      }
    } catch (e) {
      setNextIcon(
        "https://res.cloudinary.com/ddah6xu0g/image/upload/v1654774258/Booking_System/rghtArrwEnb_enable_bxhykp.svg"
      );
    }
  };

  return (
    <>
      {loading && <Loader FullScreen={true} />}
      <Header />
      <div className="bookingHdrCls">
        <div className="bookkingDtlsCls">
          <div className="bookingCardSkltn">
            <div className="bookDateSelectnCls">
              Pick a date which you would like to have fun
            </div>
            <div className="datePickCmbCls">
              <img
                className="imgDtaeBkCls"
                src="https://res.cloudinary.com/ddah6xu0g/image/upload/v1654198161/Booking_System/slide1_psewtv.png"
              />
              <DatePicker
                selected={
                  typeof selectPlanObj.date === "string" &&
                  selectPlanObj.date != ""
                    ? new Date(selectPlanObj.date)
                    : selectPlanObj?.date
                }
                dateFormat="dd-MM-yyyy"
                onChange={(date) =>
                  dispatch(
                    planFetch({
                      ...selectPlanObj,
                      date: date,
                    })
                  )
                }
                minDate={subDays(new Date(), -1)}
                placeholderText="Select date"
              />
            </div>
          </div>
          {selectPlanObj?.tickets && selectPlanObj?.tickets?.length > 0 && (
            <>
              <div className="bookingCardSkltn margnTp3rem">
                <div className="bookDateSelectnCls">
                  Select ticket categories
                </div>
                <div>
                  {selectPlanObj?.tickets.map((lobj, lind) => (
                    <div key={`cardKey${lind}`} className="prntCardTcktDivCls">
                      <div
                        onClick={() => handleCollapseFn(lind, lobj.className)}
                        className="colapseExpndDivCls"
                      >
                        <div>
                          <p className="categoryColpseExpnd">{lobj.category}</p>
                        </div>
                        <div>
                          <p className="priceColpseExpnd">{`₹  ${lobj.price}/-`}</p>
                        </div>
                        <div>
                          <img
                            className={`colpseExpndImg ${lobj.className}img`}
                            src="https://res.cloudinary.com/ddah6xu0g/image/upload/v1654694729/Booking_System/expandIcn_pqjkho.png"
                          />
                        </div>
                      </div>
                      <div className={lobj.className ?? "collapse"}>
                        <Card
                          category={lobj.category}
                          price={lobj.price}
                          id={lobj.id}
                          img={lobj.img}
                          desc={lobj.desc}
                          value={lobj?.value ?? 0}
                          handleChange={(pval) =>
                            hanldeChangeFn(pval, lobj?.id, lind, PERSONS)
                          }
                          index={lind}
                          invalidObj={lobj.invalidObj}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
          {selectPlanObj?.meals && selectPlanObj?.meals?.length > 0 && (
            <>
              <div className="bookingCardSkltn margnTp3rem">
                <div className="selectMealSectn">
                  <div className="bookDateSelectnCls">Select meals</div>
                  <div>
                    <span className="pointerclass" onClick={() => HandleBack()}>
                      <img
                        style={{ height: "32px" }}
                        src="https://res.cloudinary.com/ddah6xu0g/image/upload/v1654772391/Booking_System/letfArrw_enable_zyqcjh.svg"
                        alt="backbtn"
                      />
                    </span>
                    <span
                      className="pointerclass"
                      onClick={() => HandleNext()}
                      ref={lastIndRef}
                    >
                      <img
                        className="imgRightArwCls"
                        style={{ height: "32px" }}
                        src={nextIcon}
                        alt="nextbtn"
                      />
                    </span>
                  </div>
                </div>
                <div className="mainSliderOrg prntCardTcktDivCls" id="ScrollOrg" ref={ref}>
                  {selectPlanObj?.meals?.map((lobj, lind) => (
                    <>
                      <MealCard
                        category={lobj.category}
                        price={lobj.price}
                        img={lobj.img}
                        className={`slideCardSectnCls cardPrntTicketCls ${
                          selectPlanObj?.meals.length - 1 === lind
                            ? "lastItem"
                            : null
                        }`}
                        handleChange={(pval) =>
                          hanldeChangeFn(pval, lobj?.id, lind, MEAL)
                        }
                        value={lobj?.value ?? 0}
                      />
                    </>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
        <div className="paymentSummaryCls">
          <PaymentSummary />
        </div>
      </div>
    </>
  );
};
export default Booking;
