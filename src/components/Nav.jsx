import React from 'react'
import { socialLinks, navLinks, socialLinksMobile, navLinksMobile } from '../data/nav-data'

import logo from '../images/download.png'

import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

import { useState, useEffect } from 'react';




const Nav = () => {

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

    const handleCombinedClick = () => {
        handelClick();
        toggleNavbar();
    };


    return (
        <>
            <div className="fixed w-28 ">
                <div className='flex w-28'>
                    <a href="#intro">
                        <img src={logo} alt="Logo" className="fixed cursor-pointer w-24 mt-12 ml-6 " />
                    </a>
                </div>

                <aside className="lg:flex lg:flex-col lg:flex-1 md:flex md:flex-col lg:items-center lg:justify-between md:items-center md:justify-center w-24 py-8 mx-[-8px] pl-2 sm:mx-6 h-screen hidden  ">
                    <div className="lg:flex lg:flex-col lg:flex-1 md:flex md:flex-col md:flex-1 pt-20 hidden cursor-pointer">

                        <nav className="lg:flex  "
                            onMouseEnter={() => handleHover()}
                            onMouseLeave={() => handleHoverExit()}
                        >
                            <ul className='space-y-14 mx-auto pt-10' >

                                {navLinks.map((link, index) => (
                                    <li key={index}>
                                        <NavLink link={link} />
                                    </li>
                                ))}
                            </ul>
                        </nav>

                    </div>
                    <div className=" z-50 lg:flex lg:flex-col md:flex md:flex-col hidden " >
                        <nav className="lg:flex mx-auto ">
                            <ul className='space-y-6 pb-6 mr-[25.5px]  '>
                                {/* <XIcon className="w-6 h-6" /> */}
                                {socialLinks.map((link, index) => (
                                    <li key={index} >
                                        <a href={link.url} target="_blank" rel="noopener noreferrer" className=' cursor-pointer '  >
                                            {link.icon}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </aside>
                {/* navbar for mobile */}

                <div>
                    {!isOpen ? (
                        <div onClick={handleCombinedClick} className='fixed items-end right-[28px] top-[30px] md:hidden lg:hidden m-6 pt-2 z-50'>
                            <FaBarsStaggered className="w-7 h-7 text-red-500 cursor-pointer" />
                        </div>
                    ) : (
                        <>
                            <div className='absolute top-0 left-0 w-screen h-screen backdrop-blur-sm flex justify-center items-center z-[9000] '>
                                <div onClick={handelClick} className='fixed right-[46px] top-[55px]'>
                                    <IoClose className="w-10 h-10 text-red-500 cursor-pointer rounded-full" />
                                </div>
                                <div className='justify-center items-center mx-auto'>
                                    <ul className='flex flex-col w-full justify-center'>
                                        {navLinks.map((link, index) => (
                                            <React.Fragment key={index} className="group text-3xl cursor-pointer">
                                                <NavLink link={link} />
                                            </React.Fragment>
                                        ))}
                                    </ul>
                                </div>
                                <div className="absolute bottom-0 left-0 flex flex-row mb-3 ml-3  ">
                                    <ul className='flex flex-row'>
                                        {socialLinksMobile.map((link, index) => (
                                            <li key={index} className='mr-8'>
                                                <a href={link.url} target="_blank" rel="noopener noreferrer" className='cursor-pointer'>
                                                    {link.icon}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </>
                    )}
                </div>

                {/* End nav bar */}
            </div>
        </>


    )
}
function NavLink({ link }) {
    const [isHoveredIn, setIsHoveredIn] = useState(false);
    const [isHoveredOut, setIsHoveredOut] = useState(false);

    const handleMouseEnter = () => {
        setIsHoveredIn(true);
        setIsHoveredOut(false);
    };

    const handleMouseLeave = () => {
        setIsHoveredIn(false);
        setIsHoveredOut(true);
    };

    return (
        <li className="lg:-rotate-90 2xl:-rotate-90 xl:-rotate-90 md:-rotate-90 overflow-hidden">
            <a
                href={link.path}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="relative mx-3"
            >
                {link.label}
                <div className="relative mt-1 h-1 w-full bottom-4">
                    <div
                        className={`absolute left-0 top-0 h-full w-full bg-red-900 transition-transform duration-300 ${isHoveredIn ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
                    ></div>
                    <div
                        className={`absolute left-0 top-0 h-full w-full translate-x-0 transform bg-red-900 opacity-0 transition-transform duration-300 ${isHoveredOut && 'translate-x-full opacity-100'}`}
                    ></div>
                </div>
            </a>
        </li>
    );
}

export default Nav