import React from 'react'

function BenefitCard({icon,title,desc}) {
  return (
    <div className='w-[30%] py-5 mb-10 bg-white flex flex-col rounded-lg border '>
        <div className='w-10/12 mx-auto'>
        <div className='bg-gray-200 w-2/12 text-3xl flex justify-center items-center py-2 rounded-md text-secondary'>
            {icon}
        </div>
        <h2 className='font-semibold mt-4 mb-1'>{title}</h2>
        <p className='text-gray-600'>{desc}</p>
        </div>
    </div>
  )
}

export default BenefitCard