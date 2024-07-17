import React from 'react'
import { socialLinks, navLinks, socialLinksMobile, navLinksMobile } from '../data/nav-data'
// import { Link } from 'react-router-dom'
import logo from '../images/download.png'

import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

import { useState } from 'react';


const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const handelClick = () => {
        setIsOpen(!isOpen)
    }

    return (

        <div className="flex min-h-screen bg-black text-white pl-3 ">
            <aside className="flex flex-col items-center justify-between w-24 py-8 mx-6 pl-2  ">

                <div className='flex'>
                    <img src={logo} alt="Logo" className="" />

                    <div onClick={handelClick} className='fixed items-end right-0 pr-12 pt-[13px] md:hidden lg:hidden'>
                        <FaBarsStaggered className="w-6 h-6 text-red-500 cursor-pointer " />
                    </div>

                </div>
                <div className="lg:flex lg:flex-col lg:flex-1 md:flex md:flex-col md:flex-1 pt-20 hidden">
                    {/* <img src={logo} alt="Logo" className="pb-20" /> */}
                    <nav className="lg:flex">
                        <ul className='space-y-20' >
                            {navLinks.map((link, index) => (
                                <>
                                    <li key={index} spy={true} smooth={true} className="-rotate-90 " >
                                        <a to={link.pathname} className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-red-700 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">{link.label}
                                        </a>
                                    </li>

                                </>

                            ))}
                        </ul>
                    </nav>

                </div>
                <div className="lg:flex lg:flex-col md:flex md:flex-col hidden " >
                    <nav className="lg:flex mx-auto ">
                        <ul className='space-y-6 pb-6  '>
                            {/* <XIcon className="w-6 h-6" /> */}
                            {socialLinks.map((link, index) => (
                                <li key={index} >
                                    <a href={link.url} target="_blank" rel="noopener noreferrer" className=' cursor-pointer'  >
                                        {link.icon}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* navbar for mobile */}

                <div className={!isOpen ? 'hidden' : 'absolute top-0 left-0 w-full h-screen backdrop-blur-sm flex justify-center items-center'} >
                    <div onClick={handelClick} className='fixed right-[40px]  top-9 '>
                        <IoClose  className="w-10 h-10 text-white cursor-pointer rounded-full bg-red-600 " />
                    </div>
                    <div className=' justify-center items-center mx-auto'>
                        <ul className='flex flex-col w-full space-y-10  justify-center'>
                            
                            {navLinksMobile.map((link, index) => (
                                <>
                                    <li key={index} spy={true} smooth={true} className="  text-center  space-x-6 text-3xl cursor-pointer  " >
                                        <a to={link.pathname}className=" after:block after:content-[''] after:h-[3px] after:bg-red-700 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">{link.label}
                                        </a>
                                        {/* <div className=' border border-red-800 '></div> */}
                                    </li>

                                </>

                            ))}
                        </ul>
                    </div>
                    <div>
                        <ul className='flex flex-row absolute space-x-10 bottom-6 left-10 '>
                            
                            {socialLinksMobile.map((link, index) => (
                                <li key={index}  >
                                    <a href={link.url} target="_blank" rel="noopener noreferrer" className=' cursor-pointer '  >
                                        {link.icon}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>


                </div>

                {/* End nav bar */}

            </aside>
        </div>

    )
}

export default NavBar