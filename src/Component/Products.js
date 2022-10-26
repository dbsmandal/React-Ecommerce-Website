import React from 'react'
import {useProductContext} from '../Context/ProdutContext'
const Products = () => {
  const {products} =useProductContext()
  console.log(products)
  return (
    <div>
      Product Page
    </div>
  )
}

export default Products
