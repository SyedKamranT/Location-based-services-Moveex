import React from 'react';
import Navbar from './components/Navbar';

const Courier = () => {
  return (
    <div className="min-h-screen">
      {/* Top Navbar */}
      <div className="bg-[#133BB7]">
        <Navbar />
      </div>

      {/* Title */}
      <div className="text-center mt-10">
        <h1 className="text-3xl font-semibold text-[#133BB7] underline underline-offset-4">
          Become a Courier
        </h1>
        <p className="mt-3 text-gray-600">Join our team of reliable and fast delivery partners</p>
      </div>

      {/* Form Section */}
      <div className="flex justify-center mt-10 px-6 lg:px-32">
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

export default Courier;
