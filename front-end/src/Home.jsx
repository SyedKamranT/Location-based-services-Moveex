import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './components/Navbar'
import backgroundImg from './assets/backgroundImg.png'
import worker from './assets/worker.png'
import factoryimage from './assets/factory.png'
import { CiSearch } from "react-icons/ci";


import twowheel from './assets/twowheel.png'
import fourwheel from './assets/fourwheel.png'
import twelvewheel from './assets/twelvewheel.png'

import bikeicon from './assets/bike.svg'
import caricon from './assets/car.svg'
import truckicon from './assets/truck.svg'

import manytrucks from './assets/trucktruck.png'

import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Home = () => {
  return (
    <div className=' h-full'>
      <div className=' bg-cover bg-no-repeat h-full pt-5 ' style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div>  <Navbar /></div>

        {/* main section */}
        <div className='px-5 flex justify-between  mt-10 gap-[30px]  '>
          {/* left div */}
          <div className='ml-20 w-1/2'>
            <img className='  h-full' src={worker} alt="" />
          </div>
          {/* right div */}
          <div className=' w-1/2 mt-[84px]'>
            <h1 className=' marcellus-bold  text-[96px] text-white leading-[122px] tracking-[0.25px] '>Moving Fast,<br /> Moving Smart</h1>
            <p className=' text-white mt-5 w-[90%] poppins-light'>Reliable, efficient, and hassle-free deliveries with real-time tracking. We move your packages swiftly and securely, every time.</p>
            <div className=' flex justify-between items-center bg-white rounded-[8px] mt-11 px-2 pl-5 w-[80%]  '>
              <input className='w-[572px] h-[70px] outline-none ' type="text" name="" id="" placeholder='Enter city or pincode' />
              <button className='cursor-pointer bg-[#0F1521] text-white w-[40%] flex justify-center py-4.5 gap-2 rounded-[6px] hover:bg-[#1d1d1d] '><span className='poppins-medium text-[14px]  tracking-[1px]'>Search</span> <CiSearch className='poppins-medium text-[20px] font-extrabold' /> </button>
            </div>
          </div>

        </div>


      </div>
      {/* white section */}
      <div className=' w-[80%] mx-auto bg-[#133BB7]/10 shadow-xl h-[599px]  my-[100px] rounded-[16px] flex justify-between'>
        <div className='flex justify-center flex-col gap-5  mx-[60px] '>
          <div className='bg-white w-[130px] h-[40px] text-[#133BB7] text-[16px] poppins-semibold rounded-[8px] flex justify-center items-center'><li>About Us</li></div>
          <div className='poppins-semibold text-[36px] leading-[50px] tracking-[0.25px]'>The future of <br />
            fast, smart, and reliable <br />
            <span className=' text-[#133BB7]'>delivery starts here.</span> </div>
          <div><button className=' bg-[#133BB7] text-white w-[154px] h-[60px] rounded-[8px] border-none poppins-medium text-[16px] cursor-pointer hover:bg-[#2352e0] hover:shadow-xl transition-all ease-in delay-25'>Learn More</button></div>
        </div>
        <div className='w-[572px] h-[598px]  '>
          <img src={factoryimage} alt="" />
        </div>
      </div>

      {/* blue section */}
      <div className=' h-[741px]  bg-[#133BB7] w-full py-[60px]'>
        <div className='w-[80%] mx-auto flex flex-col gap-[60px]'>
          <h1 className=' poppins-semibold text-[48px] text-white text-center leading-[70px]'>We deliver unmatched speed and <br /> reliability for every shipment.</h1>
          <div className=' flex justify-between '>
            <div className=' flex justify-center items-center flex-col hover:translate-y-2 ease-in delay-25 transition-all '>
              <div><img className=' w-[335px] h-[381px] hover:shadow-xl transition-all ease-in delay-25  ' src={twowheel} alt="" /></div>
              <div className='relative bottom-10 flex justify-center items-center bg-white rounded-full w-20 h-20'><img className='w-10 h-10' src={bikeicon} alt="" /></div>

            </div >
            <div className=' flex justify-center items-center flex-col hover:translate-y-2 ease-in delay-25 transition-all '>
              <div><img className=' w-[335px] h-[381px] hover:shadow-xl transition-all ease-in delay-25' src={fourwheel} alt="" /></div>
              <div className='relative bottom-10 flex justify-center items-center bg-white rounded-full w-20 h-20' ><img className='w-10 h-10' src={caricon} alt="" /></div>

            </div>
            <div className=' flex justify-center items-center flex-col hover:translate-y-2 ease-in delay-25 transition-all'>
              <div><img className=' w-[335px] h-[381px] hover:shadow-xl transition-all ease-in delay-25' src={twelvewheel} alt="" /></div>
              <div className='relative bottom-10 flex justify-center items-center bg-white rounded-full w-20 h-20'><img className='w-10 h-10' src={truckicon} alt="" /></div>

            </div>

          </div>

        </div>

      </div>
      {/* white section */}
      <div className=' w-[80%] mx-auto bg-[#133BB7]/10 shadow-xl h-[599px]  my-[100px] rounded-[16px] flex justify-start gap-[90px] '>

        <div className='w-[572px] h-[598px]'>
          <img src={manytrucks} alt="" />
        </div>
        <div className='flex justify-center flex-col gap-5   '>
          <div className='bg-white w-[193px] h-[40px] text-[#133BB7] text-[16px] poppins-semibold rounded-[8px] flex justify-center items-center'><li>Booking Services</li></div>
          <div className='poppins-semibold text-[36px] leading-[50px] tracking-[0.25px]'>Simple procedures for receiving <br />

            <span className=' text-[#133BB7]'>your shipment.</span> </div>
          <div><button className=' bg-[#133BB7] text-white w-[154px] h-[60px] rounded-[8px] border-none poppins-medium text-[16px] cursor-pointer hover:bg-[#2352e0] hover:shadow-xl transition-all ease-in delay-25'>Learn More</button></div>
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
  )
}

export default Home