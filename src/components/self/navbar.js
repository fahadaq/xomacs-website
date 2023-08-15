import React from 'react'
import logo from "../../images/logo.png"

const Navbar = () => {
  return (
    <div className="bg-zinc-950 flex flex-row justify-between md:text-center px-10 py-2">
         <img src={logo} className="max-w-full"/>
         <div className="text-white md:items-center flex md:justify-around gap-6">
            <a className="p-2 hover:border-b-4 hover:border-teal-600 ease-linear duration-100" href=''>Home</a>
            <a className="p-2 hover:border-b-4 hover:border-teal-600 ease-linear duration-100" href=''>Service</a>
            <a className="p-2 hover:border-b-4 hover:border-teal-600 ease-linear duration-100" href=''>About</a>
            <a className="p-2 hover:border-b-4 hover:border-teal-600 ease-linear duration-100" href=''>Work</a>
            <div className='p-1 rounded-full bg-gradient-to-tr from-teal-500 hover:to-cyan-700 ease-linear duration-1000 transition-colors'>
            <button className="rounded-full bg-black p-3 pb-4 px-10 text-2xl">Let's talk</button>
            </div>
         </div>
      </div>
  )
}

export default Navbar
