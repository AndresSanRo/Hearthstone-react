import React from 'react';
import '../../styles/cardWiki/typeSelector.scss'
import { CardTypes } from '.././../model';
import { PrimaryButton } from 'office-ui-fabric-react'

interface TypeSelectorProps {
    setType: (type: string) => void
}

export function TypeSelector(props: TypeSelectorProps): JSX.Element {
    const typeOptions = [
        CardTypes.Hero,
        CardTypes.Minion,
        CardTypes.Spell,
        CardTypes.Enchantment,
        CardTypes.Weapon,
        CardTypes.HeroPower,
    ]

    const onChangeType = (type: string) => {
        props.setType(type);
    }

    return (
        <>
            <div className="typeSelector">
                {
                    typeOptions.map((type: string) => {
                        return  (
                            <>
                                <PrimaryButton 
                                    value={type}
                                    text={type}
                                    className="typeSelectorCapsule"
                                    onClick={() => { onChangeType(type) }}
                                /> 
                            </>                                                        
                        );
                    })
                }
            </div>            
        </>
    );
}
