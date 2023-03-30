import React from "react";
import './Footer.css';

const Footer = () => {
    return(
        <>
        <div className="footrPrntCls">
            <div className="footrFirstSec">
                <div className="footrHeadCls">
                    Watery Theme Park
                </div>
                <div className="addrClsFtr">
                    A1 402, Ahad Excllensia, Chiikanayakahalli, Off surjapur road, Bangalore-560035
                </div>
            </div>
            <div className="footerSendSec">
                <div className="footrHeadCls">
                    Information
                </div>
                <div>
                    +91-9991122657
                </div>
                <div>
                    aquacube4012@gmail.com
                </div>
            </div>
            <div className="footrThirdSec">
                <div className="footrHeadCls">
                    Quick Links
                </div>
                <div>
                    Cancellation Booking
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer