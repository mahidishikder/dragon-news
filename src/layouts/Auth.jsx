import { Outlet } from "react-router-dom"
import Navber from "../components/Navber/Navber"

function Auth() {
  return (
    <div className="bg-gray-200 py-10">
      <div className="max-w-7xl mx-auto font-poppins pt-14 ">
      <Navber></Navber>
      <Outlet></Outlet>
    </div>
    </div>
  )
}

export default Auth