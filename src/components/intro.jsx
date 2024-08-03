import React from 'react';
import { aboutMe } from '../data/intro-data';

const Intro = () => {
    return (
        <>
            <div className='flex flex-col mx-auto h-screen  '> 
                <div className='mx-auto m-10 my-auto '>
                    <div className='z-20 flex flex-row text-secondary text-zinc-400'>
                        <div className="w-8 border-t border-secondary bottom-[-12px] relative"></div>
                        <span className='ml-2'>Hi</span>
                    </div>
                    <p className='text-slate-200 font-bold  sm:text-3xl md:text-xl lg:text-3xl'>
                        {aboutMe.fullName} <span className='sm:text-xs md:text-xs lg:text-sm bg-gradient-to-r
                        from-red-400 via-neutral-800 to-zinc-400 bg-clip-text tracking-tight text-transparent'>{aboutMe.aka}</span>
                    </p>
                    <p className='text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-7xl bg-gradient-to-r
                        from-neutral-800 via-zinc-400 to-red-400 bg-clip-text tracking-tight text-transparent'>
                        {aboutMe.title}
                    </p>
                    <div className='border-2 top-[650px] border-[#ffffff] rounded-full h-10 w-4 z-10 absolute left-0 mx-auto right-[0px] before:content before:block before:h-[8px] before:w-[10px] before:bg-white before:rounded-full before:top-[10px] before:animate-scrollDownAnimation'>
                        <br />
                        <div className='mt-4 ml-[-14px] text-white'>Scroll</div>
                    </div>
                </div>
            </div>
            
            {/* <div className=' w-10 h-10 bg-white sm:bg-red-900 md:bg-green-800 lg:bg-orange-500 xl:bg-amber-200'>

                        bottom-[40px] sm:bottom-[40px] md:bottom-[50px] lg:bottom-[60px]

            </div> */}
        </>
    );
}

export default Intro;