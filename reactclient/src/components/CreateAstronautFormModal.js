import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CreateAstronautForm(props) {

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const initialFormData = Object.freeze({
        firstName: "",
        lastName: "",
        birthDate: new Date(),
        superPower: ""
    })
    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value 
        });        
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const astronautToCreate = {
            astronautId: 0,
            firstName: formData.firstName,
            lastName: formData.lastName,
            birthDate: formData.birthDate,
            superPower: formData.superPower
        }

        props.createAstronaut(astronautToCreate);
        setShow(false);
    };

    return(
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
                <form className="w-100 px-5">

                    <div className="mt-4">
                        <label className="h4 form-label">Křestní jméno</label>
                        <input value={formData.firstName} name="firstName" type="text" className="form-control" onChange={handleChange} />
                    </div>
                    <div className="mt-4">
                        <label className="h4 form-label">Příjmení</label>
                        <input value={formData.lastName} name="lastName" type="text" className="form-control" onChange={handleChange} />
                    </div>
                    <div className="mt-4">
                        <label className="h4 form-label">Datum narození</label>
                        <input value={formData.birthDate} name="birthDate" type="date" className="form-control" onChange={handleChange} />
                    </div>
                    <div className="mt-4">
                        <label className="h4 form-label">Superschopnost</label>
                        <input value={formData.superPower} name="superPower" type="text" className="form-control" onChange={handleChange} />
                    </div>
                </form>
            </div>
        </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleSubmit}> Vytvorit </Button>
                <Button variant="secondary" onClick={handleClose}> Zavřít </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default CreateAstronautForm;
