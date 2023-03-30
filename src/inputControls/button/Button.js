import React from 'react'
import './Button.scss';

export default function Button(props) {
    return (
        <div className={props.parentClassName ?? ""}>
            <button 
                className={`sendbtn ${props.className} btnDisabledStates`}
                style={{cursor:props.disabled==='disabled'?'not-allowed':'pointer'}}
                disabled={props.disabled}
                onClick={props.onClick}>{props.value}</button>
        </div>
    )
}
