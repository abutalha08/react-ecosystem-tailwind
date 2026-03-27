import React from 'react';

const NavLink = ({route}) => {
    return (
        <nav>
            
                <li className='px-4 hover:bg-amber-200 hover:text-black'>
                    <a href={route.path}>{route.name}</a>
                    </li>
            
        </nav>
    );
};

export default NavLink;