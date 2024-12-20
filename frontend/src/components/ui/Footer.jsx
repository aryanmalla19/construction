import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-main text-3xl font-bold mb-3">Construtopia</h1>
        <div className="flex justify-between border-b pb-10 border-gray-300">
        <div className="w-2/12  ">
              <h1 className="font-semibold my-2 text-lg">Company</h1>
              <ul className="text-gray-700 text-base">
                <li className="my-1">Home</li>
                <li className="my-1">About Us</li>
                <li className="my-1">Product</li>
                <li className="my-1">Reviews</li>
              </ul>
            </div>
            <div className="w-2/12  ">
              <h1 className="font-semibold my-2 text-lg">Company</h1>
              <ul className="text-gray-700 text-base">
                <li className="my-1">Home</li>
                <li className="my-1">About Us</li>
                <li className="my-1">Product</li>
                <li className="my-1">Reviews</li>
              </ul>
            </div>
            <div className="w-2/12  ">
              <h1 className="font-semibold my-2 text-lg">Company</h1>
              <ul className="text-gray-700 text-base">
                <li className="my-1">Home</li>
                <li className="my-1">About Us</li>
                <li className="my-1">Product</li>
                <li className="my-1">Reviews</li>
              </ul>
            </div>
            <div className="w-2/12  ">
              <h1 className="font-semibold my-2 text-lg">Company</h1>
              <ul className="text-gray-700 text-base">
                <li className="my-1">Home</li>
                <li className="my-1">About Us</li>
                <li className="my-1">Product</li>
                <li className="my-1">Reviews</li>
              </ul>
            </div>
            <div className="w-2/12  ">
              <h1 className="font-semibold my-2 text-lg">Company</h1>
              <ul className="text-gray-700 text-base">
                <li className="my-1">Home</li>
                <li className="my-1">About Us</li>
                <li className="my-1">Product</li>
                <li className="my-1">Reviews</li>
              </ul>
            </div>
        </div>
        <div className="flex justify-between py-5">
            <h5>Copyright Construcyopia 2024, All Rigths Reserved.</h5>
            <div className="flex text-2xl text-gray-700">
              <FaFacebookF className="mx-2"/>
              <FaInstagram className="mx-2"/>
              <FaLinkedin className="mx-2"/>
            </div>
        </div>
    </div>
  )
}

export default Footer