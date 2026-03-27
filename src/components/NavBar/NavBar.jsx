import React, { useState } from 'react';
import NavLink from './NavLink';
import { Menu, X } from 'lucide-react';



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
    const [open, setOpen] = useState(false);
    const links = navLinks.map(route => <NavLink key={route.id} route = {route}></NavLink>);
    return (
        <nav className='flex justify-between bg-blue-600 mx-5 '>

            <span className='flex relative cursor-pointer' onClick={()=> setOpen(!open)}>  {/*Here I do toggling*/}
                {
                open ? 
                <X className='md:hidden'></X> : 
                <Menu className='md:hidden'></Menu>
                }
                
              <ul className={`md:hidden absolute left-0 top-full mt-1 w-44 overflow-hidden transition-all
               duration-1000 ease-in-out text-black 
                ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"} 
                bg-amber-600 `}>
                {links}
              </ul>
            <h2 className='ml-4 hidden md:block'>My Navbar</h2>
            </span>

            {/* 3.Create external component and pass data to the NavLink component  */}

            <ul className='md:flex gap-6 hidden'>
                {
                // navLinks.map(route => <NavLink key={route.id} route = {route}></NavLink>)
                links
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

            <button>Sign In</button>

        </nav>
    );
};

export default NavBar;