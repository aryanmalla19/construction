import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function BestServicesCard({link, image, title,desc}) {
  return (
    <div className='w-full flex items-center py-10 border-b border-gray-400 justify-between'>
        <img className="w-3/12 rounded-lg" src={image} alt={image} srcset="" />
        <h1 className="text-3xl w-[21%] font-semibold">{title}</h1>
        <p className="w-5/12 text-gray-700">{desc}</p>
        <NavLink to={link}>
        <div className='rounded-full p-3 text-main border border-gray-500'>
            <FaArrowRight/>
        </div>
        </NavLink>
    </div>
  )
}

export default BestServicesCard