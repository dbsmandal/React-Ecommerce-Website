import React from 'react'
import { useFilterContext } from '../Context/FilterContext'

const FilterSection = () => {
  const { filters: { text }, updateFilterValue, all_products } = useFilterContext();


  const getUniqueData = (data, property) => {
    let newData = data.map((curElm) => {
      return curElm[property]
    })
    //for modifying data like (1,2,3,3,2,4,5=1,2,3,4,5) and "All" for add new category name All
    return (newData = ["All", ...new Set(newData)]
    )
  }

  //category data

  const categoryData = getUniqueData(all_products, "category")
  const companyData = getUniqueData(all_products, "company")

  return (
    <div className='grid gap-2'>
      <div className='bg-gray-200'>
        <form onSubmit={(e) => e.preventDefault()} >
          <input
            className=' border-2'
            type="text"
            placeholder='Search'
            name="text"
            value={text}
            onChange={updateFilterValue} />
        </form>
      </div>

      <div>
        <p className='bg-gray-200 font-semibold'>Category</p>
        <div>
          {
            categoryData.map((curElm, index) => {
              return (
                <button
                  key={index}
                  className='border-y-stone-300 flex '
                  type='button'
                  name='category'
                  value={curElm}
                  onClick={updateFilterValue} > {curElm} </button>
              )
            })
          }
        </div>
      </div>
      <div>
      <p className='bg-gray-200 font-semibold'>Category</p>
      <div>
       <form onSubmit={(e)=>e.preventDefault()}>
        <select name="company" id="company" onClick={updateFilterValue}>
          {
            companyData.map((curElm,index)=>{
              return <option key={index} name="company" value={curElm}>{curElm}</option>
            })
          }
        </select>
       </form>
      </div>


      </div>




    </div>
  )
}

export default FilterSection
