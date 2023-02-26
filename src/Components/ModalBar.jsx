import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Stepper from "./Stepper";

function ModalBar({ show, setShow }) {
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="fs-5">Rule Builder</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Stepper />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalBar;
