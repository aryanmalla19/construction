import react from "../assets/react.svg"

function Landing() {
    return (
        <div className='flex bg-main min-h-[100vh] pt-[130px] mt-[-80px] text-white flex-col'>
            <h1 className='text-6xl font-bold text-center'>We are Building a <br /> <span className='mt-2 block'>Sustainable Future</span></h1>
            <p className='text-center mt-5'>Commited to innovative practices and eco-friendly solutions.</p>

            <div className='w-11/12 flex justify-between mt-10 mx-auto'>
                <div className='w-2/12'>
                    <div className="flex items-center justify-center">
                        <img className='rounded-full w-24 border-2 border-white' src={react} alt="" srcset="" />
                        <img className='rounded-full ml-[-30px] z-40- w-24 border-2 border-white' src={react} alt="" srcset="" />
                    </div>
                    <p className="text-center mt-2">Contact our expert</p>
                </div>
                <div className="w-7/12 flex justify-between">
                    <img src="" alt="" />
                    <div className="w-5/12 rounded-xl bg-blue-950">
                        <h3 className="text-2xl p-3 font-medium">Renewable Eneegy,<br />Greener World, <br /><span className="text-secondary">Bright</span> Future</h3>
                        <div className="bg-white text-black mt-10 rounded-xl m-3">
                            <h2 className="text-3xl text-center font-semibold pt-5">85%</h2>
                            <p className="text-center">Energy Savings</p>
                        </div>
                    </div>
                </div>
                <div className="w-2/12 flex flex-col">
                    <div className="">
                        <img className='rounded-full w-24 border-2 border-white' src={react} />                </div>
                    <h4 className="mt-2">#1 in Renewable Energy Industry</h4>
                </div>
            </div>
            <div className="mt-10 pb-5 w-full flex flex-col justify-center items-center">
                <h6 className="my-2">It's free for consultation</h6>
                <div className="bg-secondary p-1 mt-1 text-main  rounded-full flex">
                    <button className="py-2 px-5">Contact Us</button>
                    <img className="border border-white rounded-full" src={react} alt="" srcset="" />
                    <img className="border ml-[-20px] border-white rounded-full" src={react} alt="" srcset="" />
                </div>
            </div>
        </div>
    )
}

export default Landing