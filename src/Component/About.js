import React from 'react'
import HeroSection from './HeroSection'
import Services from './Services'
import Trusted from './Trusted';


const About = () => {
  const data={
    name:"React-Ecommerce Website",
    image:"./images/heroimage.png"
  }
  return (
    <div className='grid gap-y-3.5'>
      <div>
      <HeroSection mydata={data}/>

      </div>
      <div>
      <Services/>
    

      </div>
     
      <div className='pb-5'>
      <Trusted/>

      </div>
      <br />
      <br />
    </div>
  )
}

export default About
