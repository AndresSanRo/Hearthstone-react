import { secrets } from '../../secrets'

const baseUrl = `https://${secrets.host}`;
const baseHeaders = {
    "x-rapidapi-host": secrets.host,
    "x-rapidapi-key": secrets.apiKey,
}

const getAllCards = () => {
    const url = `${baseUrl}/cards`;
    const headers = {
        method: 'GET',    
        ...baseHeaders,    
    }
    fetch(url, headers)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error(error);
    })
}

export const hearthstoneApi = {
    getAllCards
};
