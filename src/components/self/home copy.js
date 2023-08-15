import React from 'react'
import robot from "../../images/robot.png"
import Navbar from './navbar'

const Home = () => {
  return (
    <div className="bg-zinc-950 my-custom-bg-class bg-no-repeat">
        <Navbar/>
        <div className='text-white text-8xl font-semibold mx-12 mt-[100px] flex flex-row items-center'>
          {/* <h4 className='text-green text-sm space-x-2 text-green-700 uppercase'>Lets build something</h4> */}
          {/* <h1>Build new <span className='text-orange-400'>products</span>,</h1>
          <h1>and accelarate</h1>
        <h1>digital teams</h1> */}
          <div className='w-full flex flex-col basis-1 bg-slate-300'>
          <h4 className='text-green text-sm space-x-2 text-green-700 uppercase'>Lets build something</h4>
          <h1 className='w-[65%]'>Build new <span className='text-orange-400'>products</span>, and accelarate digital teams</h1>
          </div>
         <img src={robot} className="basis-10"/>
        </div>
         {/* <StaticImage src={logo} className="max-w-full bg-zinc-950"/> */}
      </div>
  )
}

export default Home
