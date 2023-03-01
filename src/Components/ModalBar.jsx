import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Stepper from "./Stepper";
import infoSVG from "../assets/infoSVG.svg";

function ModalBar({ show, setShow }) {
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="fs-5">
            Rule Builder
            <img className="ms-2" src={infoSVG} alt="" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Stepper />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalBar;
