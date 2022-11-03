import React from 'react'
import {useProductContext} from '../Context/ProdutContext'
import FilterSection from './FilterSection'
import ProductList from './ProductList'
import Short from './Short'
const Products = () => {
  const {products} =useProductContext()
  console.log( "all products",products)
  return (

    <>
    
    <div className='grid grid-cols-12 '>
      <div className='col-span-3'>
        <FilterSection/>
      </div>
      <div className='col-span-9'>
        <div>
          <Short/>
        </div>
        <div>
          <ProductList products={products}/>
        </div>


      </div>
    </div>
      <br />
      <br />
      <br />
      <br />
      
     
     
   
      
      
    </>
  )
}

export default Products
