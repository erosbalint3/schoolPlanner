import React, { useEffect, useState } from "react";
import Grades from '../Data/Grades.json';
import './SubjectMenu.css';
import SubjectDropdown from "./SubjectDropdown/SubjectDropdown";
import DownArrow from '../../Images/down-arrow-svgrepo-com.svg';
import { Grade } from "../Model/Grade";
import { ShowDropDownState } from "../Model/ShowDropDownState";

const SubjectMenu = () => {
    const createShowDropDownStateItem = (item: any) => {
        return new ShowDropDownState(
            {
                id: item.id,
                show: item.show
            }
        );
    }

    const showDropDownElement = () => {
        let stateList: any[] = [];
        Grades.showDropDownElements.map((state) => {
            stateList.push(createShowDropDownStateItem(state));
        });
        return stateList;
    }

    const [showDropDown, setShowDropDown] = useState(showDropDownElement());
    let usedSubjects: string[] = [];
    const grades = () => {
        let gradesList: Grade[] = [];
        Grades.grade.map((grade) => {
            gradesList.push(createGradeItem(grade));
        });
        return gradesList;
    }

    const toggleDropDown = (id: number) => {
        setShowDropDown(showDropDown.map((state: ShowDropDownState) => 
            state.id === id 
                ? {...state, show: !state.show}
                : {...state}
        ));
    }

    const dismissHandler = (event: React.FocusEvent<HTMLDivElement>): void => {
        if (event.currentTarget === event.target) {
            setShowDropDown({...showDropDown});
        }
    }

    const createGradeItem = (item: any) => {
        return new Grade(
            {
                subject: item.subject,
                name: item.name,
                grade: item.grade,
                percentage: item.percentage,
                date: item.date
            }
        );
    }

    const containedSubject = (grade: Grade): boolean =>  {
        if (!usedSubjects.includes(grade.subject)) {
            usedSubjects.push(grade.subject);
            return false;
        } else {
            return true;
        }
    }

    return (
        <tbody id="gradeList">{grades().map((grade: Grade, index: number) => {
            return(
                (!containedSubject(grade) && (
                    <div className="Subject" onClick={(): void => toggleDropDown(index)} onBlur={(e: React.FocusEvent<HTMLDivElement>): void => dismissHandler(e)}>
                        <div className="SubjectDropDownTitle">
                            <div>{grade.subject}</div>
                            <img src={DownArrow} alt="DownArrow" />
                        </div>
                        {showDropDown[index].show && (
                            <SubjectDropdown grades={grades()} toggleDropDown={(): void => toggleDropDown(index)} showDropDown={false} subject={grade.subject}/>
                        )}
                    </div>
                )))  
        })
    }</tbody>
    );
}

export default SubjectMenu;