import React from 'react'
import HeroSection from './HeroSection'


const About = () => {
  const data={
    name:"React-Ecommerce Website",
    image:"./images/heroimage.png"
  }
  return (
    <div>
      <HeroSection mydata={data} />
    </div>
  )
}

export default About
