import React, { useState, useEffect } from 'react'
import './Toast.scss';
import ee from 'event-emitter'

const emitter=new ee();

export const notify = {
    success:(msg)=>emitter.emit('notification', msg, 'success'),
    warning:(msg)=>emitter.emit('notification', msg, 'warning'),
    info:(msg)=>emitter.emit('notification', msg, 'info'),
    danger:(msg)=>emitter.emit('notification', msg, 'danger')
}

export default function Toast() {

    emitter.on("notification", (msg, status)=>{
        HandleClick(msg, status)
    })

    const[top, setTop]=useState("-70")
    const[toast, setToast]=useState({
        msg:"",
        color:"",
        background:""
    })

    useEffect(() => {
      if(top == "70")
      {
         setTimeout(() => {
            setTop("-100")
          }, 3000);
      }
    }, [top])

    const ErrorColor=(status, msg)=>{
        switch (status) {
            case 'success':
                  setToast({...toast, color:'#509864', background:'#E9FFEE', msg})
                break;
            case 'info':
                   setToast({...toast, color:'#157DEB', background:'#D3E9FF', msg})
                break;
            case 'warning':
                   setToast({...toast, color:'#D0CB42', background:'#FFFCF1', msg})
                break;
            case 'danger':
                    setToast({...toast, color:'#FE6E6E', background:'#FFEFF2', msg})
                 break;
            default:
                  setToast({...toast, color:'#157DEB', background:'#D3E9FF', msg})
                break;
        }
    }

   const HandleClick=(msg, status) =>{
    ErrorColor(status, msg)
    setTop("70")
   }

    return (
        <>
        <div className="toast-main-div" style={{backgroundColor:toast.background, color:toast.color, top:`${top}px`}}>
            <div className="toast-msg-cls">{toast.msg}</div>
        </div>
        </>
    )
}
