import React from 'react'

const NavBar = () => {
  return (
    <nav className='flex sticky justify-between top-0 p-5 bg-[#F57C0099] text-gray-700 font-extrabold backdrop-blur-xl shadow-md'>
        <a href='#model'>Model</a>
        <a href='#printer'>3d Printer</a>
        <a href='#send'>Send</a>
    </nav>
)
}

export default NavBar