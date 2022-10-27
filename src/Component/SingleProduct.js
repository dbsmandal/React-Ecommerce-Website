import React from 'react'
import { useParams } from 'react-router-dom';
import { useProductContext } from '../Context/ProdutContext'

const SingleProduct = () => {

  const {id} =useParams();
  console.log("ssssssss", id)

  const {singleProductData} =useProductContext();
  console.log(singleProductData,"single Product page")
  return (
    <div>
      SingleProduct some
    </div>
  )  
}

export default SingleProduct
