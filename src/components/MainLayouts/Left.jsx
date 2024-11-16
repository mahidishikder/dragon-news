import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import  './Left.css'
function left() {
  const [categorys,setCategorys] = useState([])
  
  useEffect(() => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => setCategorys(data.data.news_category))
  },[])
  return (
    <div>
      <h2 className="text-black  text-[20px] font-semibold mb-4">All Category({categorys.length})</h2>
      <div className="flex  flex-col space-y-7 font-medium text-lg text-gray-400 ">
      {
      categorys.map((category) => <NavLink to={`/category/${category.category_id}`} className=" py-4 ring-1 ring-gray-200 rounded-lg pl-20" key={category.category_id}>{category.category_name}</NavLink>)
      
      }
    </div>
    </div>
  )
}

export default left