import React from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
const Navbar = () => {
  const {cart}=useSelector((state)=>state)
  return (
    <div>
        <nav className='flex justify-between items-center max-w-6xl mx-auto h-20 text-white'>
            <NavLink to='/'>
            <div className='ml-5'>
            <img src={logo} width='150px' />
            </div>
            </NavLink>
        <div className='flex items-center font-medium gap-5 space-x-6'>
            <NavLink to='/'>
                Home
            </NavLink>
            <NavLink to='/cart'>
            <button className='relative  hover:cursor-pointer'>
              <FaShoppingCart className='text-2xl'/>
              {
                cart.length>0 &&
                <span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 justify-center items-center
                flex animate-bounce rounded-full'>{cart.length}</span>
                
              }
            </button>
            </NavLink>
        </div>
        </nav>
    </div>
  )
}

export default Navbar