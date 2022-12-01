const SERVER_API_URL_DEV = "https://localhost:7257/api";
const SERVER_API_URL_PROD = "https://aspreactastronauts.azurewebsites.net/api";

const endpoints = {
  BASE_ASTRONAUTS: "Astronauts",
};

const dev_urls = {
  GET_ALL_ASTRONAUTS: `${SERVER_API_URL_DEV}/${endpoints.BASE_ASTRONAUTS}`,
  INSERT_ASTRONAUT: `${SERVER_API_URL_DEV}/${endpoints.BASE_ASTRONAUTS}`,
  DELETE_ASTRONAUT_BY_ID: `${SERVER_API_URL_DEV}/${endpoints.BASE_ASTRONAUTS}/`,
};

const prod_urls = {
  GET_ALL_ASTRONAUTS: `${SERVER_API_URL_PROD}/${endpoints.BASE_ASTRONAUTS}`,
  INSERT_ASTRONAUT: `${SERVER_API_URL_PROD}/${endpoints.BASE_ASTRONAUTS}`,
  DELETE_ASTRONAUT_BY_ID: `${SERVER_API_URL_PROD}/${endpoints.BASE_ASTRONAUTS}/`,
};

const Constants = process.env.NODE_ENV === "development" ? dev_urls : prod_urls;

export default Constants;
