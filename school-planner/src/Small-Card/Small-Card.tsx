import React from 'react';
import './Small-Card.css';
import { CardType } from '../Enums/Small-Card-Type';

const SmallCard = ({ text, value, type } : { text: string, value: number, type: CardType }) => {
    if (type == CardType.AVERAGE) {
        return (
            <div className='smallCard'>
                <p>{text}</p>
                <div className='smallCardInnerBlock'>
                    <p>{value.toPrecision(3)}</p>
                </div>
            </div>
        );
    }
    return (
        <div className='smallCard'>
            <p>{text}</p>
            <div className='smallCardInnerBlock'>
                <p>{value}</p>
            </div>
        </div>
    );
}

export default SmallCard;