import React from 'react'
import BenefitCard from '../components/ui/BenefitCard'
import { FaBuilding, FaLeaf, FaHandshake } from "react-icons/fa";
function Benefits() {
  return (
    <div className='w-11/12 mx-auto flex rounded-md flex-col bg-gray-200 mt-20 mb-10'>
        <h1 className='text-4xl text-center my-5 pt-10 font-bold'>Our Main Benefits</h1>
        <p className='w-6/12 text-center text-gray-700 mx-auto '>We offer innovative solutions that only enhance environmental sustainablity but also drive economic efficiency.</p>
        <div className='flex justify-around mt-20'>
            <BenefitCard icon={<FaBuilding/>} title={'Innovative Green Technologies'} desc={'Explore our cutting-edge solutions designed to reduce environmental impact and promote sustainablity.'} />
            <BenefitCard icon={<FaBuilding/>} title={'Innovative Green Technologies'} desc={'Explore our cutting-edge solutions designed to reduce environmental impact and promote sustainablity.'} />
            <BenefitCard icon={<FaBuilding/>} title={'Innovative Green Technologies'} desc={'Explore our cutting-edge solutions designed to reduce environmental impact and promote sustainablity.'} />
        </div>
    </div>
  )
}

export default Benefits