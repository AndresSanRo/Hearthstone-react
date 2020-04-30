import { secrets } from '../../secrets'
import { IHsCard, locales } from '../../model';

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
        let cards: IHsCard[] = [];
        Object.keys(response).forEach(set => {            
            cards = [...cards, ...response[set]]
        })
        callback(cards);
    })
    .catch(error => {
        console.error(error);
    })
}

const getCardByType = (type: string, callback: Function, locale: string = locales.enUS): void => {
    const url = `${baseUrl}/cards/types/${type}?locale=${locale}`;
    const fetchOtions = {
        method: 'GET',
        headers: {
            ...baseHeaders,
        }        
    }
    fetch(url, fetchOtions)
    .then(response => response.json())
    .then((response) => {        
        callback(response);
    })
    .catch(error => {
        console.error(error);
    })
}

export const hearthstoneApi = {
    getAllCards,
    getCardByType
};
