import React from 'react';
import './Navigation-Bar-Link.css';

function NavBarLink({ link, name } : { link: string, name: string }) {
    return (
        <a href={ link }>{ name }</a>
    );
}

export default NavBarLink;