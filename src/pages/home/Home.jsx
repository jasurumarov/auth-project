import React from 'react'
import Hero from '../../components/hero/Hero'
import Benefits from '../../components/benefits/Benefits'
import Products from '../../components/products/Products'
import BenefitsBottom from '../../components/benefits-bottom/BenefitsBottom'

const Home = () => {
  return (
    <div className='home-page'>
        <Hero/>
        <Benefits/>
        <Products/>
        <BenefitsBottom/>
    </div>
  )
}

export default Home