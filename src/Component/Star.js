import React from 'react'
import {FaStar, FaStarHalfAlt} from 'react-icons/fa'
import {AiOutlineStar} from 'react-icons/ai'


const Star = ({stars , reviews}) => {
    // console.log("stars page " , stars ,reviews)

    const rating=Array.from({length:5}, (elem,index)=>{
        let number=index+0.5;
        return(
            <span key={index} >
                {
                    stars >index+1 ?(
                        <FaStar className='text-orange-600'/>
                    ) : stars > number ? (<FaStarHalfAlt className='text-orange-600'/>)
                        :(<AiOutlineStar className='text-orange-600'/>)
                    
                }

            </span>
        )
    })
  return (
    <div>
      <p className='flex flex-row '>{rating}</p>
      <p>{reviews} Customer Reviews</p>
    </div>
  )
}

export default Star