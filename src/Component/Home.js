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

export default Home
