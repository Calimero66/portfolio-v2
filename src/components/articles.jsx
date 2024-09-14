import React from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Articles = () => {

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/');
    };

    return (
        <div className='overflow-x-hidden text-[#d4d4d4] antialiased selection:bg-cyan-700 selection:text-cyan-300'>
            <div className='fixed top-0 -z-50 h-full w-full'>
                <div className="relative h-full w-full bg-[#020617]">
                    <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
                </div>
            </div>
            <div className='flex flex-col items-center justify-start h-screen pt-16'>
                <div className='flex items-center justify-between w-full px-5 sm:px-8 md:px-14 xl:px-14 py-2'>
                    <IoMdArrowRoundBack className='text-3xl cursor-pointer ml-5 hover:text-red-600' onClick={handleBackClick} />
                    <h1 className='text-2xl md:text-4xl xl:text-4xl mx-auto '>Never work for free</h1>
                </div>
                <div className='text-8xl justify-center text-center m-44'>
                    coming soon...
                </div>
            </div>
        </div>
    );
}

export default Articles;