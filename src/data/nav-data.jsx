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
        path: '#projects',
    },
    {
        label: 'S k i l l s',
        path: '#skills',
    },
    {
        label: 'Articles',
        path: '/articles',
    },
    {
        label: 'Contact',
        path: '/contact',
        
    },
];

export const navLinksMobile = [
    {
        label: 'Projects',
        path: '#projects',
    },
    {
        label: 'S k i l l s',
        path: '#skills',
    },
    {
        label: 'Articles',
        path: '/articles',
    },
    {
        label: 'Contact',
        path: '/contact',
        
    },
];


export const socialLinks = [
    {
        label: 'Twitter',
        url: `https://x.com/Calim_dev`,
        icon: <FaXTwitter {...icon} />,
    },
    {
        label: 'LinkedIn',
        url: `https://www.linkedin.com/in/hamza-aboulmaali-793b41273/`,
        icon: <FaLinkedin {...icon}  />,
    },
    {
        label: 'Github',
        url: `https://github.com/Calimero66`,
        icon: <FiGithub {...icon} />,
    },
];

export const socialLinksMobile = [
    {
        label: 'Twitter',
        url: `https://x.com/Calim_dev`,
        icon: <FaXTwitter {...icon2} />,
    },
    {
        label: 'LinkedIn',
        url: `https://www.linkedin.com/in/hamza-aboulmaali-793b41273/`,
        icon: <FaLinkedin {...icon2}  />,
    },
    {
        label: 'Github',
        url: `https://github.com/Calimero66`,
        icon: <FiGithub {...icon2} />,
    },
];