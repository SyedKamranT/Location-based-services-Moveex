// src/App.jsx
import React, { useEffect } from 'react'
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
  useNavigate
} from 'react-router-dom'
import Home from './Home'
import Login from './components/Login'
import Signup from './components/Signup'
import About from './About'
import Contact from './Contact'
import Courier from './Courier'
import BookDelivery from './components/BookDelivery'
import OrderSuccess from './components/OrderSuccess'
import './App.css'

// ProtectedRoute with alert + redirect
const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      alert('Please log in to continue.')
      navigate('/login', { replace: true })
    }
  }, [navigate])

  // only render the child if token exists
  return localStorage.getItem('token') ? children : null
}

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/aboutus', element: <About /> },
  { path: '/contact', element: <Contact /> },
  { path: '/courier', element: <Courier /> },
  {
    path: '/bookdelivery',
    element: (
      <ProtectedRoute>
        <BookDelivery />
      </ProtectedRoute>
    ),
  },
  { path: '/ordersuccess', element: <OrderSuccess /> },
])

export default function App() {
  return <RouterProvider router={router} />
}
