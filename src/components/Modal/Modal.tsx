import React from "react";
import type ModalProps from "./Modal";
const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <div  style={{ background: "rgba(0,0,0,0.4)", padding: 40 }}>
        <button onClick={onClose}>close</button>
         <div onClick={(e) => e.stopPropagation()}
           style={{ background: "white", padding: 20 }}>
         {children}
          </div>
    </div>
  );
};

export default Modal;
