import React from 'react'
import { useFilterContext } from '../Context/FilterContext'

const FilterSection = () => {
  const {filters:{text},updateFilterValue,all_products }=useFilterContext();


  const getUniqueData=(data,property)=>{
    let newData=data.map((curElm)=>{
      return curElm[property]

    })
    //for modifying data like (1,2,3,3,2,4,5=1,2,3,4,5) and "All" for add new category name All

    newData=["All", ...new Set(newData)]


    console.log("getUnique Data",newData)

  }


//category data

const categoryData=getUniqueData(all_products,"category")

  return (
    <div>
      <form onSubmit={(e)=>e.preventDefault()} >
        <input 
        className=' border-2'
        type="text" 
        name="text" 
        value={text} 
        onChange={updateFilterValue} />
      </form>
            
    </div>
  )
}

export default FilterSection
