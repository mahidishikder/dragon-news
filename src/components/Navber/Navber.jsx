import { Link } from "react-router-dom"
import Login from '../../assets/user.png'
import { useContext } from "react"
import auth from "../../firebase/firebase.init"
import { AuthContext } from "../../provider/AuthProvider"

function Navber() {
  const {name} = useContext(AuthContext)
  
  return (
    <div className="flex justify-between mb-16">
      <div className="text-gray-500 text-lg font-semibold">{name}</div>
      <div className=" flex justify-center gap-4 text-lg text-gray-400">
        <Link to={`/`}>Home</Link>
        <Link to={`/about`}>About</Link>
        <Link to={`/career`}>Career</Link>
      </div>
      <div className="flex justify-between gap-2">
        <img className="rounded-full" src={Login} alt="" />
        <Link to={`/auth/login`} className=" bg-gray-800 px-10 py-2 rounded text-white">Login</Link>
      </div>
    </div>
  )
}

export default Navber