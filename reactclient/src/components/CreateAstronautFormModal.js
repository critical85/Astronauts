import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./CreateAstronautFormModal.css";
import { useForm } from "react-hook-form";
import { createAstronaut } from "./../api/AstronautsApi";

function CreateAstronautForm(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(formData) {
    const astronautToCreate = {
      astronautId: 0,
      firstName: formData.firstName,
      lastName: formData.lastName,
      birthDate: formData.birthDate,
      superPower: formData.superPower,
    };

    try {
      await createAstronaut(astronautToCreate);
      setShow(false);
      props.loadAstronauts();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Zadejte nového astronauta
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Zadejte nového astronauta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <form
              className="w-100 px-5"
              id="create-astronaut-form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mt-4 field">
                <label className="h4 form-label">Křestní jméno</label>
                <input
                  name="firstName"
                  type="text"
                  className="form-control"
                  placeholder="Křestní jméno"
                  {...register("firstName", {
                    required: "Křestní jméno je povinné",
                  })}
                />
                <p className="validation-error">{errors.firstName?.message}</p>
              </div>
              <div className="mt-4 field">
                <label className="h4 form-label">Příjmení</label>
                <input
                  name="lastName"
                  type="text"
                  className="form-control"
                  placeholder="Příjmení"
                  {...register("lastName", {
                    required: "Příjmení je povinné",
                  })}
                />
                <p className="validation-error">{errors.lastName?.message}</p>
              </div>
              <div className="mt-4 field">
                <label className="h4 form-label">Datum narození</label>
                <input
                  name="birthDate"
                  type="date"
                  className="form-control"
                  {...register("birthDate", {
                    required: "Datum narození povinné",
                  })}
                />
                <p className="validation-error">{errors.birthDate?.message}</p>
              </div>
              <div className="mt-4 field">
                <label className="h4 form-label">Superschopnost</label>
                <input
                  name="superPower"
                  type="text"
                  className="form-control"
                  placeholder="Superschopnost"
                  {...register("superPower", {
                    required: "Superschpnost je povinná",
                  })}
                />
                <p className="validation-error">{errors.superPower?.message}</p>
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" form="create-astronaut-form" type="submit">
            Vytvorit
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Zavřít
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateAstronautForm;
