import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App'; 
import Articles from './components/articles';
import Contact from './components/contact';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/articles",
        element: <Articles />,
    },
    {
        path: "/contact",
        element: <Contact />,
    }
]);

export { router };