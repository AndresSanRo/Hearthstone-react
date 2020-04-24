import React from 'react';
import { hearthstoneApi } from '../../api';
import { Card } from '../../model';

export function CardWiki() {
    const[cards, setCards] = React.useState<Card[]>([])
    React.useEffect(() => {
        hearthstoneApi.getAllCards(setCards);
    }, [])

    return (
        <>
            <h1>Hearthstone card wiki</h1>
            <ul>
                {cards.length > 0 ? cards.map(c => <li>{c.name}</li>) : <p>loading...</p>}
            </ul>            
        </>
    );
}
