import React from "react";
import classes from "./Modal.module.css";

const Modal = ({ children, onClose, ...props }) => {
  return (
    <div className={classes.modal} onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} {...props}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
