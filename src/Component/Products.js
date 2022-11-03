import React from 'react'
import FilterSection from './FilterSection'
import ProductList from './ProductList'
import Short from './Short'
const Products = () => {
  // const {filter_products} =useFilterContext();
  // console.log( "filter_products ",filter_products);
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
          <ProductList />
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
