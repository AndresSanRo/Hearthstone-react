import React from 'react';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox'
import '../../styles/cardWiki/cardWiki.scss'
import * as _ from 'lodash';
import { hearthstoneApi } from '../../api';
import { Card, locales, CardTypes } from '../../model';
import { TypeSelector } from './typeSelector';

export function CardWiki(): JSX.Element {
    const[cards, setCards] = React.useState<Card[]>([]);
    const[filteredCards, setFilteredCards] = React.useState<Card[]>([]);
    const[type, setType] = React.useState<string>(CardTypes.Hero);
    const[loading, setLoading] = React.useState<boolean>(false);

    React.useEffect(() => {
        hearthstoneApi.getCardByType(CardTypes.Hero, setCards, locales.esES);
    }, [])

    React.useEffect(() => {
        setFilteredCards(cards);
        setLoading(false)
    }, [cards])

    React.useEffect(() => {
        setLoading(true)
        hearthstoneApi.getCardByType(type, setCards, locales.esES);
    }, [type])

    const searchCards = (event?: React.ChangeEvent<HTMLInputElement>, value?: string) => {
        if (!_.isEmpty(value)) {
            const searchRegExp = new RegExp(`${value}`, 'g')
            setFilteredCards(cards.filter(card => searchRegExp.test(card.name)));
        } else {
            setFilteredCards(cards);
        }
    }
    if (loading) {
        return (
            <>
                <span>loading...</span>
            </>
        );
    }
    return (
        <>         
            <div className="ms-Grid">                
                <TypeSelector setType={setType} />            
                <div className="ms-Grid-row">
                    <SearchBox 
                        placeholder="Search" 
                        underlined={true} 
                        onChange={searchCards} 
                        className={ "searchBox" }
                    />
                </div>                
                <ul>
                    {filteredCards.length > 0 ? filteredCards.map(c => <li key={c.dbfId}>{c.name}</li>) : <p>No results</p>}
                </ul>            
            </div>            
        </>
    );
}
