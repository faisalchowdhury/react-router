
import { Outlet } from 'react-router'
import './App.css'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import Sidebar from './component/Sidebar'


function App() {

  return (
    <>
     <Navbar></Navbar>
     <div className='main w-6xl mx-auto border-2 border-green-800 grid grid-cols-4 gap-5 my-5 p-5'>
      <div className='left-side col-span-1 border border-purple-500'>
        <aside>
          <Sidebar></Sidebar>
        </aside> 
      </div>
      <div className='right-side col-span-3 border border-red-700'>
        <Outlet></Outlet>
      </div>
     </div>
     <Footer></Footer>

    </>
  )
}

export default App
