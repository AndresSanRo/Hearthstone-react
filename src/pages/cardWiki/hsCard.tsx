import React from 'react';
import '../../styles/cardWiki/hsCard.scss'
import { Image } from 'office-ui-fabric-react/lib/Image'
import { IHsCard } from '../../model';


interface IHsCardProps {
    hsCard: IHsCard;
}

export function HsCard(props: IHsCardProps): JSX.Element {
    const card = props.hsCard;
    return (
        <>
            <div className="hsCard">                
                <span>{card.name}</span>
                <Image src={card.img ? card.img : undefined} width="100%" alt="Placeholder image." />
                <span>{`set: ${card.cardSet}`}</span>
            </div>            
        </>
    );
}
