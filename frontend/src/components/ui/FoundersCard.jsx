import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
function FoundersCard({name, title, faceboolin,instagramlin, linedinlin}) {
    return (
        <div className='flex flex-col border-b py-5 border-gray-400'>
            <div className='flex '>
                <img src="https://i.pinimg.com/736x/86/75/47/867547dc12286af703d1022867a1cf94.jpg" className='w-2/12 rounded-lg' alt="" />
                <div className='flex flex-col mx-4'>
                    <h4 className='text-lg font-semibold'>{name}</h4>
                    <p className='text-gray-700'>{title}</p>
                </div>
            </div>
            <h6 className='mt-2 mb-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati sed dolorum illo laborum totam hic, dignissimos animi quod fuga quia.</h6>
            <div className='flex text-main  text-2xl '>
                <div className='bg-gray-200 rounded-md p-1 mx-2'>
                <NavLink>
                    <FaFacebookF className='' />
                </NavLink>
                </div>
                <div className='bg-gray-200 rounded-md p-1 mx-2'>

                <NavLink>
                    <FaInstagram className='' />
                </NavLink>
                </div>
                <div className='bg-gray-200 rounded-md p-1 mx-2'>

                <NavLink>
                    <FaLinkedin className='' />
                </NavLink>
                </div>
            </div>
        </div>
    )
}

export default FoundersCard