import React from 'react';
import './Add-Button-Group.css';
import plus from '../Images/plus.png';

function AddButtonGroup() {
    return (
        <div id='mainGroup'>
            <button className='addButton'>
                <img src={ plus } alt="AddIcon" />
                <p>Add new grade!</p>
            </button>
            <button className='addButton'>
                <img src={ plus } alt="AddIcon" />
                <p>Add new homework!</p>
            </button>
            <button id='AddExamButton'>
                <img src={ plus } alt="AddIcon" />
                <p>Add new exam!</p>
            </button>
        </div>
    );
}

export default AddButtonGroup;