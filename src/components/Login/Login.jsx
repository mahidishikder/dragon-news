import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../provider/AuthProvider"
import { Result } from "postcss"

function Login() {
  const {userEmailAndPasswrodThenLogin} = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    userEmailAndPasswrodThenLogin(email,password)
    .then(result => {
      console.log(result.user)
    })
    .catch(error => {
      console.log(error.message)
    })
  }
  return (
 <div className=" ">
     <div className="bg-white max-w-4xl mx-auto rounded mt-28">
      <h2 className="text-3xl font-bold text-center pt-20 pb-10">Login your account</h2>
      <div className="border-b border-[1px]  max-w-3xl mx-auto"></div>
     <form onSubmit={handleLogin} className="card-body px-28">
        <div className="form-control mt-5">
          <label className="label">
            <span className="label-text text-xl font-bold text-gray-600">Email Address</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered py-7 border-none bg-gray-200" required />
        </div>
        <div className="form-control mt-5">
          <label className="label ">
            <span className="label-text text-xl font-bold text-gray-600">Password</span>
          </label>
          <input name="password" type="password" placeholder="password"  className="input border-none py-7 bg-gray-200 input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6 pb-10">
          <button className=" bg-[#403F3F]  py-4 rounded hover:bg-gray-400 text-white ">Login</button>
        </div>
        <p>Dont,t Have An Account ? <Link className="text-blue-600" to={`/auth/register`}>Register</Link></p>
      </form>
     
    </div>
 </div>
  )
}

export default Login