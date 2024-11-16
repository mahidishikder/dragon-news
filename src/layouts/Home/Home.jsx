import Header from "../../components/Header"
import Latest from "../../components/Latest"
import Navber from './../../components/Navber/Navber';
import Left from "../../components/MainLayouts/Left";
import Main from "../../components/MainLayouts/Main";
import Right from "../../components/MainLayouts/Right";
import { Outlet } from "react-router-dom";


function Home() {
  return (
    <div className="max-w-7xl mx-auto font-poppins">


      <div>
        <Header></Header>
      </div>
      

      <div>
        <Latest></Latest>
      </div>

      <div>
        <Navber></Navber>
      </div>

      <main className="grid grid-cols-12 gap-4 ">
        <aside className="  col-span-3">
         <Left></Left>
        </aside>
        <main className="col-span-6">
        <Outlet></Outlet>
          </main>
        <aside className=" col-span-3">
          <Right></Right>
        </aside>
      </main>

    </div>
  )
}

export default Home