import { SiPanasonic } from "react-icons/si"

import Authors from "../Authors/Authors"
import { IoBookmarksOutline } from "react-icons/io5"
import { CiShare2 } from "react-icons/ci"
import { FaEye } from "react-icons/fa"

function Card({singleNews}) {
  console.log(singleNews)
  const {category_id,details,title,image_url,thumbnail_url,id,total_view,author,rating} = singleNews
  return (
    <div className="ring-1 ring-gray-200 rounded shadow">
      <div className=" flex justify-between items-center bg-gray-200 rounded p-5 mb-5">
       <div className="flex items-center gap-2">
       <img className="w-12 rounded-full h-12 ring-1 p-1 cursor-pointer" src={author.img} alt="" />
          <div>
          <p className="font-semibold">{author.name}</p>
          <p className="text-gray-500">{author.published_date}</p>
          </div>
       </div>
       <div className="flex justify-center gap-3 text-xl items-center">
        <span className=" cursor-pointer"><IoBookmarksOutline /></span>
        <span className=" cursor-pointer"><CiShare2 /></span>

       </div>
      </div>
      

      <div className="px-5">
      <p className="text-lg font-semibold text-gray-500">{title}</p>
      <img className="mt-5 mb-7" src={image_url} alt="" />
      <p className="text-gray-400 font-medium">{details}</p>
      <button className="text-[#FF8C47]  font-bold ">Read More</button>
      <div className="border-b my-5"></div>

       <div className="flex justify-between pb-5 items-center">
       <div className="flex gap-3">
        <span className="font-bold text-gray-600">{rating.badge}</span>
        <span className="text-gray-400 font-bold ">{rating.number}</span>
        </div>
        <div className="flex justify-center items-center gap-4">
          <FaEye />
          <span className="text-gray-500">{total_view}</span>
        </div>
       </div>
      </div>
      
    </div>
  )
}

export default Card