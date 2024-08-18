import React from 'react'

const Details = () => {
    return (
        <div className='flex flex-col items-center justify-center py-14 mx-auto '>
            <div className='mx-auto m-10 my-auto text-center w-[355px] pt-6 sm:pt-8 sm:mr-[390px]  sm:w-[455px] md:mr-[420px] md:pt-18  lg:w-3/4'>
                <h2 className='text-5xl md:mr-4 lg:mr-1/2 '>
                    .about("me")
                </h2>
            
                <div className='flex flex-col gap-4 mt-24 text-justify  '>
                    <p>
                        I started web development when I was 14 and my first project was a music website where I hosted music projects I made with a friend mine. (Stormix was my "artist" name)
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Details
