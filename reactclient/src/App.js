import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import CreateAstronautForm from "./components/CreateAstronautFormModal";
import DeleteAstronautConfirm from "./components/DeleteAstronautConfirmModal";
import { getAstronauts } from "./api/AstronautsApi";

export default function App() {
  async function loadAstronauts() {
    const astronauts = await getAstronauts();
    setAstronauts(astronauts);
  }

  useEffect(() => {
    loadAstronauts();
  }, []);

  const [astronauts, setAstronauts] = useState([]);

  return (
    <div className="container">
      <div className="row min-vh-100">
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <h1>Astronauti</h1>
          <div className="mt-4">
            Drazí pozemšťané, vítejte v projektu jednosměrné cesty na Pluto.
          </div>
          <div className="mt-4">
            <CreateAstronautForm loadAstronauts={loadAstronauts} />
          </div>
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
                {astronauts.map((astronaut) => (
                  <tr key={astronaut.astronautId}>
                    <td>{astronaut.firstName}</td>
                    <td>{astronaut.lastName}</td>
                    <td>
                      {format(new Date(astronaut.birthDate), "dd.M.yyyy")}
                    </td>
                    <td>
                      {astronaut.superPower}
                      <span className="float-end">
                        <DeleteAstronautConfirm
                          loadAstronauts={loadAstronauts}
                          astronaut={astronaut}
                        />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
