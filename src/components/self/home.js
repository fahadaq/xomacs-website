import React from 'react'
import robot from "../../images/robot.png"
import Navbar from './navbar'

const Home = () => {
  return (
    <div className="bg-zinc-950 my-custom-bg-class bg-no-repeat">
        <Navbar/>
         <img src={robot} className="max-w-full"/>
         {/* <StaticImage src={logo} className="max-w-full bg-zinc-950"/> */}
      </div>
  )
}

export default Home
