import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DeleteAstronautConfirm(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    props.deleteAstronaut(props.astronaut.astronautId);
    setShow(false);
  };

  return (
    <>
      <img style={{cursor:'pointer'}} src={require('./../icons/removeIcon.png')} onClick={handleShow} />

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Opravdu si přejete astronauta {props.astronaut.firstName} {props.astronaut.lastName} smazat?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}> Smazat </Button>
          <Button variant="secondary" onClick={handleClose}> Zavřít </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteAstronautConfirm;
