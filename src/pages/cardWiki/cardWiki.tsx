import React from 'react';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox'
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';
import '../../styles/cardWiki/cardWiki.scss'
import * as _ from 'lodash';
import { hearthstoneApi } from '../../api';
import { IHsCard, locales, CardTypes } from '../../model';
import { TypeSelector } from './typeSelector';
import { HsCard } from './hsCard';

export function CardWiki(): JSX.Element {
    const[cards, setCards] = React.useState<IHsCard[]>([]);
    const[filteredCards, setFilteredCards] = React.useState<IHsCard[]>([]);
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
    
    return (
        <>                    
            <TypeSelector setType={setType} />            
            <SearchBox 
                placeholder="Search" 
                underlined={true} 
                onChange={searchCards} 
                className={ "searchBox" }
            />            
            <div className="ms-Grid cardGrid" dir="ltr">
                {
                !loading && filteredCards.length > 0 ? 
                    (
                        filteredCards.map(c => {
                            return (
                                <div className="ms-Grid-col ms-sm3 ms-md3 ms-lg3 cardGridCol">
                                    <HsCard hsCard={c}></HsCard>
                                </div>
                            );
                        }) 
                    )
                    : 
                    (
                        <Spinner 
                            className="spinner" 
                            size={SpinnerSize.large} 
                        />
                    )
                }
            </div>                               
        </>
    );
}
