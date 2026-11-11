import React from 'react'
import HeroSection from '../home/HeroSection'
import FeaturedCars from '../home/FeaturedCars'
import QuickCarSearch from '../home/QuickCarSearch'
import ElectricVehicles from '../home/ElectricVehicles'
import WhyTataMotor from '../home/WhyTataMotor'
import TechnologyFeatures from '../home/TechnologyFeatures'
import NewsUpdates from '../home/NewsUpdates'
import Testimonials from '../home/Testimonials'
import FAQ from '../home/FAQ'

const Home = () => {
  return (
    <div className='mt-15'>
      <HeroSection/>
      <FeaturedCars/>
      <QuickCarSearch/>
      <ElectricVehicles/>
      <WhyTataMotor/>
      <TechnologyFeatures/>
      {/* <NewsUpdates/> */}
      <Testimonials/>
      <FAQ/>
    </div>
  )
}

export default Home
