import React from "react";

import "./Modal.scss";

function Modal({ isVisible, onClose, content }) {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-close" onClick={onClose}>
        <i className="fa fa-times"></i>
      </div>
      <div className="modal-content">
        {content}
      </div>
    </div>
  );
}

export default Modal;
