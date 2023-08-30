import React, { useEffect, useState } from "react";
import './Calendar-Day-List.css';


const CalendarDayList = ({ onReduceMonth, onIncreaseMonth, increaseMonthText, reduceMonthText } : {onReduceMonth: number, onIncreaseMonth: number, increaseMonthText: () => void, reduceMonthText: () => void}) => {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    let body = undefined;

    const nextMonth = () => {
        increaseMonthText();
        if (currentMonth < 11)
            setCurrentMonth(currentMonth + 1);
        else {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        }
    }
    
    const prevMonth = () => {
        reduceMonthText();
        if (currentMonth > 0)
            setCurrentMonth(currentMonth - 1);
        else {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        }
    }

    useEffect(() => {
        if (onIncreaseMonth) {
            nextMonth();
        }
    }, [onIncreaseMonth]);

    useEffect(() => {
        if (onReduceMonth) {
            prevMonth();
        }
    }, [onReduceMonth]);

    switch(currentMonth) {
        case 0:
        case 2:
        case 4:
        case 6:
        case 7:
        case 9:
        case 11:
            const rows = [];
            for (let i = 0; i < 31; i++) {
                rows.push(<button className="CalendarDayButton"><span>{ i + 1 }</span></button>);
            }
            body = <tbody>{ rows }</tbody>
            break;
        case 3:
        case 5:
        case 8:
        case 10:
            const rows2 = [];
            for (let i = 0; i < 30; i++) {
                rows2.push(<button className="CalendarDayButton"><span>{ i + 1 }</span></button>);
            }
            body = <tbody>{ rows2 }</tbody>
            break;
        default:
            if ((currentYear % 4 == 0 && currentYear % 100 != 0) || currentYear % 400 == 0) {
                const rows3 = [];
                for (let i = 0; i < 29; i++) {
                    rows3.push(<button className="CalendarDayButton"><span>{ i + 1 }</span></button>);
                }
                body = <tbody>{ rows3 }</tbody>
                break;
            } else {
                const rows4 = [];
                for (let i = 0; i < 28; i++) {
                    rows4.push(<button className="CalendarDayButton"><span>{ i + 1 }</span></button>);
                }
                body = <tbody>{ rows4 }</tbody>
                break;
            }
    }
    return body; 
}

export default CalendarDayList;
   
