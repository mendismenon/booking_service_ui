import React from 'react'
import './Loader.scss'

export default function Loader(props) {
    return (
   <div className={`${props.FullScreen && "lader-parent"}`}>
        <div className="loader-container">
            <div className="imgParentDivCls">
                <img className="loaderGlobalCenter" height="90px" src="https://res.cloudinary.com/ddah6xu0g/image/upload/v1654067588/Booking_System/loading-waiting_glorpf.gif" alt="loading" />
            </div>
        </div>
   </div>
    )
}
