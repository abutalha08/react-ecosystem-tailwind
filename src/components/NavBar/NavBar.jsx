import React from 'react';
import NavLink from './NavLink';



const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "About",
    path: "/about"
  },
  {
    id: 3,
    name: "Services",
    path: "/services"
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog"
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact"
  }
];

const NavBar = () => {
    return (
        <nav>

            {/* 3.Create external component and pass data to the NavLink component  */}

            <ul className='flex bg-blue-600 gap-6 justify-center'>
                {
                navLinks.map(route => <NavLink key={route.id} route = {route}></NavLink>)
            }
            </ul>





            {/*2.Dynamic ul for navbar    */}
            {/* <ul className='flex bg-blue-600 gap-6 justify-center'>
                {
                    navLinks.map(route => <li key={route.id}><a href={route.path}>{route.name}</a></li> )
                }
            </ul> */}


             {/* 1.Fixed Ul for navbar  */}
            {/* <ul className='flex bg-purple-600 gap-6 justify-center'>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul> */}

        </nav>
    );
};

export default NavBar;