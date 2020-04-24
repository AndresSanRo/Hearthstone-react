import { secrets } from '../../secrets'
import { Card, locales } from '../../model';

const baseUrl = `https://${secrets.host}`;
const baseHeaders = {
    "x-rapidapi-host": secrets.host,
    "x-rapidapi-key": secrets.apiKey,
}

const getAllCards = (callback: Function, locale: string = locales.enUS): void => {
    const url = `${baseUrl}/cards?locale=${locale}`;
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
