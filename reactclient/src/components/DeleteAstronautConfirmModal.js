import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./DeleteAstronautConfirmModal.css";
import { deleteAstronaut } from "./../api/AstronautsApi";

function DeleteAstronautConfirm(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await deleteAstronaut(props.astronaut.astronautId);
      props.loadAstronauts();
      setShow(false);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <img
        className="delete-icon"
        src={require("./../icons/removeIcon.png")}
        onClick={handleShow}
      />

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Opravdu si přejete astronauta {props.astronaut.firstName}{" "}
            {props.astronaut.lastName} smazat?
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Smazat
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Zavřít
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteAstronautConfirm;
