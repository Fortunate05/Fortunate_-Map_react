import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import DA from './pages/DA';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import AboutUs from '../src/pages/AboutUs'
import ContactUs from '../src/pages/ContactUs'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/it_staff",
    element: <DA/>,
  },
  {
    path: "/about",
    element: <AboutUs/>,
  },
  {
    path: "/contact",
    element: <ContactUs/>,
  }
  
  
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
