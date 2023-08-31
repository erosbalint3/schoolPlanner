import React, { useEffect, useState } from "react";
import './SubjectDropdown.css';
import { Grade } from "../../Model/Grade";

interface SubjectDropDownProps {
    grades: Grade[];
    showDropDown: boolean;
    toggleDropDown: Function;
    subject: string;
}

const SubjectDropdown = ({grades, subject} : SubjectDropDownProps) => {
    const [showDropDown, setShowDropDown] = useState<boolean>(false);

    useEffect(() => {
        setShowDropDown(showDropDown);
    }, [showDropDown]);

    return (
        <div className="Grade">
            {grades.map((grade: Grade, index: number) => {
                return (
                    (grade.subject === subject) && (
                        <div key={index}>
                            {grade.name} - {grade.grade} - {grade.percentage} - {grade.date.toLocaleDateString()}
                        </div>
                    )   
                )
            })}
        </div>
    );
}

export default SubjectDropdown;