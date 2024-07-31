import React from 'react';
import { aboutMe } from '../data/nav-data';

const Intro = () => {
    return (
        <>
            <div className='flex flex-col w-11/12 mx-auto my-auto lg:w-3/6 lg:m-auto md:pr-48 md:pb-52 '> 
                <div className='mx-auto m-10 text-justify'>
                    <div className='z-20 flex flex-row text-secondary text-zinc-400'>
                        <div className="w-8 border-t border-secondary bottom-[-12px] relative"></div>
                        <span className='ml-2'>Hi</span>
                    </div>
                    <p className='text-neutral-800 font-bold text-2xl sm:text-3xl md:text-xl lg:text-3xl'>
                        {aboutMe.fullName} <span className='text-red-500'>{aboutMe.aka}</span>
                    </p>
                    <p className='text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-7xl text-white'>
                        {aboutMe.title}
                    </p>
                </div>
            </div>
            <div className='border-2 bottom-[30px] sm:bottom-[40px] md:bottom-[50px] lg:bottom-[60px] border-[#ffffff] rounded-full h-10 w-4 z-10 absolute left-0 mx-auto right-[0px] before:content before:block before:h-[8px] before:w-[10px] before:bg-white before:rounded-full before:top-[10px] before:animate-scrollDownAnimation'>
                <br />
                <div className='mt-4 ml-[-14px] text-white'>Scroll</div>
            </div>
        </>
    );
}

export default Intro;