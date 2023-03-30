import React from 'react'
import './NotFound.scss';
import {Helmet} from "react-helmet";
import { useNavigate } from 'react-router-dom';
import { urlPaths } from '../../routes/urls';

 function NotFound(props) {
     const navigate = useNavigate();
    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="prerender-status-code" content="404"></meta>
            <title>404</title>
        </Helmet>
        <div className="oops-msg-div">
            <div className="not-main-div">
                <div><img src="https://res.cloudinary.com/ddah6xu0g/image/upload/v1654174530/Booking_System/notFound_hqr9qu.jpg" alt="notfound" className="lazyload" height="35px" /></div>
                <div className="oops-txt-cls">Oops,</div>
                <div className="oops-txt-cls">Sorry page does not found</div>
                <div className="page-desc">The Page you’re looking for isn’t found .we suggest <br/>you to get back to home</div>
                <div>
                    <button className="go-home-btn" onClick={()=>{
                        navigate(urlPaths.HOME);
                    }}>Go Home</button></div>
            </div>
        </div>
        </>
    )
}
export default NotFound
