import React from 'react'
import FormatPrice from '../Helpers/FormatPrice';
import { NavLink } from 'react-router-dom';

const ListView = ({ products }) => {
  // console.log("listView page ", products)
  return (
    <div className='max-w-4xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 gap-10 '>

      {
        products.map((curElem) => {
          //object Destructring
          const { id, name, description, image, price } = curElem;
          return (
            <div
              key={id}
              className='grid grid-cols-2 gap-px rounded-lg border border-gray-200 shadow-md dark:bg-gray-800'>
              <div className=' grid place-content-center p-2'>
                {/* image */}
                <figure>
                  <img src={image} alt={name} className='h-72 w-96   rounded-2xl p-2 ' />
                </figure>

              </div>

              <div className="   grid place-content-center  p-2  ">
                {/* data */}
                <div className='font-bold text-sky-500 text-2xl inline-block p-1  '>Name: {name}</div>
                <div className='p-1 inline-block text-xl font-bold'>Price: <FormatPrice price={price}  /></div>
                <div className='p-1 text-lg justify-around'><span className='font-bold'>Description:</span> {description.slice(0, 120)}...</div> {/* slice function for short description*/}
                <NavLink className='p-1' to={`/singleproduct/${id}`}>
                  {/* to={`/singleproduct/${id}`}for  navigate to product details */}
                  <button className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Read More</button>
                </NavLink>


              </div>


            </div>
          )

        })
      }

    </div>
  )
}

export default ListView
