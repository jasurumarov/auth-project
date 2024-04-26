import React from 'react'
import Hero from '../../components/hero/Hero'
import Benefits from '../../components/benefits/Benefits'
import BenefitsBottom from '../../components/benefits-bottom/BenefitsBottom'

const Home = () => {
  return (
    <div className='home-page'>
        <Hero/>
        <Benefits/>
        <BenefitsBottom/>
    </div>
  )
}

export default Home