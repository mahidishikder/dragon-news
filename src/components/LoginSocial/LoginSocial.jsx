import { FaGithub, FaGoogle } from "react-icons/fa"


function LoginSocial() {
  return (
    <div className="mb-9">
      <h2 className="text-xl font-bold mb-4">With Login</h2>
       <div className="flex justify-center space-y-3 flex-col ">
        <button className="btn w-full text-blue-600"><FaGoogle className="text-lg "></FaGoogle> Login With Google</button>
        <button className="btn w-full "><FaGithub className="text-lg"></FaGithub> Login With Github</button>
        <button></button>
       </div>
    </div>
  )
}

export default LoginSocial