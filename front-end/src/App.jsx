import { useState } from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './Home'
import Login from './components/Login'
import Signup from './components/Signup'
import About from './About'
import Contact from './Contact'
import Courier from './Courier'
import BookDelivery from './components/BookDelivery'
import { createRoot } from 'react-dom/client'
import React from 'react'
import OrderSuccess from './components/OrderSuccess'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter(
    [
      {
        path: '/',
        element : <Home />,
      },{
        path : '/login',
        element : <Login />,
      },
      {
        path : '/signup',
        element : <Signup />,
      },
      {
        path :'/aboutus',
        element : <About/>
      },{
        path : '/contact',
        element : <Contact/>
      },
      {
        path : '/courier',
        element : <Courier/>
      },
      {
        path : '/bookdelivery',
        element : <BookDelivery/>
      },
      {
        path : '/ordersuccess',
        element : <OrderSuccess/>
      }
      
    ]
  )
  

  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  )
}

export default App
