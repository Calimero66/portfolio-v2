import React from 'react'
import { socialLinks, navLinks, socialLinksMobile, navLinksMobile } from '../data/nav-data'

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
        <>
            <div className="fixed flex flex-col text-white pl-3 z-10 ">
                <div className='flex'>
                            <img src={logo} alt="Logo" className="fixed cursor-pointer w-24 mt-7 ml-3 " />

                            {/* navbar for mobile */}
                            <div onClick={handelClick} className='fixed items-end right-0 pt-[13px] md:hidden lg:hidden m-6'>
                                <FaBarsStaggered className="w-6 h-6 text-red-500 cursor-pointer " />
                            </div>
                            {/* End nav bar */}
                </div>

                <aside className="flex flex-col items-center justify-between w-24 py-8 mx-[-8px] pl-2 sm:mx-6 h-screen  ">
                    <div className="lg:flex lg:flex-col lg:flex-1 md:flex md:flex-col md:flex-1 pt-20 hidden cursor-pointer">

                        <nav className="lg:flex  "
                            onMouseEnter={() => handleHover()}
                            onMouseLeave={() => handleHoverExit()}
                        >
                            <ul className='space-y-20 mx-auto' >

                                {navLinks.map((link, index) => (
                                    <React.Fragment key={index}>
                                        <NavLink link={link} />
                                    </React.Fragment>
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

                    {/* navbar for mobile */}

                    <div className={!isOpen ? 'hidden' : 'absolute top-0 left-0 w-screen h-screen backdrop-blur-sm flex justify-center items-center'} >
                        <div onClick={handelClick} className='fixed right-[40px]  top-9 '>
                            <IoClose className="w-10 h-10 text-white cursor-pointer rounded-full" />
                        </div>
                        <div className=' justify-center items-center mx-auto'>
                            <ul className='flex flex-col w-full justify-center'>

                            {navLinks.map((link, index) => (
                                    <React.Fragment key={index}className="group text-3xl cursor-pointer">
                                        <NavLink link={link} />
                                    </React.Fragment>
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
            {/* {!isOpen && (
                <div className='border-2 bottom-[40px] sm:bottom-[40px] md:bottom-[50px] lg:bottom-[60px] border-[#ffffff] rounded-full h-10 w-4 z-10 absolute left-0 mx-auto right-[0px] before:content before:block before:h-[8px] before:w-[10px] before:bg-white before:rounded-full before:top-[10px] before:animate-scrollDownAnimation'>
                    <br />
                    <div className='mt-4 ml-[-14px] text-white'>Scroll</div>
                </div>
            )} */}
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
                href={link.pathname}
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
                        className={`absolute left-0 top-0 h-full w-full translate-x-0 transform bg-red-900 opacity-0 transition-transform duration-300 ${isHoveredOut && 'translate-x-full opacity-100' }`}
                    ></div>
                </div>
            </a>
        </li>
    );
}

export default NavBar