

import React from 'react';
import Founder1 from './assets/founder2.jpeg';
import Founder2 from './assets/founder1.jpg';
import Founder3 from './assets/founder3.jpeg';
import Navbar from './components/Navbar';
import { NavLink } from 'react-router-dom';
import pnggirl from './assets/pnggirl.png';
import prof1 from './assets/prof1.jpg';
import delivery from './assets/Deliveryservice.svg';
import verify from './assets/verify.png';
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'


const About = () => {
  return (
    <div className='h-full'>
      {/* Blue Header Section */}
      <div className='bg-cover bg-no-repeat h-full pt-5 bg-[#133BB7]'>
        <Navbar />
        <div className='px-5 flex justify-between mt-10 gap-[30px]'>
          <div className='ml-20 mt-20 w-1/2'>
            <h1 className='marcellus-bold text-[96px] text-white leading-[122px]'>Who we are</h1>
            <p className='text-white mt-5 w-[90%] poppins-light'>
              Reliable, efficient, and hassle-free deliveries with real-time tracking. We move your packages swiftly and securely, every time.
            </p>
          </div>
          <div className='ml-20 w-1/2'>
            <img className='h-full' src={delivery} alt='Delivery Illustration' />
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className='flex w-[80%] mx-auto mt-[120px]'>
        <div className='w-[572px] h-[598px]'>
          <img src={pnggirl} alt='Courier Girl' />
        </div>
        <div className='flex justify-center flex-col gap-5 ml-[50px]'>
          <div className='marcellus-extrabold text-[48px] leading-[60px] tracking-[0.25px] whitespace-nowrap'>
            Future of fast, smart,<br />
            and reliable <br />
            <span className='text-[#133BB7]'>delivery starts here.</span>
          </div>
          <ul className='popins-medium text-[18px] leading-[50px] tracking-[0.25px]'>
            <li className='flex items-center gap-3'><img className='h-5' src={verify} alt='check' />Over 10 years of experience</li>
            <li className='flex items-center gap-3'><img className='h-5' src={verify} alt='check' />Customer-Centric Approach</li>
            <li className='flex items-center gap-3'><img className='h-5' src={verify} alt='check' />Reliable & Secure</li>
            <li className='flex items-center gap-3'><img className='h-5' src={verify} alt='check' />Technology-Driven</li>
          </ul>
        </div>
      </div>

      {/* Clients Review Section */}
      <div className='bg-[#EAF0FF] py-20 mt-[100px]'>
        <div className='w-[80%] mx-auto'>
          <h2 className='text-[30px] font-semibold mb-10 text-[#133BB7]'>Clients Review</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {[1, 2, 3, 4].map((item, idx) => (
              <div key={idx} className='bg-white p-4 rounded-lg shadow-sm'>
                <div className='text-yellow-400 mb-2'>★★★★★</div>
                <p className='text-sm mb-2'>
                  {idx === 0 ? "Moveex handled my move smoothly and on time. Professional and hassle-free service!" :
                    idx === 1 ? "Transparent pricing and excellent service. Highly recommended for a stress-free move!" :
                    "Office relocation was seamless with Moveex. Fast, efficient, and reliable!"}
                </p>
                <p className='font-bold text-sm'>
                  {idx === 0 ? "Sarah L." : idx === 1 ? "Emily T" : "Michael R"}
                </p>
                <p className='text-xs text-gray-500'>
                  {idx === 0 ? "Dallas, US" : "Bangalore, IN"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className='w-[80%] mx-auto my-20'>
        <h2 className='text-[30px] font-bold text-center mb-3'>
          <span className='text-[#133BB7]'>Team</span> Members
        </h2>
        <p className='text-center text-gray-600 mb-10'>Meet our Experienced Team</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {[{
            name: "Shabaz Khan",
            title: "Co-Founder",
            img: Founder1
          }, {
            name: "Syed Kamran T",
            title: "Founder",
            img: Founder2
          }, {
            name: "Shoaib Ahmed",
            title: "Co-Founder",
            img: Founder3
          }].map((member, index) => (
            <div key={index} className='rounded-xl overflow-hidden shadow-md'>
              <img src={member.img} alt={member.name} className='w-full h-[400px] object-cover' />
              <div className='bg-[#133BB7] text-white text-center py-3'>
                <h3 className='font-bold text-lg'>{member.name}</h3>
                <p className='text-sm'>{member.title}</p>
              </div>
            </div>
          ))}
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

export default About;
