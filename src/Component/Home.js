import React from 'react'
import HeroSection from './HeroSection'

const Home = () => {
  const data={
    name:"Dbsmandal Store",
    image:"./images/dbsimage.jpg"
  }
  return (
    <div>
   <HeroSection mydata={data}/>
    </div>
  )
}

export default Home
