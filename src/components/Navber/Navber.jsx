import { Link } from "react-router-dom"
import Login from '../../assets/user.png'

function Navber() {
  return (
    <div className="flex justify-between mb-16">
      <div></div>
      <div className=" flex justify-center gap-4 text-lg text-gray-400">
        <Link to={`/`}>Home</Link>
        <Link to={`/about`}>About</Link>
        <Link to={`/career`}>Career</Link>
      </div>
      <div className="flex justify-between gap-2">
        <img src={Login} alt="" />
        <Link to={`/auth/login`} className=" bg-gray-800 px-10 py-2 rounded text-white">Login</Link>
      </div>
    </div>
  )
}

export default Navber