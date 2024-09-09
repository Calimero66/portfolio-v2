import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {router} from './Router.jsx'

import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      {/* <App /> */}
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
