import React from "react";
import classes from "./Modal.module.css";

const Modal = ({ children, onClose, active, ...props }) => {
  return (
    <div
      className={`${classes.modal} ${active ? classes.active : ""}`}
      onClick={onClose}
    >
      <div onClick={(e) => e.stopPropagation()} {...props}>
        {children}
      </div>
    </div>
  );
};

export default Modal;