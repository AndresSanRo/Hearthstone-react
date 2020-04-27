import React from 'react';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox'
import '../../styles/cardWiki/cardWiki.scss'
import * as _ from 'lodash';
import { hearthstoneApi } from '../../api';
import { Card, locales, Types } from '../../model';

export function CardWiki(): JSX.Element {
    const[cards, setCards] = React.useState<Card[]>([]);
    const[filteredCards, setFilteredCards] = React.useState<Card[]>([]);

    React.useEffect(() => {
        hearthstoneApi.getCardByType(Types.Hero, setCards, locales.esES);
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
            <SearchBox 
                placeholder="Search" 
                underlined={true} 
                onChange={searchCards} 
                className={ "searchBox" }
            />
            <ul>
                {filteredCards.length > 0 ? filteredCards.map(c => <li key={c.dbfId}>{c.name}</li>) : <p>No results</p>}
            </ul>            
        </>
    );
}
