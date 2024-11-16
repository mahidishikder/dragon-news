import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

function FondUsOn() {
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-500 mb-5">Find Us On</h2>
  <div className="join join-vertical ring-1 ring-gray-400 w-full font-medium ">
  <button className="btn ring-1 ring-gray-400 join-item text-gray-500"><FaFacebook className="text-blue-900 text-lg"></FaFacebook> Facebook</button>
  <button className="btn ring-1 ring-gray-400 join-item text-gray-500"><FaTwitter className="text-blue-500 text-lg"></FaTwitter> Twitter</button>
  <button className="btn ring-1 ring-gray-400 join-item text-gray-500"><FaInstagram className="text-orange-500 text-lg"></FaInstagram> Instagram</button>
</div>
    </div>
  )
}

export default FondUsOn