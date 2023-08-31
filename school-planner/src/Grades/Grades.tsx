import React from "react";
import './Grades.css';
import SubjectMenu from "./SubjectMenu/SubjectMenu";

const Grades = () => {
    return (
        <div id="mainGradesDiv">
            <div id="gradesDiv">
                <SubjectMenu />
            </div>
            <div id="addGradeDiv">

            </div>
        </div>
    );
}

export default Grades;