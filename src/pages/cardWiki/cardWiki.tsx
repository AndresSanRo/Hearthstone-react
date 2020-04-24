import React from 'react';
import '../../styles/cardWiki/cardWiki.scss'
import * as _ from 'lodash';
import { hearthstoneApi } from '../../api';
import { Card, locales } from '../../model';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox'

export function CardWiki() {
    const[cards, setCards] = React.useState<Card[]>([])
    const[filteredCards, setFilteredCards] = React.useState<Card[]>([])

    React.useEffect(() => {
        hearthstoneApi.getAllCards(setCards, locales.esES);
    }, [])

    React.useEffect(() => {
        setFilteredCards(cards);
    }, [cards])

    const searchCards = (event?: React.ChangeEvent<HTMLInputElement>, value?: string) => {
        if (!_.isEmpty(value)) {
            const searchRegExp = new RegExp(`${value}`, 'g')
            setFilteredCards(cards.filter(card => searchRegExp.test(card.name)));
        } else {
            setFilteredCards(cards);
        }
    }
    return (
        <>
            <p>Hearthstone card wiki</p>
            <SearchBox placeholder="Search" underlined={true} onChange={searchCards} />
            <ul>
                {filteredCards.length > 0 ? filteredCards.map(c => <li key={c.dbfId}>{c.name}</li>) : <p>loading...</p>}
            </ul>            
        </>
    );
}
