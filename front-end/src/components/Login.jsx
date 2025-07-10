// src/components/Login.jsx
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import logo from '../assets/logoblue.png';
import googleIcon from '../assets/car.svg'; 
import hero from '../assets/Login.png';     // your left-side image

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.access_token)
      localStorage.setItem('userEmail', email)
      navigate('/bookdelivery');
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left image */}
      <div className="w-[1600px]">
        <img src={hero} alt="" className="w-full h-full object-cover"/>
      </div>

      {/* Right form */}
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="w-[400px]">
          <img src={logo} alt="moveex" className="mx-auto mb-6"/>
          <h2 className="text-2xl font-semibold mb-2">Log in to Get Started.</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email or phone number"
                className="w-full bg-gray-100 p-3 rounded focus:outline-none"
                required
              />
            </div>
            {/* Password */}
            <div className="relative">
              <label className="block text-sm mb-1">Password</label>
              <input
                type={showPass ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full bg-gray-100 p-3 rounded focus:outline-none"
                required
              />
              <span
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-11 text-gray-500 cursor-pointer"
              >
                {showPass ? <AiOutlineEyeInvisible size={20}/> : <AiOutlineEye size={20}/>}
              </span>
            </div>
            {/* Remember / Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={() => setRemember(!remember)}
                  className="h-4 w-4 mr-2 text-blue-600"
                />
                Remember me
              </label>
           
            </div>
            {/* Login button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
            >
              Login
            </button>
            
          </form>
          <p className="text-center text-sm mt-6">
            Don't have an account?{' '}
            <NavLink to="/signup" className="text-blue-600 hover:underline">
              Sign up now
            </NavLink>
          </p>
        </div>
      </div>
    </div>
);
};
export default Login;
