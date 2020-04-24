import React from 'react';
import '../../styles/cardWiki/cardWiki.scss'
import { hearthstoneApi } from '../../api';
import { Card } from '../../model';

export function CardWiki() {
    const[cards, setCards] = React.useState<Card[]>([])
    React.useEffect(() => {
        hearthstoneApi.getAllCards(setCards);
    }, [])

    return (
        <>
            <p>Hearthstone card wiki</p>
            <ul>
                {cards.length > 0 ? cards.map(c => <li key={c.dbfId}>{c.name}</li>) : <p>loading...</p>}
            </ul>            
        </>
    );
}
