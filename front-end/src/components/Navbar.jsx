import React from 'react'
import logo from '../assets/logo.png'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <div className="text-white bg-black/40 backdrop-blur-md mx-5 rounded-[9px]">
      <div className="flex justify-between items-center p-5">
        {/* Logo */}
        <div onClick={() => navigate('/')} className="cursor-pointer">
          <img className="w-[181px]" src={logo} alt="Moveex Logo" />
        </div>

        {/* Nav Links */}
        <nav>
          <ul className="flex gap-10">
            <li>
              <NavLink
                to="/aboutus"
                className="text-sm poppins-medium tracking-[3px] hover:underline underline-offset-5"
              >
                ABOUT US
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-sm poppins-medium tracking-[3px] hover:underline underline-offset-5"
              >
                CONTACT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/courier"
                className="text-sm poppins-medium tracking-[3px] hover:underline underline-offset-5"
              >
                BECOME A COURIER
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Auth Buttons */}
        <div className="flex gap-5">
          <button
            onClick={() => navigate('/login')}
            className="w-[119px] h-[50px] text-sm border-2 border-white rounded-[9px] poppins-medium tracking-[2px]
                       hover:bg-[#133BB7] hover:border-none hover:shadow-xl transition-all ease-in delay-25"
          >
            LOGIN
          </button>
          <button
            onClick={() => navigate('/signup')}
            className="w-[119px] h-[50px] text-sm bg-[#133BB7] rounded-[9px] poppins-medium tracking-[2px]
                       hover:bg-white hover:text-[#133BB7] hover:shadow-xl transition-all ease-in delay-25"
          >
            SIGNUP
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
