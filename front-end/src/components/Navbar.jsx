import React from 'react'
import logo from '../assets/logo.png'
import {NavLink,useNavigate} from 'react-router-dom'

const Navbar = () => {
  
  return (
    <div className=' text-white bg-black/40 backdrop-blur-md mx-5 rounded-[9px] '>
      <div className=' flex justify-between items-center p-5'>
        <div><img  className=' w-[181px] h-[30px] cursor-pointer' src={logo} alt="" /></div>
        <div>
          <nav>
         <ul className=' flex gap-10'>
          <li><NavLink className=" outline-none border-none hover:text-[#133BB7]" to="/aboutus">ABOUT US</NavLink></li>
          <li><NavLink className=" outline-none border-none hover:text-[#133BB7]" to="/contact">CONTACT</NavLink></li>
          <li><NavLink className=" outline-none border-none hover:text-[#133BB7]" to="/courierer">BECOME A COURIERER</NavLink></li>
         </ul>
          </nav>
        </div>
        <div className=' flex gap-5'>
          <button className='w-[119px] h-[50px] border-[2px] border-[#133BB7]  text-white rounded-[9px] cursor-pointer '>LOGIN</button>
          <button className='w-[119px] h-[50px] bg-[#133BB7] text-white rounded-[9px] cursor-pointer '>SIGNUP</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar