import React from 'react';
import './Main-Card.css';

type Cardprops = {
    children: React.ReactNode;
}

const MainCard = (props: Cardprops) => {
    return (
        <div className='mainCardDiv'>
            {props.children}
        </div>
    );
}

export default MainCard;