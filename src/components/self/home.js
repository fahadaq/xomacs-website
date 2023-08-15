import React from "react"
import robot from "../../images/robot.png"
import Navbar from "./navbar"

const Home = () => {
  return (
    <div className="bg-zinc-950 my-custom-bg-class bg-no-repeat">
      <Navbar />
      <div className="text-white text-8xl font-semibold mx-12 mt-[1px] flex flex-row items-center">
        <div className="basis-1/2">
          <h4 className="text-green text-sm space-x-2 text-green-700 uppercase">
            Lets build something
          </h4>
          <h1 className="w-[170%]">
            Build new <span className="text-orange-400">products</span>, and
            accelarate digital teams
          </h1>
          {/* <button className="text-green text-2xl space-x-2 text-white bg-gradient-to-l from-emerald-500 from-90% via-zinc-500 via-30% to-blue-500 to-10%  p-5 rounded-full px-10">Free Consultation</button>  */}
          <button className="text-green text-2xl space-x-2 text-white bg-gradient-to-r from-teal-800 from-30% via-emerald-500 via-90% to-emerald-500 to-90%  p-3 pb-4 rounded-full px-[50px]">Free Consultation</button> 
        </div>
        <img src={robot} className="basis-1/4 h-[800px] w-13" />
      </div>
      {/* <StaticImage src={logo} className="max-w-full bg-zinc-950"/> */}
    </div>
  )
}

export default Home
