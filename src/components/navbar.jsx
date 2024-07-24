import React from 'react'
import { socialLinks, navLinks, socialLinksMobile, navLinksMobile } from '../data/nav-data'
// import { Link } from 'react-router-dom'
import logo from '../images/download.png'

import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

import { useState, useEffect } from 'react';


const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const handelClick = () => {
        setIsOpen(!isOpen)
    }

    const [isHoveredIn, setIsHoveredIn] = useState(false);
    const [isHoveredOut, setIsHoveredOut] = useState(false);

    const handleHover = () => {
        setIsHoveredIn(true);
    };

    const handleHoverExit = () => {
        setIsHoveredIn(false);
        setIsHoveredOut(true);
    };

    useEffect(() => {
        if (isHoveredOut) {
            const timer = setTimeout(() => {
                setIsHoveredOut(false);
            }, 300);

            return () => clearTimeout(timer);
        }
    }, [isHoveredOut]);


    return (

        <div className="flex min-h-screen  text-white pl-3 z-10">
            <aside className="flex flex-col items-center justify-between w-24 py-8 mx-6 pl-2  ">

                <div className='flex'>
                    <img src={logo} alt="Logo" className="cursor-pointer" />

                    {/* navbar for mobile */}
                    <div onClick={handelClick} className='fixed items-end right-0 pr-12 pt-[13px] md:hidden lg:hidden'>
                        <FaBarsStaggered className="w-6 h-6 text-red-500 cursor-pointer " />
                    </div>
                    {/* End nav bar */}

                </div>
                <div className="lg:flex lg:flex-col lg:flex-1 md:flex md:flex-col md:flex-1 pt-20 hidden cursor-pointer">

                    {/* <div className="lg:flex lg:flex-col lg:flex-1 md:flex md:flex-col md:flex-1 pt-20 hidden cursor-pointer"
                    onMouseEnter={()=>handleHover()} 
                    onMouseLeave={()=>handleHoverExit()} 
                > */}

                    <nav className="lg:flex "  
                        onMouseEnter={() => handleHover()}
                        onMouseLeave={() => handleHoverExit()}
                    >
                        <ul className='space-y-20' >
                            {navLinks.map((link, index) => (
                                <>
                                    <li key={index} spy={true} smooth={true} className="-rotate-90 " >
                                        <a to={link.pathname}
                                            className="">
                                            {link.label}
                                            <div className="relative mt-1 h-1 w-full bottom-4">
                                                <div
                                                    className={`absolute left-0 top-0 h-full w-full bg-yellow-500 transition-transform duration-100 ${isHoveredIn ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} `}
                                                ></div>
                                                <div
                                                    className={`absolute left-0 top-0 h-full w-full translate-x-0 transform bg-yellow-500 opacity-0 transition-transform duration-300 ${isHoveredOut && 'translate-x-full opacity-100'}`}
                                                ></div>
                                            </div>
                                        </a>
                                        {/* <div className="relative mt-1 h-1 w-full">
                                            <div
                                                className={`absolute left-0 top-0 h-full w-full bg-yellow-500 transition-transform duration-300 ${isHoveredIn ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
                                            ></div>
                                            <div
                                                className={`absolute left-0 top-0 h-full w-full translate-x-0 transform bg-yellow-500 opacity-0 transition-transform duration-300 ${isHoveredOut ? 'translate-x-full opacity-100' : ''}`}
                                            ></div>
                                        </div> */}


                                    </li>

                                </>
                            ))}
                        </ul>
                    </nav>

                </div>
                <div className=" z-50 lg:flex lg:flex-col md:flex md:flex-col hidden " >
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
                        <IoClose className="w-10 h-10 text-white cursor-pointer rounded-full bg-red-600 " />
                    </div>
                    <div className=' justify-center items-center mx-auto'>
                        <ul className='flex flex-col w-full space-y-10  justify-center'>

                            {navLinksMobile.map((link, index) => (
                                <>
                                    <li key={index} spy={true} smooth={true} className="group space-x-6 text-3xl cursor-pointer " >
                                        <a to={link.pathname}>{link.label}
                                        </a>
                                        <div className=""></div>
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