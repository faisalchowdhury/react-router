import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { createBrowserRouter ,RouterProvider } from 'react-router'
import App from './App.jsx';
import Home from './outlets/Home';
import About from './outlets/About';
import Blogs from './outlets/Blogs';
import Contact from './outlets/Contact';
import Users from './outlets/Users.jsx';


const routerCanBeAnything = createBrowserRouter([
  {
    path : '/' , 
    Component : App,
    children : [
      {index : '/' , Component : Home},
      {path : 'about' , Component : About},
      {path : 'blogs' , Component : Blogs},
      {path : 'contact' , Component : Contact},
      {path : 'users' ,
       loader : () => fetch('https://jsonplaceholder.typicode.com/users'), 
       Component : Users}
    ]
  },
  
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={routerCanBeAnything}></RouterProvider>
  </StrictMode>,
)
