import { secrets } from '../../secrets'
import { Card } from '../../model';

const baseUrl = `https://${secrets.host}`;
const baseHeaders = {
    "x-rapidapi-host": secrets.host,
    "x-rapidapi-key": secrets.apiKey,
}

const getAllCards = (callback: Function): void => {
    const url = `${baseUrl}/cards`;
    const fetchOtions = {
        method: 'GET',
        headers: {
            ...baseHeaders,
        }        
    }
    fetch(url, fetchOtions)
    .then(response => response.json())
    .then((response) => {
        let cards: Card[] = [];
        Object.keys(response).forEach(set => {            
            cards = [...cards, ...response[set]]
        })
        cards.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
        callback(cards);
    })
    .catch(error => {
        console.error(error);
    })
}

export const hearthstoneApi = {
    getAllCards
};
