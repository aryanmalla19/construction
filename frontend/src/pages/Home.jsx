import React from 'react'
import Landing from '../layouts/Landing'
import Investors from '../components/ui/Investors'
import Benefits from '../layouts/Benefits'
import BestServices from '../layouts/BestServices'
import OurFounders from '../layouts/OurFounders'
import FaqSupport from '../layouts/FaqSupport'
import Renewal from '../components/Renewal'

function Home() {
  return (
    <div>
        <Landing/>
        <Investors/>
        <Benefits/>
        <BestServices/>
        <OurFounders/>
        <FaqSupport/> 
        <Renewal/>
    </div>
  )
}

export default Home