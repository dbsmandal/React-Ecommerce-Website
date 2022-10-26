import React from 'react'
import HeroSection from './HeroSection';
import FeatureProduct from '../Component/FeatureProduct'
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
        <FeatureProduct/>
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
