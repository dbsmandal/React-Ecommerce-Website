import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = ({mydata}) => {
    // console.log(mydata)
    const {name,image}=mydata
  return (
    <div className='grid  p-5 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-5xl    '>
        <div className='grid  sm:grid-col-2 grid-flow-row gap-5 md: grid-cols-3  lg:grid-cols-5 '>
            <div className='sm:col-span-1 md:col-span-2 text-left space-y-3 lg:col-span-3  '>
                <p className='text-sky-500 text-lg'>Welcome to</p>
                <h1 className='font-semibold text-2xl font-serif'>{name }</h1>
                <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero eligendi culpa sequi officia quidem? Quos a quisquam dolorem dolor explicabo voluptas, laudantium cupiditate qui nemo minus nulla architecto reiciendis maiores.</p>
                <p>
                <Link  className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' to='/product'>Shop Now</Link>
                </p>
            </div>
            <div className='sm:col-span-1 md:col-span-1 lg:col-span-2'>
              
                    <img className='object-fill h-48 w-48 md:w-72 lg:w-96 rounded-3xl' src={image} alt="Hero Section img" />

            </div>
        </div>
      
    </div>
  )
}

export default HeroSection
