function Navbar() {
  return (
    <div className="bg-transparent  w-full">
        <div className="w-11/12 pt-2 justify-between text-white flex mx-auto">

            <h3 className="p-3 cursor-pointer text-xl z-50 font-bold">COMPANY</h3>

            <div className="w-8/12 z-50 rounded-t-[-100px]">
            
                <ul className="flex z-50 items-center h-full justify-around">
                    <li className=" cursor-pointer">About</li>
                    <li className=" cursor-pointer">Services</li>
                    <li className=" cursor-pointer">Project</li>
                    <li className=" cursor-pointer">Resources</li>
                    <li className=" cursor-pointer">Contact Us</li>
                    <li className="px-8 rounded-full text-black py-2 bg-secondary cursor-pointer">Let's talk</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar