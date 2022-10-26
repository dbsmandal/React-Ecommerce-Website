import React from 'react'
import { NavLink } from 'react-router-dom';

const Product = (curElem) => {
  const {id, name, image, price, category}= curElem;

  return (
   
      <NavLink to={`/singleproduct/${id}`}>
        <div className='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
          <figure className=''> 
            <img className='rounded-t-lg' src={image} alt={name}/>
            <figcaption className='absolute text-lg -mt-16 text-white px-4'>{category}</figcaption>
          </figure> 
   
            <div className="grid grid-cols-2 gap-2 p-2	 place-items-center">
              <h3 className='font-bold text-sky-500 text-lg inline-block  '>{name}</h3>
              <p className='inline-block text-lg font-bold  '> Rs:{price}</p>
            </div>
          </div>

     

      </NavLink>

  )
}

export default Product
