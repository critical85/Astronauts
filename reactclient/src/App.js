import React, { useEffect, useState } from "react";
import { format } from 'date-fns'
import Constants from "./utilities/Constants";
import CreateAstronautForm from "./components/CreateAstronautFormModal";
import DeleteAstronautConfirm from "./components/DeleteAstronautConfirmModal";

export default function App() {

  useEffect(() => {
    let ignore = false;
    if (!ignore)  getAstronauts()
    return () => { ignore = true; }
    },[]);

  const [astronauts, setAstronauts] = useState([]);

  return (
    <div className="container">
      <div className="row min-vh-100">
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <h1>
            Astronauti
          </h1>
          <div className="mt-4">
            Drazí pozemšťané, výtejte v projektu jednosměrné cesty na Pluto. 
          </div>
          <div className="mt-4">
            <CreateAstronautForm createAstronaut={createAstronaut} />
          </div>
          {renderAstronautsTable()}
        </div>
      </div>
    </div>
  );

  function renderAstronautsTable(){
    return (
      <div className="table-responsive mt-5">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Křestní jméno</th>
              <th scope="col">Příjmení</th>
              <th scope="col">Datum narození</th>
              <th scope="col">Superschopnost</th>
            </tr>
          </thead>
          <tbody>
            {astronauts.map((astronaut)=>(
              <tr key={astronaut.astronautId}>
                <td>{astronaut.firstName}</td>
                <td>{astronaut.lastName}</td>
                <td>{format(new Date(astronaut.birthDate), 'dd.M.yyyy')}</td>
                <td>{astronaut.superPower} 
                  <span className="float-end">
                    <DeleteAstronautConfirm deleteAstronaut={deleteAstronaut} astronaut={astronaut}/>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  function getAstronauts(){
    fetch(Constants.GET_ALL_ASTRONAUTS)
    .then(response => response.json())
    .then(astronautsFromServer => {
      setAstronauts(astronautsFromServer);
    })
    .catch((error) =>{
      console.log(error);
      alert(error);
    })
  }

  function createAstronaut(astronautToCreate){
    if (astronautToCreate === null){
      return;
    }
    const url = Constants.INSERT_ASTRONAUT;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(astronautToCreate)
    })
    .then(response => response.json())
    .then(responseFromServer => {console.log(responseFromServer)})
    .then(() => getAstronauts())
    .catch((error) => {console.log(error)});
  }

  function deleteAstronaut(id){
    fetch(Constants.DELETE_ASTRONAUT_BY_ID + id, { method: 'POST' })
    .then(() => getAstronauts())
    .catch((error) => { console.log(error) });
  }

}

