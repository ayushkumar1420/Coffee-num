import React from 'react'
import { FaCoffee } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=' relative bg-cover bg-center shadow-xl border-4 border-dashed border-amber-500 rounded-xl overflow-hidden'>
        <div className=' absolute inset-0 bg-gradient-to-r from-[#4b3621] to-[#6f4e37] opacity-95' />

        <div className=' relative max-w-7xl mx-auto px-4 py-5'>
            <div className=' flex justify-between items-center'>

                <div className=' flex items-center'>
                    <a href="#" className=' text-white text-3xl md:text-lg lg:text-4xl font-extrabold flex items-center'
                    style={{ fontFamily: "'Lobster', cursive" }}>
                        <FaCoffee className=' mr-2 text-yellow-300' />
                        Coffee-num
                    </a>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
