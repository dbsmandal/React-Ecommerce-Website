import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <div className=' bg-gray-400 grid grid-flow-row gap-20 pb-10  bottom-0 z-10 '>

            <div className='relative '>
                <div className='place-self-center w-2/4 h-28 grid grid-col-2 grid-flow-col rounded-xl shadow-md overflow-hidden bg-white absolute -top-14 left-1/4'>
                    <div className='place-self-center'>  <h2>Ready to get started? </h2>
                        <h2>Talk to us today</h2></div>

                    <div className='place-self-center'>
                        <NavLink className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' to='/contact'>Get Started</NavLink></div>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-x-5 pl-5 pr-5'>
                <div className='rounded-xl shadow-md overflow-hidden bg-white w-full h-28  grid place-content-center' >
                    <h1 className='font-semibold text-lg'>React Ecommerce Store</h1>
                    <p>Enjoy your Shopping with family</p>
                </div>
                <div className='rounded-xl shadow-md overflow-hidden bg-white w-full h-28  grid place-content-center'>
                    <h2 className='font-semibold text-sm'>Subscribe to get important updates</h2>
                    <form action="" className='h-auto w-fit  place-self-center'>
                        <input
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                            type="email"
                            name="Email"
                            placeholder="Email"
                            autoComplete="off"
                            required
                        />
                        <button className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Subscribe</button>
                    </form>
                </div>
                <div className='rounded-xl shadow-md overflow-hidden bg-white w-full h-28  grid place-content-center '>
                    <h1 className='font-semibold text-lg'>Follows Us</h1>

                    <div className=" grid grid-cols-3 gap-5 ">
                     
                            <a
                                href="https://www.linkedin.com/feed/?trk=nav_back_to_linkedin"
                                rel="noreferrer"
                                target="_blank">
                                <FaLinkedin className="w-10 h-10 hover:bg-emerald-500 rounded-full" />
                            </a>

                     
                     
                            <a
                                href="https://www.facebook.com/"
                                rel="noreferrer"
                                target="_blank">
                                <FaFacebook className="w-10 h-10 hover:bg-emerald-500 rounded-full" />
                            </a>
                        
                 
                            <a
                                href="https://github.com/dbsmandal"
                                rel="noreferrer"
                                target="_blank">
                                <FaGithub className="w-10 h-10 hover:bg-emerald-500 rounded-full"/>
                            </a>
                    
                    </div>
                </div>
                <div className='rounded-xl shadow-md overflow-hidden bg-white w-full h-28  grid place-content-center'>
                    <h1 className='font-semibold text-lg'>Call Us</h1>
                    <p>+91 9734078407</p></div>

            </div>

        </div>
    )
}

export default Footer
