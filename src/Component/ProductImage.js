import React, { useState } from 'react'

const ProductImage = ({ image = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(image[0])
  return (
    <div className='grid grid-cols-2 gap-5'>
      <div className='grid grid-rows-4'>
        {
          image.map((curElm, id) => {
            return (
              <div key={id}>
                <figure>
                  <img src={curElm.url} alt={curElm.filename} onClick={(curElm) => { setMainImage(curElm) }} key={id} />
                </figure>

              </div>

            )
          })
        }

      </div>
      <div>
        <figure>
          <img src={image[0].url} alt={mainImage.filename} />
        </figure>
      </div>

    </div>
  )
}

export default ProductImage;
