import React from 'react'
import { useFilterContext } from '../Context/FilterContext'

const FilterSection = () => {
  const {filters:{text},updateFilterValue}=useFilterContext()
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
