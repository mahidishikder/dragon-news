import { useLoaderData } from "react-router-dom"
import Card from "../Card/Card"

function PagesCategory() {
  const {data:news} = useLoaderData()
  console.log(news)
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Dragon News Home</h2>
      <div className="space-y-8">
        {
          news.map((singleNews,i) => <Card key={i} singleNews={singleNews}></Card>)
        }
      </div>
    </div>
  )
}

export default PagesCategory