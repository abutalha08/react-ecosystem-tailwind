import React from 'react';

const NavLink = ({route}) => {
    return (
        <nav>
            
                <li><a href={route.path}>{route.name}</a></li>
            
        </nav>
    );
};

export default NavLink;