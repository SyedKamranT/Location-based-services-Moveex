import React from 'react';
import Navbar from './components/Navbar';
import mapImg from './assets/map.jpg'; // Ensure this image matches the one in your design
import { NavLink } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="min-h-screen">
           <div className='bg-cover bg-no-repeat h-full pt-5 pb-5 bg-[#133BB7]'>
        <Navbar />
      </div>

      <div className="text-center mt-10">
        <h1 className="text-3xl font-semibold text-[#133BB7] underline underline-offset-6">Get In Touch</h1>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-start gap-10 mt-10 px-10 lg:px-32">
        {/* Left - Form */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-lg font-medium mb-4">Leave us a message</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-400 p-3 rounded-md"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-400 p-3 rounded-md"
            />
            <textarea
              placeholder="Your Message"
              className="border border-gray-400 p-3 rounded-md h-40 resize-none"
            />
            <button className="bg-[#133BB7] text-white py-2 rounded-md hover:bg-[#0f2f92]">
              Send
            </button>
          </form>
        </div>

        {/* Right - Map */}
        <div className="w-full lg:w-1/2 pb-20">
          <img src={mapImg} alt="Map Location" className="h-[600px] rounded-md shadow-md " />
        </div>
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

export default Contact;
