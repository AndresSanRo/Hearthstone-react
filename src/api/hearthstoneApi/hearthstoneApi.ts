import { secrets } from '../../secrets'

const baseUrl = `https://${secrets.host}`;
const baseHeaders = {
    "x-rapidapi-host": secrets.host,
    "x-rapidapi-key": secrets.apiKey,
}

const getAllCards = () => {
    const url = `${baseUrl}/cards`;
    const fetchOtions = {
        method: 'GET',
        headers: {
            ...baseHeaders,
        }        
    }
    fetch(url, fetchOtions)
    .then(response => response.json())
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
