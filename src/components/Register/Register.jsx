import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../provider/AuthProvider"

function Register() {
  const {createEmailAndPassword} = useContext(AuthContext)
  const handleRegister = (e) => {
   e.preventDefault()
   const email = e.target.email.value
   const password = e.target.password.value
   createEmailAndPassword(email,password)
   .then(result => {
    console.log(result.user)
  })
  .catch(error => {
    console.log(error.message)
  })
  }
  return (
    <div>
        <div className="bg-white max-w-4xl mx-auto rounded ">
      <h2 className="text-3xl font-bold text-center pt-20 pb-10">Register your account</h2>
      <div className="border-b border-[1px]  max-w-3xl mx-auto"></div>
     <form onSubmit={handleRegister} className="card-body px-28">
        <div className="form-control mt-5">
          <label className="label">
            <span className="label-text text-xl font-bold text-gray-600">Your Name</span>
          </label>
          <input name="name" type="text" placeholder="name" className="input input-bordered py-4 border-none bg-gray-200"  />
        </div>
        <div className="form-control mt-5">
          <label className="label">
            <span className="label-text text-xl font-bold text-gray-600">Photo URL</span>
          </label>
          <input name="photo-url" type="text" placeholder="Url" className="input input-bordered py-4 border-none bg-gray-200"  />
        </div>
        <div className="form-control mt-5">
          <label className="label">
            <span className="label-text text-xl font-bold text-gray-600">Email Address</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered py-4 border-none bg-gray-200"  />
        </div>
        <div className="form-control mt-5">
          <label className="label ">
            <span className="label-text text-xl font-bold text-gray-600">Password</span>
          </label>
          <input name="password" type="password" placeholder="password"  className="input border-none py-4 bg-gray-200 input-bordered"  />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-4 pb-10">
          <button className=" bg-[#403F3F]  py-3 rounded hover:bg-gray-400 text-white ">Login</button>
        </div>
        <p>AlReady have an Account ? <Link className="text-blue-600" to={`/auth/login`}>Login</Link></p>
      </form>
     
    </div>
    </div>
  )
}

export default Register