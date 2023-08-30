import './Calendar.css';
import React, { useEffect, useState } from 'react';
import CalendarDayList from './DayDiv/Calendar-Day-List';
import LeftArrow from '../Images/left-chevron.png';
import RightArrow from '../Images/right-chevron.png';
import ReactDOM from 'react-dom';

interface CalendarProps {
    onMonthSwitch:() => void;
}

const Calendar = () => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const [currentMonthIndex, setCurrentMonthIndex] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [currentMonth, setCurrentMonth] = useState(months[currentMonthIndex]);
    const [onIncreaseMonth, setOnIncreaseMonth] = useState(0);
    const [onReduceMonth, setOnReduceMonth] = useState(0);

    const increaseMonthText = () => {
        setCurrentMonthIndex(currentMonthIndex + 1); 
    }

    useEffect(() => {
        setCurrentMonth(months[currentMonthIndex]);
        if (currentMonthIndex > 11) {
            setCurrentMonthIndex(0);
            setCurrentYear(currentYear + 1);
        }
        else if (currentMonthIndex < 0) {
            setCurrentMonthIndex(11);
            setCurrentYear(currentYear - 1);
        }
        
    }, [currentMonthIndex]);

    const reduceMonthText = () => {
        setCurrentMonthIndex(currentMonthIndex - 1);     
    }

    return (
        <div>
            <div id='CalendarButtonDiv'>
                <button className='BigCalendarButton'><span>{ currentYear }</span></button>
                <button className='BigCalendarButton'><span>{ currentMonth }</span></button>
                <button className='SmallCalendarButton'> <img src={ LeftArrow } alt="Left Arrow" onClick={() => {setOnReduceMonth( onReduceMonth - 1)}}/> </button>
                <button className='SmallCalendarButton'> <img src={ RightArrow } alt="Right Arrow" onClick={() => {setOnIncreaseMonth(onIncreaseMonth + 1)}}/> </button>
            </div>
            <div id='CalendarDaysDiv'>
                <CalendarDayList onIncreaseMonth={onIncreaseMonth} onReduceMonth={onReduceMonth} increaseMonthText={increaseMonthText} reduceMonthText={reduceMonthText}/>
            </div>
        </div>
    );
};

export default Calendar;