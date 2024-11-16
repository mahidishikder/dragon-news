import Marquee from "react-fast-marquee"
import { Link } from "react-router-dom"

function Latest() {
  return (
    <div className="flex gap-3 bg-gray-100 p-2 my-11">
      <p className='bg-[#D72050] py-2 px-4 rounded text-white text-[20px] font-500'>Latest</p>
       <Marquee pauseOnHover={true} speed={60} className="space-x-10 text-lg font-semibold">
        <Link>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste accusantium architecto reiciendis neque laboriosam non eius aspernatur adipisci harum libero.
        </Link>
        <Link>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste accusantium architecto reiciendis neque laboriosam non eius aspernatur adipisci harum libero.
        </Link>
        <Link>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste accusantium architecto reiciendis neque laboriosam non eius aspernatur adipisci harum libero.
        </Link>
        
      
       </Marquee>
    </div>
  )
}

export default Latest