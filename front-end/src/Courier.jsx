import React from 'react';
import Navbar from './components/Navbar';
import { NavLink } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Courier = () => {
  return (
    <div className="min-h-screen">
      {/* Top Navbar */}
      <div className='bg-cover bg-no-repeat h-full pt-5 pb-5 bg-[#133BB7]'>
        <Navbar />
      </div>

      {/* Title */}
      <div className="text-center mt-10">
        <h1 className="text-3xl font-semibold text-[#133BB7] underline underline-offset-6">
          Become a Courier
        </h1>
        <p className="mt-3 text-gray-600">Join our team of reliable and fast delivery partners</p>
      </div>

      {/* Form Section */}
      <div className="flex justify-center mt-10 px-6 lg:px-32 p-5">
        <form className="w-full max-w-2xl bg-white shadow-lg p-8 rounded-md border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 border border-gray-300 rounded-md"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 border border-gray-300 rounded-md"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="p-3 border border-gray-300 rounded-md"
              required
            />
            <input
              type="text"
              placeholder="City"
              className="p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <textarea
            placeholder="Why do you want to become a courier?"
            className="mt-6 w-full p-3 border border-gray-300 rounded-md h-32 resize-none"
          />

          <button
            type="submit"
            className="mt-6 w-full bg-[#133BB7] text-white py-3 rounded-md hover:bg-[#0f2f92]"
          >
            Submit Application
          </button>
        </form>
      </div>

{/* footer */}
      <div className=' bg-[#133BB7] w-full h-[480px] '>

        <div className=' w-[80%] h-full mx-auto py-[100px] text-white flex gap-[100px] justify-between items-start'>
          <div className='flex flex-col h-full justify-between text-white'>
            <h2 className=' poppins-bold text-[36px]'>Stay up to date with Us</h2>
            <p className=' poppins-regular text-[18px]'>Get in touch,</p>
            <div className='flex justify-between bg-transparent border-[2px] border-white w-[488px] py-[10px] pl-10 pr-[12px] rounded-[8px]   '>
              <input className='outline-none poppins-regular text-[18px]' type="text" name="" id="" placeholder='Enter your email address' />
              <button className='bg-white w-[171px] h-[54px] text-[#133BB7] rounded-[4px] poppins-medium text-[18px] cursor-pointer hover:bg-[#2352e0] hover:text-white hover: transition-all ease-in delay-25 '>Join Now </button>
            </div>
          </div>
          <div>

            <ul className=' flex flex-col gap-[18px]'>
              <h1 className=' poppins-semibold text-[24px]'>Menu</h1>
              <li><NavLink className="text-white/70 poppins-regular text-[20px] tracking-[0.5px]" to="/">Home page </NavLink> </li>
              <li><NavLink className="text-white/70 poppins-regular text-[20px] tracking-[0.5px]" to="/aboutus">About us </NavLink> </li>
              <li><NavLink className="text-white/70 poppins-regular text-[20px] tracking-[0.5px]" to="/contact">Contact us </NavLink> </li>
              <li><NavLink className="text-white/70 poppins-regular text-[20px] tracking-[0.5px]" to="/courier">Become a courierer</NavLink> </li>

            </ul>
          </div>

          <div>

            <ul className='flex-col flex gap-[18px]'>

              <h1 className=' poppins-semibold text-[24px]'>Register</h1>
              <li><NavLink className="text-white/70 poppins-regular text-[20px] tracking-[0.5px]" to="/login">Login Page </NavLink> </li>
              <li><NavLink className="text-white/70 poppins-regular text-[20px] tracking-[0.5px]" to="/signup">Signup Page </NavLink> </li>
            </ul>
          </div>
          <div className=' flex flex-col gap-10'>
            <FaFacebook className=' w-[40px] h-[40px]' />
            <FaLinkedin className=' w-[40px] h-[40px]' />
            <FaXTwitter className=' w-[40px] h-[40px]' />
          </div>

        </div>

      </div>
      <div className=' w-[80%] h-[45px] text-[#133BB7] mx-auto flex justify-between items-center '>
        <p className='poppins-regular text-[14px]'>© 2011 All Rights Reserved Moveex Pvt Ltd</p>

        <div className=' flex items-center flex-row gap-2 text-[#133BB7]'>
          <NavLink className=" poppins-regular text-[14px] tracking-[0.5px]" to="/">Home page </NavLink> |
          <NavLink className="poppins-regular text-[14px] tracking-[0.5px]" to="/contact">Contact</NavLink> |
          <NavLink className=" poppins-regular text-[14px] tracking-[0.5px]" to="/">Privacy policy </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Courier;
