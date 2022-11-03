import React from 'react'
import Product from './Product'

const GridView = ({products}) => {
    console.log("gridviewpage",products)
  return (
    <div className='grid grid-cols-3 gap-10'>
        {
            products.map((curElem)=>{
                return <Product key={curElem.id} {...curElem} />

            })
        }
      
    </div>
  )
}

export default GridView
