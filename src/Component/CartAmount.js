import React from 'react';
import {FaMinus, FaPlus} from 'react-icons/fa'

const CartAmount = ({amount, setDecrase, setIncrease}) => {
  return (
    <div className='flex gap-5'>
      <button onClick={()=>{setDecrase() }}><FaMinus/></button>
      <div>{amount}</div>
      <button onClick={()=>{setIncrease() }}><FaPlus/></button>

      
    </div>
  )
}

export default CartAmount
