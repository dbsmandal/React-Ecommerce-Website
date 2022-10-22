import React from 'react'
import HeroSection from './HeroSection'
import Services from './Services'
import Trusted from './Trusted'

const Home = () => {
  const data={
    name:"Dbsmandal Store",
    image:"./images/dbsimage.jpg"
  }
  return (
    <div>
   <HeroSection mydata={data}/>
   <Services/>
   <Trusted/>
    </div>
  )
}

export default Home
