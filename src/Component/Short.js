import React from 'react';
import {BsCardList,BsGridFill} from 'react-icons/bs';
import { useFilterContext } from '../Context/FilterContext';



const Short = () => {
  const {grid_view,setListView,setGridView,filter_products}=useFilterContext();
  return (
    <div className='grid grid-cols-3 place-items-center '>
      <div className='flex gap-3'>
        <button className={grid_view ? "active:bg-white  text-green-500":"bg-white"} onClick={setGridView}><BsGridFill className='h-6 w-6'/></button>
        <button className={grid_view ? "bg-white":"active:bg-white  text-green-500"} onClick={setListView}><BsCardList className='h-6 w-6'/></button>
      </div>
      <div>
        <p> <span className='font-bold'>{filter_products.length}</span> Total Products </p>
      </div>
      <div>
        <select name="" id="">
          <option value="">one</option>
          <option value="">two</option>
          <option value="">three</option>

        </select>
      </div>

    </div>
  )
}

export default Short
