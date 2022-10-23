import React from 'react'

const Trusted = () => {
  return (
    <div  className=' h-48  max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-5xl   '>
        <div className='grid gap-y-2' >
        <h3 className='text-center font-semibold text-xl'>Trusted By 1000+ Companies</h3>
        <div className='grid grid-cols-5 gap-3 pl-2 pr-2'>
            <div  className=' grid place-content-center bg-gray-100 rounded-3xl  shadow-md overflow-hidden'>
                <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"
              alt="trusted-brands" />
            </div>
            <div  className=' grid place-content-center bg-gray-100 rounded-3xl   shadow-md overflow-hidden h-auto'>
                <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
              alt="trusted-brands" />
            </div>
            <div  className=' grid place-content-center bg-gray-100 rounded-3xl  shadow-md overflow-hidden'>
                <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"
              alt="trusted-brands" /> 
            </div>
            <div  className=' grid place-content-center bg-gray-100 rounded-3xl  shadow-md overflow-hidden'>
                <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"
              alt="trusted-brands" />
            </div>
            <div  className=' grid place-content-center bg-gray-100 rounded-3xl  shadow-md overflow-hidden'>
                <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png"
              alt="trusted-brands" />
             
            </div>
       
        </div>
        </div>
      
    </div>
  )
}

export default Trusted
