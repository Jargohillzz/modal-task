import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ModalBar from "./ModalBar";

const Background = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (
    <div className="background">
      <div className="bg-container text-white d-flex flex-column justify-content-between">
        <div className="d-flex justify-content-between align-items-center py-3 mb-5">
          <div className="logo">
            <h2>keyring</h2>
          </div>
          <div className="wallet d-flex p-2 text-dark">
            <p className="fs-6">0x345...rd3</p>
          </div>
        </div>
        <div className="create-rule mt-3 d-md-flex justify-content-md-between align-items-md-center">
          <h4 className="create-text mb-4">
            Underlying page from which the user clicks "Create Rule", which
            opens up the modal/wizard.
          </h4>
          <Button variant="success" onClick={handleShow}>
            Create Rule
          </Button>
        </div>
      </div>
      <ModalBar show={show} setShow={setShow} />
    </div>
  );
};

export default Background;
