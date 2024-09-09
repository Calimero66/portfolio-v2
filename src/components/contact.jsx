import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const handleClick = () => {
        const email = 'hamza.aboulmaali99@gmail.com'; // Change to your email address if take this code as a reference for your project #Calim
        const mailtoLink = `mailto:${email}`;

        window.location.href = mailtoLink;
    };

    return (
        <div className='flex flex-col justify-center mx-auto w-11/12 lg:w-3/6 item-center text-center ' id='contact'>
            <h3 className='mb-6 text-5xl text-[##e5e7eb] pb-12 '>Contact </h3> 

            <p className='text-center pb-44 text-white' >
                I'm constantly seeking new challenges and opportunities for personal and professional growth.
                If you have a project or idea where my skills and expertise could be of assistance, I'd be thrilled to hear from you.
                Please don't hesitate to reach out using the contact button below or through any of the social media links provided.
                Let's collaborate and create something amazing together!
            </p>

            <button onClick={handleClick} className="bg-transparent hover:bg-[#121217] text-[#a1a1aa] font-semibold hover:text-[#3f3f50] py-3 px-5 border border-[#a1a1aa] hover:border-transparent rounded-full mx-auto">
                Hi!
            </button>

        </div>
    );
}

export default Contact
