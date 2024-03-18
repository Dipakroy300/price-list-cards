import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {

    const [open,setOpen]=useState(false);
    const navbarElements = [
        { title: "Home", link: "/",id:1 },
        { title: "About Us", link: "/about",id:2 },
        { title: "Services", link: "/services",id:3 },
        { title: "Products", link: "/products",id:4 },
        { title: "Blog", link: "/blog",id:5 },
        { title: "Portfolio", link: "/portfolio",id:6 },
        { title: "Testimonials", link: "/testimonials" ,id:7},
        { title: "FAQ", link: "/faq" ,id:8},
        { title: "Contact", link: "/contact",id:9 }
      ];
    return (
        <nav className='bg-purple-400 px-2'>
             <div className='md:hidden' onClick={()=>setOpen(!open)}>
           
          <span>
            {
                open===false? 
                
                <Bars3Icon className="h-6 w-6 text-blue-500" />
                :
                <XMarkIcon className="h-6 w-6 text-blue-500"/>
                
           }
           </span>
           
           </div>
          
            <ul className={`md:flex bg-purple-300 md:pt-5 pl-6 pb-4 md:static absolute duration-400 ${open ? 'top-6' : '-top-60'}`}>
                {
                    navbarElements.map(navbarElement=><Link
                        key={navbarElement.id}
                        navbarElement={navbarElement}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;