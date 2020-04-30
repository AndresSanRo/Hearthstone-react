import React from 'react';
import '../../styles/cardWiki/hsCard.scss'
import { Card } from '@uifabric/react-cards'
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
                <Card>
                    <Card.Item>
                        {card.name}
                    </Card.Item>
                    <Card.Item fill>
                        <Image src={card.img ? card.img : undefined} width="100%" alt="Placeholder image." />
                    </Card.Item>
                    <Card.Item>
                        {`set: ${card.cardSet}`}
                    </Card.Item>
                </Card>
            </div>            
        </>
    );
}
