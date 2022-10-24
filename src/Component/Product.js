import React, { useContext } from 'react'
import { AppContext } from '../Context/ProdutContext'

const Product = () => {
  const mydata=useContext(AppContext)
  return (
    <div>
      {mydata}
      Product Page
    </div>
  )
}

export default Product
