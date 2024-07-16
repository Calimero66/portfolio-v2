import {  FaXTwitter , FaLinkedin  } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

const icon = {
    className: " w-5 h-5 hover:text-red-600",
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

export const socialLinks = [
    {
        label: 'Twitter',
        url: `https://twitter.com/`,
        icon: <FaXTwitter  {...icon} />,
    },
    {
        label: 'LinkedIn',
        url: `https://www.figma.com`,
        icon: <FaLinkedin  {...icon} />,

    },
    {
        label: 'Github',
        url: `https://github.com`,
        icon: <FiGithub  {...icon} />,

    },
];