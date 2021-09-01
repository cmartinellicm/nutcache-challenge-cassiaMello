import React, { useState } from "react";
import Form from "./Form";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const modalClass = showModal ? "modal show-modal" : "modal hide-modal";

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <button id="myBtn" onClick={() => handleShowModal()}>
        Add Employee
      </button>

      <div id="myModal" className={modalClass}>
        <div className="modal-content">
          <span className="close" onClick={() => handleClose()}>
            &times;
          </span>
          <Form />
        </div>
      </div>
    </>
  );
};

export default Modal;
