import moment from 'moment'
import Logo from '../assets/logo.png'

function Header() {
  return (
    <div className='mt-10'>
     <div className=''>
      <img className='w-[300px]  lg:w-[350px] lg:h-[50] mx-auto '  src={Logo} alt="" />
     </div>
     <p className='text-gray-500 text-lg text-center mt-5'>Journalism Without Fear or Favour</p>
      <p className='text-[20px] font-500 text-gray-500 text-center'>{moment().format("dddd, MMMM Do YYYY")}</p>
    </div>
  )
}

export default Header