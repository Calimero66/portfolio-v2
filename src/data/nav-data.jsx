import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

const icon = {
    className: "w-5 h-5 hover:text-red-600   ",
    
};
const icon2 = {
    className: "w-7 h-7 hover:text-red-600  ",
    
};

export const navLinks = [
    {
        label: 'Projects',
        pathname: '/#project-1',
    },
    {
        label: 'Details',
        pathname: '/#details',
    },
    {
        label: 'Articles',
        pathname: '/articles',
    },
    {
        label: 'Contact',
        pathname: '/contact',
    },
];

export const navLinksMobile = [
    {
        label: 'Projects',
        pathname: '/#project-1',
    },
    {
        label: 'Details',
        pathname: '/#details',
    },
    {
        label: 'Articles',
        pathname: '/articles',
    },
    {
        label: 'Contact',
        pathname: '/contact',
    },
];


export const socialLinks = [
    {
        label: 'Twitter',
        url: `https://twitter.com/`,
        icon: <FaXTwitter {...icon} />,
    },
    {
        label: 'LinkedIn',
        url: `https://www.linkedin.com`,
        icon: <FaLinkedin {...icon}  />,
    },
    {
        label: 'Github',
        url: `https://github.com`,
        icon: <FiGithub {...icon} />,
    },
];

export const socialLinksMobile = [
    {
        label: 'Twitter',
        url: `https://twitter.com/`,
        icon: <FaXTwitter {...icon2} />,
    },
    {
        label: 'LinkedIn',
        url: `https://www.linkedin.com`,
        icon: <FaLinkedin {...icon2}  />,
    },
    {
        label: 'Github',
        url: `https://github.com`,
        icon: <FiGithub {...icon2} />,
    },
];

export const aboutMe  = 
    {
        fullName: 'Hamza Aboulmali',
        aka : 'Calimero',
        title: 'Full Stack Developer',
        description: 'I am a full stack developer with a passion for web development. I have experience in building web applications using React, Node.js, and Express. I am always looking for new challenges and opportunities to learn and grow as a developer.',
    }
;