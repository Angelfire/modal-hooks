import React, { Fragment } from "react";
import { createPortal } from "react-dom";

import "./Modal.css";

const Modal = ({ isShowing, hide, children }) => {
  function handleClickOverlay(e) {
    if (e.target.className === "modal-wrapper") {
      hide();
    }
  }

  return isShowing
    ? createPortal(
        <Fragment>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
            onClick={handleClickOverlay}
          >
            <div className="modal modal-animated modal-animation-fade-in">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="modal-close-button"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={hide}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">{children}</div>
              </div>
            </div>
          </div>
        </Fragment>,
        document.body
      )
    : null;
};

export default Modal;
