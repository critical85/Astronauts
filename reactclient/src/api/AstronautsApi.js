import Constants from "./../utilities/Constants";

async function getAstronauts() {
  const url = Constants.GET_ALL_ASTRONAUTS;
  console.log(url);
  const response = await fetch(url, {
    method: "GET",
  });
  const astronauts = await response.json();
  return astronauts;
}

async function createAstronaut(astronautToCreate) {
  const url = Constants.INSERT_ASTRONAUT;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(astronautToCreate),
  });
  const insertedAstronaut = await response.json();
  return insertedAstronaut;
}

async function deleteAstronaut(id) {
  const url = Constants.DELETE_ASTRONAUT_BY_ID + id;
  const response = await fetch(url, {
    method: "DELETE",
  });
  return response;
}

export { getAstronauts, createAstronaut, deleteAstronaut };
