import React from "react";
import './Card.css'
const Card = (props) => {
  return (
    <>
      <div className="cardPrntCls">
        <h3 className="cardHeadCls">{props.heading}</h3>
        <div className="cardContCls">{props.content}</div>
      </div>
    </>
  );
};
export default Card;
