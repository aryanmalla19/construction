import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import FAQ from '../components/FAQ';

function FaqSupport() {
  return (
    <div className='w-11/12 my-20 mx-auto flex'>
        <div className='w-5/12 flex pt-7 flex-col'>
            <h1 className='text-5xl font-semibold mb-3'>We Have 24/7 <h1 className='mt-2'>Support Available</h1></h1>
            <p className='text-gray-700 mt-2 mb-5'>In case, you're still looking for answers.</p>
            <div>
            <button className='py-3 px-8 flex justify-center items-center rounded-full bg-secondary text-black'>
                <h1 className='font-normal text-base'>Contact Support </h1>
                <div>
                <FaArrowRight className='text-base ml-2'/>
                </div>
            </button>
            </div>
        </div>

        <div className='w-7/12'>
            <FAQ/>
        </div>
    </div>
  )
}

export default FaqSupport