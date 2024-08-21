import React from 'react'
import { aboutMe } from '../data/intro-data';
import GradualSpacing from "@/components/magicui/gradual-spacing";



const Intro = () => {
    return (
        <>
            <div className='flex flex-col mx-auto h-screen '>
                <div className=' mx-auto my-auto  '>
                    <div className='flex flex-row text-secondary text-zinc-400'>
                        <div className="w-4 border-t border-secondary bottom-[-12px] relative"></div>
                        <span className='ml-2'>Hi</span>
                    </div>
                    <p className='text-slate-200 font-bold sm:text-3xl md:text-xl lg:text-3xl'>
                        {aboutMe.fullName} <span className='sm:text-xs md:text-xs lg:text-sm bg-gradient-to-r
                        from-red-400 via-neutral-800 to-zinc-400 bg-clip-text tracking-tight text-transparent'>{aboutMe.aka}</span>
                    </p>
                    <GradualSpacing
                        className="font-display text-4xl font-bold bg-gradient-to-r
                        from-neutral-200 via-neutral-500 to-zinc-800 bg-clip-text tracking-tight text-transparent  md:text-5xl md:leading-[4rem]"
                        text={aboutMe.title}
                    />
                    <p className='tracking-tight my-6 max-w-xl font-light'>
                        {aboutMe.description}
                    </p>

                </div>

            </div>
        </>
    )
}

export default Intro