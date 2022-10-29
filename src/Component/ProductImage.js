import React, { useState } from 'react'

const ProductImage = ({ images = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(images[0])
  return (
    <div className=' grid grid-cols-2  '>
      <div className='grid justify-center gap-2' >
         {images.map((curElm, index) => {
          return (
           <div className=' '>
             <figure >
              <img
                src={curElm.url}
                alt={curElm.filename}
                className="w-32 h-24 rounded-xl  shadow-md overflow-hidden"
                key={index}
                onClick={() => setMainImage(curElm)}
              />
            </figure>
           </div>
          );
        })}

      </div>
      <div className='flex items-center'>
        <figure>
          {/* <img src={mainImage.url} alt={mainImage.filename} /> */}
          <img src={mainImage.url} alt={mainImage.filename} className="w-72 h-56 rounded-2xl  shadow-md overflow-hidden" />
        </figure>
      </div>

    </div>
  )
}

export default ProductImage;
