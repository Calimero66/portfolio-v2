import React from 'react'
import { socialLinks, navLinks } from '../data/nav-data'
// import { Link } from 'react-router-dom'
import logo from '../images/download.png'

const NavBar = () => {

    return (

        <div className="flex min-h-screen bg-black text-white pl-3 ">
            {/* <aside className="flex flex-col items-center justify-between w-10 py-8 mx-6 pl-10"> */}
            <aside className="flex flex-col items-center justify-between w-24 py-8 mx-6 pl-2 ">
                <div className='flex'>
                    <img src={logo} alt="Logo" className="" />
                </div>
                <div className="lg:flex lg:flex-col lg:flex-1 pt-20">
                    {/* <img src={logo} alt="Logo" className="pb-20" /> */}
                    <nav className="lg:flex ">
                        <ul className='space-y-20' >
                            {navLinks.map((link, index) => (
                                <>
                                    <li key={index} spy={true} smooth={true} className="-rotate-90 text-base items-center  " >
                                        <a to={link.pathname}>{link.label}
                                        {/* <div className='absolute w-full h-0.5 bg-white/80 scale-x-0 group-hover:scale-x-100 transition-transform'/> */}
                                        </a>
                                    </li>
                                    
                                </>
                                
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className="lg:flex lg:flex-col " >
                    <nav className="lg:flex mx-auto ">
                        <ul className='space-y-6 pb-6'>
                            {/* <XIcon className="w-6 h-6" /> */}
                            {socialLinks.map((link, index) => (
                                <li key={index} className="">
                                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                                        {link.icon}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </aside>
        </div>

    )
}

export default NavBar