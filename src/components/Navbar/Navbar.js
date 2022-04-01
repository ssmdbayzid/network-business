import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid'


const Navbar = () => {

    const [open, setOpen] = useState(false);

    const routes = [

        {id: 1, name: 'Home', link: '/home'},
        {id: 2, name: 'Deals', link: '/deals'},
        {id: 3, name: 'Coupons', link: '/coupons'},
        {id: 4, name: 'Contact', link: '/contact'},
        {id: 5, name: 'Events', link: '/events'}
    ]

    return (
        <nav className='w-full bg-indigo-400'>
            <div onClick={() =>setOpen(!open)} className='w-6 md:hidden'>
                {open ? <XIcon></XIcon>: <MenuIcon></MenuIcon>}
            </div>
            <ul className={`md:flex text-center w-full bg-indigo-400 justify-center md:sticky absolute duration-1000 ease-in-out ${open ? 'top-6': 'top-[-150px]'}`}>
            {
                routes.map(route => <Link
                key={route.id}
                name={route.name}
                link={route.link}
               
                ></Link> )
            }
            </ul>

        </nav>
    );
};

export default Navbar;