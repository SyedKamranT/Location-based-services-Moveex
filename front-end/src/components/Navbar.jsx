// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react'
import logo from '../assets/logo.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

const Navbar = () => {
  const navigate = useNavigate()
  const [loggedIn, setLoggedIn] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef()

  useEffect(() => {
    const token = localStorage.getItem('token')
    const email = localStorage.getItem('userEmail')
    if (token && email) {
      setLoggedIn(true)
      setUserEmail(email)
    }
  }, [])

  useEffect(() => {
    const handler = e => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userEmail')
    setLoggedIn(false)
    navigate('/')
  }

  const username = userEmail.split('@')[0]

  const promptLogin = () => {
    window.alert('Please log in to continue.')
    navigate('/login')
  }

  return (
    <div className="text-white bg-black/40 backdrop-blur-md mx-5 rounded-[9px]">
      <div className="flex justify-between items-center p-5">
        {/* Logo */}
        <div onClick={() => navigate('/')} className="cursor-pointer">
          <img className="w-[181px]" src={logo} alt="Moveex Logo" />
        </div>

        {/* Nav Links */}
        <nav>
          <ul className="flex gap-10 items-center">
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

            <li>
              {loggedIn ? (
                <NavLink
                  to="/bookdelivery"
                  className="text-sm poppins-medium tracking-[3px] hover:underline underline-offset-5"
                >
                  BOOK A DELIVERY
                </NavLink>
              ) : (
                <button
                  onClick={promptLogin}
                  className="text-sm poppins-medium tracking-[3px] hover:underline underline-offset-5"
                >
                  BOOK A DELIVERY
                </button>
              )}
            </li>
          </ul>
        </nav>

        {/* Auth / User Menu */}
        <div className="flex items-center">
          {loggedIn ? (
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setMenuOpen(o => !o)}
                className="flex px-4 py-2 bg-[#133BB7] rounded-[9px] poppins-medium hover:bg-gray-100 hover:text-[#133BB7] transition space-x-2"
              >
                <span>Welcome {username}</span>
                {menuOpen ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg overflow-hidden">
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-5">
              <button
                onClick={() => navigate('/login')}
                className="w-[119px] h-[50px] text-sm border-2 border-white rounded-[9px] poppins-medium tracking-[2px]
                           hover:bg-[#133BB7] hover:border-none hover:shadow-xl transition"
              >
                LOGIN
              </button>
              <button
                onClick={() => navigate('/signup')}
                className="w-[119px] h-[50px] text-sm bg-[#133BB7] rounded-[9px] poppins-medium tracking-[2px]
                           hover:bg-white hover:text-[#133BB7] hover:shadow-xl transition"
              >
                SIGNUP
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
