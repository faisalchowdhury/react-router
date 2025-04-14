import { Children, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { createBrowserRouter ,RouterProvider } from 'react-router'
import App from './App.jsx';
import Home from './outlets/Home';
import About from './outlets/About';
import Blogs from './outlets/Blogs';
import Contact from './outlets/Contact';
import Users from './outlets/Users.jsx';
import Users2 from './outlets/Users2.jsx';
import UserDetails from './outlets/UserDetails.jsx';


const fetchData = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

const routerCanBeAnything = createBrowserRouter([
  {
    path : '/' , 
    Component : App,
    children : [
      {index : '/' , Component : Home},
      {path : 'about' , Component : About},
      {path : 'blogs' , Component : Blogs},
      {path : 'contact' , Component : Contact},
      {
        path : 'users-2',
        element : <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <Users2 fetchData={fetchData} ></Users2>
        </Suspense>
       },
       {path : 'users' ,
        loader : () => fetch('https://jsonplaceholder.typicode.com/users'), 
        Component : Users},
        {
          path : 'users/:userId',
          loader : ({params}) => {
           return fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
            
          },
          Component : UserDetails,
          
          
        }
        
    ]
  },
  
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={routerCanBeAnything}></RouterProvider>
  </StrictMode>,
)
