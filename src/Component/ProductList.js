import React from 'react';
import FormatPrice from '../Helpers/FormatPrice';

const ProductList = ({products}) => {
  console.log("productlistpage", products);
  return (
    <div className='grid grid-cols-3 gap-5'>
      {products.map((curElem, index)=>{
        const {image, name, price}=curElem
        return(
          <div
          className='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ' 
           key={index}>
          <div>
          <figure>
              <img className='rounded-lg' src={image} alt={name}/>
            </figure>
          </div>
          <div className="grid grid-cols-2 gap-2 p-2	 place-items-center">
            <p className='font-bold text-sky-500 text-lg inline-block  '>{name}</p>
            <p className='inline-block text-lg font-bold  '><FormatPrice price={price}/></p>
          </div>

          </div>
        )
      })}
    </div>
  )
}

export default ProductList
