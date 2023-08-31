import React from "react";
import './CalendarNote.css';

const CalendarNote = () => {
    return (
        <div className="CalendarNoteDiv">
            <div>
                <span className="redNote"></span>
                <h4>Exam</h4>
            </div>
            <div>
                <span className="yellowNote"></span>
                <h4>Homework deadline</h4>
            </div>
            <div>
                <span className="greenNote"></span>
                <h4>Holiday</h4>
            </div>
        </div>
    );
}

export default CalendarNote;