import React from 'react'
import logo from '../assets/logo.png'
import {NavLink,useNavigate} from 'react-router-dom'

const Navbar = () => {
  
  return (
    <div className=' text-white bg-black/40 backdrop-blur-md mx-5 rounded-[9px] '>
      <div className=' flex justify-between items-center p-5'>
        <div><img  className=' w-[181px]  cursor-pointer' src={logo} alt="" /></div>
        <div>
          <nav>
         <ul className=' flex gap-10'>
          <li><NavLink className=" outline-none text-sm border-none   poppins-medium tracking-[3px] hover:underline underline-offset-5  " to="/aboutus">ABOUT US</NavLink></li>
          <li><NavLink className=" outline-none text-sm border-none  poppins-medium tracking-[3px] hover:underline underline-offset-5" to="/contact">CONTACT</NavLink></li>
          <li><NavLink className=" outline-none text-sm border-none  poppins-medium tracking-[3px] hover:underline underline-offset-5" to="/courierer">BECOME A COURIER</NavLink></li>
         </ul>
          </nav>
        </div>
        <div className=' flex gap-5'>
          <button className='w-[119px] text-sm h-[50px] border-[2px] border-white text-white rounded-[9px] cursor-pointer poppins-medium tracking-[2px] hover:bg-[#133BB7] hover:border-none hover:shadow-xl transition-all ease-in delay-25 '>LOGIN</button>
          <button className='w-[119px] text-sm h-[50px] bg-[#133BB7] text-white rounded-[9px] cursor-pointer poppins-medium tracking-[2px] hover:bg-white hover:text-[#133BB7] hover:shadow-xl transition-all ease-in delay-25'>SIGNUP</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar