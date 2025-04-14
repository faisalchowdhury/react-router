import React from 'react';
import { NavLink } from 'react-router';
import '../App.css'

const Navbar = () => {
    return (
        <>
        
        <div className='lg:w-6xl mx-auto'>
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
      <li><NavLink to="/blogs">Blogs</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
        </div>

        </>
    );
};

export default Navbar;