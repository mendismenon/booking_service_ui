import { useState } from "react";
import "./FloatingInput.css";

const FloatingInput = (props) => {
  const [isActive, setIsActive] = useState(false);
  const handleTextChange = (text) => {
    if (text !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
    props.handleChange(text);
  };
  return (
    <>
    <div>
    <div className={`float-label ${props.className} `}>
      <input
        type={props.type}
        maxLength={props.maxLength ?? 15}
        onChange={(e) => handleTextChange(e.target.value)}
        value={props.value}
      />

      <label htmlFor={props.htmlFor} className={ isActive ? "Active" : ""}>{props.label}</label>
    </div>
      {
        props?.invalidObj?.invalid && (
          <div className="errorMsgCls">
          {
            props?.invalidObj?.msg
          }
          </div>
        )
      }
    </div>
    </>
  );
};
export default FloatingInput;
