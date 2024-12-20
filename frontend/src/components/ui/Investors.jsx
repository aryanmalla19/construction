import logo from '../../assets/diversified-logo.svg'

function Investors() {
  return (
    <div className='my-10 w-11/12 mx-auto flex flex-col'>
        <div className='flex justify-between'>
            <h1 className='w-4/12 text-4xl font-bold'>Investors & Partners</h1>
            <p className='w-6/12 text-gray-700'>We believe that collaboration is key to building a Sustainable future. <br />Our Investors and partners play a cruical role in driving our mission forward.</p>
        </div>

        <div className="overflow-hidden mt-10">
  <div
    className="flex animate-scroll-right space-x-5"
    style={{ animation: "scroll-right 15s linear infinite" }}
  >
    {/* Original Images */}
    <img
      className="w-48 mx-5 rounded-lg border px-3 py-1"
      src={logo}
      alt=""
    />
    <img
      className="w-48 mx-5 rounded-lg border px-3 py-1"
      src={logo}
      alt=""
    />
    <img
      className="w-48 mx-5 rounded-lg border px-3 py-1"
      src={logo}
      alt=""
    />
    <img
      className="w-48 mx-5 rounded-lg border px-3 py-1"
      src={logo}
      alt=""
    />
    <img
      className="w-48 mx-5 rounded-lg border px-3 py-1"
      src={logo}
      alt=""
    />
    <img
      className="w-48 mx-5 rounded-lg border px-3 py-1"
      src={logo}
      alt=""
    />

    {/* Duplicate Images for Seamless Scroll */}
    <img
      className="w-48 mx-5 rounded-lg border px-3 py-1"
      src={logo}
      alt=""
    />
    <img
      className="w-48 mx-5 rounded-lg border px-3 py-1"
      src={logo}
      alt=""
    />
    <img
      className="w-48 mx-5 rounded-lg border px-3 py-1"
      src={logo}
      alt=""
    />
    <img
      className="w-48 mx-5 rounded-lg border px-3 py-1"
      src={logo}
      alt=""
    />
  </div>
</div>

    </div>
  )
}

export default Investors