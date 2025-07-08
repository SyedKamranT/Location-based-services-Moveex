import React from 'react';
import Navbar from './components/Navbar';
import mapImg from './assets/map.jpg'; // Ensure this image matches the one in your design

const Contact = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-[#133BB7]">
        <Navbar />
      </div>

      <div className="text-center mt-10">
        <h1 className="text-3xl font-semibold text-[#133BB7] underline underline-offset-4">Get In Touch</h1>
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
        <div className="w-full lg:w-1/2">
          <img src={mapImg} alt="Map Location" className="rounded-md shadow-md" />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#133BB7] mt-20 text-white py-10 px-10 lg:px-32">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-2">Stay up to date with Us</h3>
            <p className="text-sm mb-4">Get in touch,</p>
            <div className="flex border border-white rounded-md overflow-hidden w-fit">
              <input
                type="email"
                placeholder="Enter your email address"
                className="p-2 outline-none text-black"
              />
              <button className="bg-white text-[#133BB7] px-4 py-2 font-semibold">Join now</button>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-2">Menu</h4>
            <ul className="space-y-1 text-sm">
              <li>Home Page</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">Register</h4>
            <ul className="space-y-1 text-sm">
              <li>Login Page</li>
              <li>Signup Page</li>
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <i className="fab fa-facebook-f text-xl"></i>
            <i className="fab fa-linkedin-in text-xl"></i>
            <i className="fab fa-twitter text-xl"></i>
          </div>
        </div>

        <div className="text-xs text-center mt-10">
          © 2011 All Rights Reserved Moveex Pvt Ltd
        </div>
      </footer>
    </div>
  );
};

export default Contact;
