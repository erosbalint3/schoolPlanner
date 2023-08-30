import React from 'react';
import './Navigation-Bar.css';
import NavBarLink from './Navigation-Bar-Link/Navigation-Bar-Link';

function NavBar() {
    return (
        <div id='navBarDiv'>
            <NavBarLink link="www.google.com" name="Home" />
            <NavBarLink link="www.google.com" name="Grades" />
            <NavBarLink link="www.google.com" name="Homeworks" />
            <NavBarLink link="www.google.com" name="Exams" />
            <NavBarLink link="www.google.com" name="Files" />
        </div>
    );
}

export default NavBar;