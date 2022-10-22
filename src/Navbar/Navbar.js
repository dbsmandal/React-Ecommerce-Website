import React from 'react'
import logo from './logonew.png'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";


const Navbar = () => {
  return (
    <>

      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <Link to="/" className="flex items-center">
            <img src={logo} className="mr-3 h-6 sm:h-9" alt="React-Ecommerce-Website Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">React-Ecommerce-Website</span>
          </Link>
          <div className="flex items-center">
          
            <Link to="#" className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Login</Link>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
          <div className="flex items-center justify-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-base font-medium ">
              <li>
                <Link to="/" className="text-gray-900 dark:text-white hover:underline hover:text-sky-300" aria-current="page">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-900 dark:text-white hover:underline hover:text-sky-300">About</Link>
              </li>
              <li>
                <Link to="/product" className="text-gray-900 dark:text-white hover:underline hover:text-sky-300">Product</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-900 dark:text-white hover:underline hover:text-sky-300">Contact</Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-900 dark:text-white hover:underline hover:text-sky-300">
                  <FiShoppingCart className='relative h-8 w-8'/>
                  <span className='absolute top-12 left-3/4 text-lg pt-1 bg-green-300 rounded-3xl'>10</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>





    </>
  )
}

export default Navbar
