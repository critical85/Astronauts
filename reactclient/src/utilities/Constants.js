const SERVER_API_URL_DEV = 'https://localhost:7257/api/Astronauts';
const SERVER_API_URL_PROD = 'https://aspreactastronauts.azurewebsites.net/api/Astronauts';

const endpoints = {
    GET_ALL_ASTRONAUTS: 'GetAstronauts',
    INSERT_ASTRONAUT: 'InsertAstronaut',
    DELETE_ASTRONAUT_BY_ID: 'DeleteAstronaut?id='
}

const dev_urls = {
    GET_ALL_ASTRONAUTS: `${SERVER_API_URL_DEV}/${endpoints.GET_ALL_ASTRONAUTS}`,
    INSERT_ASTRONAUT: `${SERVER_API_URL_DEV}/${endpoints.INSERT_ASTRONAUT}`,
    DELETE_ASTRONAUT_BY_ID: `${SERVER_API_URL_DEV}/${endpoints.DELETE_ASTRONAUT_BY_ID}`
};

const prod_urls = {
    GET_ALL_ASTRONAUTS: `${SERVER_API_URL_PROD}/${endpoints.GET_ALL_ASTRONAUTS}`,
    INSERT_ASTRONAUT: `${SERVER_API_URL_PROD}/${endpoints.INSERT_ASTRONAUT}`,
    DELETE_ASTRONAUT_BY_ID: `${SERVER_API_URL_PROD}/${endpoints.DELETE_ASTRONAUT_BY_ID}`
};

const Constants = process.env.NODE_ENV === 'development' ? dev_urls : prod_urls;

export default Constants;
