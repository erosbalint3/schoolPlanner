import React from 'react';
import './styles/Add-Button-Group.css';

function AddButtonGroup() {
    return (
        <div id='mainGroup'>
            <div id='smallGroup'>
                <button className='addButton'>
                    <img src="" alt="AddIcon" />
                    <p>Add new grade!</p>
                </button>
                <button className='addButton'>
                    <img src="" alt="AddIcon" />
                    <p>Add new homework!</p>
                </button>
            </div>
            <button id='AddExamButton'>
                <img src="" alt="AddIcon" />
                <p>Add new exam!</p>
            </button>
        </div>
    );
}

export default AddButtonGroup;