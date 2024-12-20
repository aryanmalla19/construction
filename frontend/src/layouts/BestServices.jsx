import React from 'react'
import BestServicesCard from '../components/ui/BestServicesCard'

export default function BestServices() {
  return (
    <div className='my-10 w-11/12 mx-auto flex flex-col'>
        <div className='flex justify-between border-b border-gray-400 py-10'>
        <h1 className='text-4xl  font-bold w-3/12'>Providing <br /> Best Services</h1>
        <p className='w-7/12 text-gray-700'>We are Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita possimus quibusdam amet magni non. In labore odit aut asperiores doloremque sit corrupti voluptas ipsam iusto possimus dolor, quaerat, voluptatum accusamus omnis cum numquam adipisci rem assumenda neque officiis? Nostrum porro ratione cumque, expedita a quia fugit dignissimos sed est repudiandae.</p>
        </div>
        <div className=''>
            <BestServicesCard image='https://i.pinimg.com/736x/6a/5f/94/6a5f9423f4d61bbf677e7d057c50713f.jpg' title='Renewable Energy Solutions' desc="We are Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita possimus quibusdam amet magni non. In labore odit aut asperiores doloremque sit corrupti voluptas ipsam iusto possimus dolo." link="/somthing" />
            <BestServicesCard image='https://i.pinimg.com/736x/6a/5f/94/6a5f9423f4d61bbf677e7d057c50713f.jpg' title='Renewable Energy Solutions' desc="We are Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita possimus quibusdam amet magni non. In labore odit aut asperiores doloremque sit corrupti voluptas ipsam iusto possimus dolo." link="/somthing" />
            <BestServicesCard image='https://i.pinimg.com/736x/6a/5f/94/6a5f9423f4d61bbf677e7d057c50713f.jpg' title='Renewable Energy Solutions' desc="We are Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita possimus quibusdam amet magni non. In labore odit aut asperiores doloremque sit corrupti voluptas ipsam iusto possimus dolo." link="/somthing" />
        </div>
    </div>
  )
}
