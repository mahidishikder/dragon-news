import a from '../../assets/swimming.png'
import b from '../../assets/class.png'
import c from '../../assets/playground.png'
import d from '../../assets/bg.png'
function Qzone() {
  return (
    <div className="mt-5 bg-gray-200 pb-8">
      <h2 className="pt-5 pl-5 text-gray-500 font-bold text-xl">Q-zone</h2>
      <div className='space-y-5 pb-5 pt-7'>
        <img className='w-[258px] h-[219px] mx-auto' src={a} alt="" />
        <img className='w-[258px] h-[219px] mx-auto' src={b}alt="" />
        <img className='w-[258px] h-[219px] mx-auto' src={c} alt="" />
      </div>
      <img className='mx-auto ' src={d} alt="" />

    </div>
  )
}

export default Qzone