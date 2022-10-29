import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNavigation = ({title}) => {
  return (
    <div className="flex flex-wrap  mx-auto max-w-screen-xl px-4 md:px-6 py-2.5" >
      <NavLink className='text-sky-500 text-lg' to ='/'>Home</NavLink>/{title}
      
    </div>
  )
}

export default PageNavigation
