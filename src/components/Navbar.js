import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div style={{ width:"95%"}} className='absolute top-0 left-0 right-0 px-10 flex justify-between items-center my-5 mx-5 text-white self-center'>
        <div className='flex flex-col gap-2 items-center'>
            <div style={{ width:'150px', height:'150px' }}>
            <img src={logo} alt='logo'/>
            </div>
            <span className='-mt-10 font-outfit text-base font-bold'>INICUS INNOVATIONS</span> 
        </div>
        <ul className='flex items-center gap-7 text-base'>
            <li className='hover:underline cursor-pointer decoration-yellow-400'>Home</li>
            <li className='hover:underline cursor-pointer decoration-yellow-400'>About Us</li>
            <li className='hover:underline cursor-pointer decoration-yellow-400'>Projects</li>
            <li className='hover:bg-yellow-400 bg-white text-black py-1 px-5 rounded-full cursor-pointer'>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar