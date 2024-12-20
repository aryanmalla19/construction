import React from 'react'
import FoundersCard from '../components/ui/FoundersCard'

function OurFounders() {
    return (
        <div className='flex w-11/12 mt-20 mx-auto justify-between'>
            <div className='w-[45%]'>
                <img src="https://i.pinimg.com/736x/86/75/47/867547dc12286af703d1022867a1cf94.jpg" className='w-full rounded-xl' alt="" srcset="" />
            </div>
            <div className='w-6/12 flex flex-col'>
                <div className='w-11/12 mx-auto'>
                    <h1 className='text-4xl font-semibold'>Our Founders</h1>
                    <p className='text-gray-700 my-2'>The visionaries behind our renewable future</p>
                    <div className=''>
                        <FoundersCard name={"John Doe"} title={"Cheif Executive Officer (CEO)"} />
                        <FoundersCard name={"John Doe"} title={"Cheif Executive Officer (CEO)"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurFounders