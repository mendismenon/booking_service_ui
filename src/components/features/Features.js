import React from "react";
import Card from "../card/Card";
import "./Features.css";
import { featuresData } from "./FeaturesData";

const Features = (props) => {
  return (
    <>
      <div className="featuresPentCls">
        <div className="firstSecFeatrCls">
          <div className="fetauresMainHeadCls">
            Comprehensive features with good packages for couples and groups
          </div>
        </div>
        <div className="secndSecFeatrCls">
            <div className="fertrCardPrntCls">
                {
                    featuresData.map((lobj,lind)=>(
                        <>
                        <Card heading={lobj.heading} content={lobj.content} />
                        </>
                    ))
                }
            </div>
        </div>
      </div>
    </>
  );
};
export default Features;
