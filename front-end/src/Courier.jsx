// src/components/Courier.jsx
import React, { useState } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'

const Courier = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    company: "",
    message: ""
  })
  const [status, setStatus] = useState("")

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:5000/api/courier/apply", form)
      setStatus("Your application has been sent! We’ll be in touch soon.")
      setForm({ name: "", email: "", phone: "", city: "", company: "", message: "" })
    } catch (err) {
      setStatus(err.response?.data?.error || "Something went wrong")
    }
  }

  return (
    <div className="min-h-screen">
      <div className="bg-[#133BB7] pt-5 pb-5">
        <Navbar />
      </div>

      <div className="text-center mt-10">
        <h1 className="text-3xl font-semibold text-[#133BB7] underline underline-offset-6">
          Become a Courier
        </h1>
        <p className="mt-3 text-gray-600">
          Join our team of reliable and fast delivery partners
        </p>
      </div>

      <div className="flex justify-center mt-10 px-6 lg:px-32 p-5">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl bg-white shadow-lg p-8 rounded-md border border-gray-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {["name","email","phone","city","company"].map(field => (
              <input
                key={field}
                name={field}
                type={field === "email" ? "email" : "text"}
                placeholder={field === "company" ? "Company Name" : field.charAt(0).toUpperCase()+field.slice(1)}
                className="p-3 border border-gray-300 rounded-md"
                value={form[field]}
                onChange={handleChange}
                required={field !== "company"}
              />
            ))}
          </div>

          <textarea
            name="message"
            placeholder="Why do you want to become a courier?"
            className="mt-6 w-full p-3 border border-gray-300 rounded-md h-32 resize-none"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="mt-6 w-full bg-[#133BB7] text-white py-3 rounded-md hover:bg-[#0f2f92]"
          >
            Submit Application
          </button>

          {status && (
            <p className="mt-4 text-center text-green-600">{status}</p>
          )}
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
