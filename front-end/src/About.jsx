import React from 'react'
import Founder1 from './assets/founder1.jpg'
import Founder2 from './assets/founder2.jpeg'
import Founder3 from './assets/founder3.jpeg'
import Navbar from './components/Navbar'
import { NavLink } from 'react-router-dom'
import pnggirl from './assets/pnggirl.png'
import prof1 from './assets/prof1.jpg'
import delivery from './assets/Deliveryservice.svg'
import verify from './assets/verify.png'


const About = () => {
  return (
    <div className=' h-full'>
      <div className=' bg-cover bg-no-repeat h-full pt-5 bg-[#133BB7] ' >
        <div>  <Navbar /></div>
        {/* main section */}
        <div className='px-5 flex justify-between  mt-10 gap-[30px]  '>
          <div className=' ml-20 mt-20 w-1/2'>
            <h1 className=' marcellus-bold text-[96px] text-white leading-[122px] '>Who we are</h1>
            <p className=' text-white mt-5 w-[90%] poppins-light'>Reliable, efficient, and hassle-free deliveries with real-time tracking. We move your packages swiftly and securely, every time.</p>
          </div>
          {/* left div */}
          <div className='ml-20 w-1/2'>
            <img className='  h-full' src={delivery} alt="" />
          </div>
        </div>
      </div>
      {/* white section */}
      <div className=' flex  w-[80%] mx-auto mt-[120px]'>
        <div className='w-[572px] h-[598px]'>
          <img src={pnggirl} alt="" />
        </div>
        <div className='flex justify-center flex-col gap-5  ml-[50px] '>
          <div className='marcellus-extrabold text-[48px] leading-[60px] tracking-[0.25px] whitespace-nowrap'>Future of fast, smart,<br />
            and reliable  <br />
            <span className=' text-[#133BB7]'>delivery starts here.</span> </div>
          <ul className=' popins-medium text-[18px] leading-[50px] tracking-[0.25px]'>
            <li className='flex items-center gap-3 '><img className='h-5' src={verify} /> <span>Over 10 years of experience</span> </li>
            <li className='flex items-center gap-3 '><img className='h-5' src={verify} /> <span>Customer-Centric Approach</span> </li>
            <li className='flex items-center gap-3 '><img className='h-5' src={verify} /> <span>Reliable & Secure</span> </li>
            <li className='flex items-center gap-3 '><img className='h-5' src={verify} /> <span>Technology-Driven</span> </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About