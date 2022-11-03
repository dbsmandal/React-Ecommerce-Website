import React from 'react'
import FormatPrice from '../Helpers/FormatPrice';
import { NavLink } from 'react-router-dom';

const ListView = ({products}) => {
  console.log("listView page ",products)
  return (
    <div>

      {
        products.map((curElem)=>{
          //object Destructring
          const {id,name,description,image,price}=curElem;
          return(
            <div className='grid grid-rows-2'>
              <div>
                {/* image */}
                <figure>
                  <img src={image} alt={name} />
                </figure>

              </div>
              <div>
                {/* data */}
                <p>{name}</p>
                <p><FormatPrice price={price}/></p>
                <p>{description.slice(0,50)}...</p> {/* slice function for short description*/}
                <NavLink to={`/singleproduct/${id}`}> 
                {/* to={`/singleproduct/${id}`}for  navigate to product details */}
                  <button>Read More</button>
                </NavLink>

              </div>


            </div>
          )

        })
      }
   
    </div>
  )
}

export default ListView
