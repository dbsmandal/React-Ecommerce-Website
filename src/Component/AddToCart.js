import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa";
import CartAmount from './CartAmount';
import { NavLink } from 'react-router-dom';


const AddToCart = ({ singleProductData }) => {
  const { id, colors, stock } = singleProductData;
  const [color, setColor] = useState(colors[0])
  const [amount, setAmount] = useState(1);


  const setDecrase = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1)
  };
  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock)
  }



  return (
    <>
      <div>
        <div className='flex flex-row gap-10'>
          Colors :
          {colors.map((curColor, index) => {
            return (
              <div key={index}
              >
                <button key={index}
                  style={{ backgroundColor: curColor }}
                  className={color === curColor ? "active:opacity-1 rounded-3xl h-10 w-10" : ' opacity-0.5 rounded-3xl h-10 w-10 hover:opacity-1 '}
                  onClick={()=>{setColor(curColor)}}
                >
                  {color === curColor ? <FaCheck className='text-white' /> : null}
                </button>
              </div>
            )

          })}
        </div>
      </div>
      {/* CartAmount */}
      <CartAmount
        amount={amount}
        setDecrase={setDecrase}
        setIncrease={setIncrease}

      />

      <NavLink to='/cart'>
        <button className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' >Add To Cart</button>
      </NavLink>

    </>
  )
}

export default AddToCart
