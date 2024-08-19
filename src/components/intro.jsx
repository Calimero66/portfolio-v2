import React from 'react'
import { aboutMe } from '../data/intro-data';

const Intro = () => {
    return (
        <>
            <div className='flex flex-col mx-auto h-screen'>
                <div className='mx-auto m-10 my-auto w-[355px] pt-6 sm:pt-8 ml-20 sm:mr-[370px] sm:w-[455px] md:mr-[420px] md:pt-18 md:w-[455px] lg:w-3/4'>
                    <div className='z-20 flex flex-row text-secondary text-zinc-400'>
                        <div className="w-8 border-t border-secondary bottom-[-12px] relative"></div>
                        <span className='ml-2'>Hi</span>
                    </div>
                    <p className='text-slate-200 font-bold sm:text-3xl md:text-xl lg:text-3xl'>
                        {aboutMe.fullName} <span className='sm:text-xs md:text-xs lg:text-sm bg-gradient-to-r
                        from-red-400 via-neutral-800 to-zinc-400 bg-clip-text tracking-tight text-transparent'>{aboutMe.aka}</span>
                    </p>
                    <p className='text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-7xl bg-gradient-to-r
                        from-neutral-400 via-red-800 to-zinc-400 bg-clip-text tracking-tight text-transparent'>
                        {aboutMe.title}
                    </p>
                    <p className='tracking-tight my-10 max-w-xl font-light'>
                        {aboutMe.description}
                    </p>
                    
                        {/* <div className=' border-2 bottom-[2cm] border-[#ffffff] rounded-full h-10 w-4 z-10 absolute inset-x-0 mx-auto before:content before:block before:h-[8px] before:w-[10px] before:bg-white before:rounded-full before:top-[10px] before:animate-scrollDownAnimation'>
                            <br />
                            <div className='mt-4 ml-[-14px] text-white'>Scroll</div>
                        </div> */}
                    
                </div>
            </div>
        </>
    )
}

export default Intro