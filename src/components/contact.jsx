import React, { useEffect, useRef } from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { Input, Textarea } from "@material-tailwind/react";
import Footer from './footer';
import { useForm } from '@formspree/react';

const Contact = () => {
    const navigate = useNavigate();
    const [state, handleSubmit] = useForm("mvgpnbaq");

    console.log(state.errors);

    useEffect(() => {
        console.log(state.errors);
    }, [state.errors]);

    if (state.succeeded) {

        console.log(state);
        return <p>Thanks for joining!</p>;
    }




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
            <div className='flex flex-col items-center justify-start pt-16'>
                <div className='flex items-center justify-between w-full px-5 sm:px-8 md:px-14 xl:px-14 py-2'>
                    <IoMdArrowRoundBack className='text-3xl cursor-pointer ml-5 hover:text-red-600' onClick={handleBackClick} />
                    <h1 className='text-2xl md:text-4xl xl:text-4xl mx-auto'>Get in touch with me</h1>
                </div>
            </div>
            <div className="grid md:grid-cols-2 items-start gap-16 p-4 mx-auto max-w-4xl font-[sans-serif] mt-52">
                <div className='mt-20'>
                    <h1 className="text-red-800 text-3xl font-extrabold">Let's Talk</h1>
                    <p className="text-sm mt-4">
                        I'm constantly seeking new challenges and opportunities for personal and professional growth. If you have a project or idea where my skills and expertise could be of assistance, I'd be thrilled to hear from you. Please don't hesitate to reach out using the contact form below or through any social media links provided. Let's collaborate and create something amazing together!
                    </p>
                </div>

                <form
                    className="ml-auto space-y-8 w-full backdrop-blur-sm border bg-white/30 border-gray-300 p-6 rounded-lg"
                    onSubmit={handleSubmit}
                >
                    <Input
                        size="lg"
                        color="red"
                        type='text'
                        name="name"
                        label="Name"
                        required
                        className="rounded-md py-3 px-4 text-gray-800 text-sm bg-white focus:bg-transparent"
                    />
                    <Input
                        size="lg"
                        color="red"
                        type='email'
                        name="email"
                        label="Email"
                        required
                        className="rounded-md py-3 px-4 text-gray-800 text-sm bg-white focus:bg-transparent"
                    />
                    <Input
                        size="lg"
                        color="red"
                        type='text'
                        name="subject"
                        label="Subject"
                        required
                        className="rounded-md py-3 px-4 text-gray-800 text-sm bg-white focus:bg-transparent"
                    />
                    <Textarea
                        size="lg"
                        color="red"
                        name="message"
                        label="Message"
                        rows="6"
                        required
                        className="rounded-md px-4 text-gray-800 text-sm pt-3 bg-white focus:bg-transparent"
                    />
                    <button
                        type='submit'
                        disabled={state.submitting}
                        className="text-white bg-gray-900 hover:bg-red-700 tracking-wide rounded-lg text-sm px-4 py-3 flex items-center justify-center w-full !mt-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' className="mr-2" viewBox="0 0 548.244 548.244">
                            <path fillRule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clipRule="evenodd" data-original="#000000" />
                        </svg>
                        Send Message
                    </button>
                </form>
            </div>
            <div className='w-full fixed bottom-0'>
                <Footer />
            </div>
        </div>
    );
};

export default Contact;
