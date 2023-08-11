import React from 'react'
import logo from "../../images/logo.png"

const Navbar = () => {
  return (
    <div className="bg-zinc-950 flex flex-row justify-between md:text-center px-10 py-2">
         <img src={logo} className="max-w-full"/>
         {/* <StaticImage src={logo} className="max-w-full bg-zinc-950"/> */}
         <div className="text-white md:items-center flex md:justify-around gap-6">
            {/* <a className="p-2 hover:bg-zinc-400 hover:border-b-2 hover:text-black ease-linear duration-100" href=''>Home</a> */}
            <a className="p-2 hover:border-b-2 hover:border-cyan-600 ease-linear duration-100" href=''>Home</a>
            <a className="p-2 hover:border-b-2 hover:border-cyan-600 ease-linear duration-100" href=''>Service</a>
            <a className="p-2 hover:border-b-2 hover:border-cyan-600 ease-linear duration-100" href=''>About</a>
            <a className="p-2 hover:border-b-2 hover:border-cyan-600 ease-linear duration-100" href=''>Work</a>
            {/* <button className="border-2 p-2 rounded-full border-cyan-600 hover:drop-shadow-2xl">Let's talk</button> */}
            {/* <button className="border-2 p-2 rounded-full border-cyan-600 shadow-gray-100">Let's talk</button> */}
            {/* <button className="border-2 p-2 rounded-full border-cyan-600 hover:shadow-white shadow-xl">Let's talk</button> */}
            <button className="border-2 p-2 rounded-full border-cyan-600 hover:border-cyan-200 ease-in duration-200 hover:border-2 shadow ">Let's talk</button>
            {/* <button className="border-2 p-2 rounded-full border-cyan-600 hover:drop-shadow-[0_35px_35px_#ffff]">Let's talk</button> */}
         </div>
      </div>
  )
}

export default Navbar
