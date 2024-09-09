import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App'; 
import Contact from './components/contact';
import Articles from './components/articles';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/articles",
        element: <Articles />,
    },
]);

export { router };