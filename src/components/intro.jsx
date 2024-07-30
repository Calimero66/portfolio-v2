import React from 'react'
import { aboutMe } from '../data/nav-data'

const Intro = () => {

    return (
        <>
            <div className='flex flex-col items-center z-10 text-white relative mx-auto w-auto h-auto overflow-hidden m-80 right-56 top-16 '>
                <div className='mx-auto m-10'>
                    <p className='text-6xl'>
                        {aboutMe.fullName} <span className='text-sm text-red-500'>{aboutMe.aka}</span>
                    </p>
                    <p>
                        {aboutMe.title}
                    </p>

                </div>
            </div>
            <div className='border-2 bottom-[60px] border-[#ffffff] rounded-full h-10 w-4 z-10 absolute left-0 mx-auto right-[0px] before:content before:block before:h-[8px] before:w-[10px] before:bg-white before:rounded-full before:top-[10px] before:animate-scrollDownAnimation'>
                <br />
                <div className='mt-4 ml-[-14px] text-white'>Scroll</div>
            </div>
        </>
    )
}

export default Intro