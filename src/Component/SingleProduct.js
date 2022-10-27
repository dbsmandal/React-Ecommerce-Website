import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useProductContext } from '../Context/ProdutContext'
const API = 'https://api.pujakaitem.com/api/products';

const SingleProduct = () => {
  const { getSingleProduct, singleProductData, } = useProductContext()

  //get id parmas for matching url
  const { id } = useParams();



  //destructuring data

  const { id: alias, name } = singleProductData

  // console.log(singleProductData,"single Product page")

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`)
  }, []);

  return (
    <>

      <div>
        SingleProduct some {alias} <br />{name}

      </div>


      <br />
      <br />
      <br />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
     
     
   
      
      
    </>

  )
}

export default SingleProduct
