import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import AboutUs from '../src/pages/AboutUs'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/it_staff",
    element: <App/>,
  },
  {
    path: "/about",
    element: <AboutUs/>,
  }
  
  
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
