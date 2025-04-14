import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx';
import Home from './outlets/Home';
import About from './outlets/About';
import Blogs from './outlets/Blogs';
import Contact from './outlets/Contact';
import { createBrowserRouter ,RouterProvider } from 'react-router'


const routerCanBeAnything = createBrowserRouter([
  {
    path : '/' , 
    Component : App,
    children : [
      {index : '/' , Component : Home},
      {path : 'about' , Component : About},
      {path : 'blogs' , Component : Blogs},
      {path : 'contact' , Component : Contact}
    ]
  },
  
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={routerCanBeAnything}></RouterProvider>
  </StrictMode>,
)
