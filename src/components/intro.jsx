import React from 'react'
import { aboutMe } from '../data/intro-data';
import GradualSpacing from "@/components/magicui/gradual-spacing";



const Intro = () => {
    return (
        <>
            <div className='flex flex-col mx-auto h-screen p-4 ' id='intro'>
                <div className=' mx-auto my-auto  '>
                    <div className='flex flex-row text-secondary text-[#a1a1aa]'>
                        <div className="w-4 border-t border-[#6B7280] bottom-[-12px] relative"></div>
                        <span className='ml-2'>Hi</span>
                    </div>
                    <p className='text-[#e2e8f0] font-bold sm:text-3xl md:text-xl lg:text-3xl'>
                        {aboutMe.fullName} <span className='sm:text-xs md:text-xs lg:text-sm bg-gradient-to-r
                        from-red-400 via-[#262626] to-[#a1a1aa] bg-clip-text tracking-tight text-transparent'>{aboutMe.aka}</span>
                    </p>
                    <GradualSpacing
                        className="font-display text-4xl font-bold text-[##e5e7eb] tracking-tight  md:text-5xl md:leading-[4rem]"
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