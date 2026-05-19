import React, { useState } from "react";
import { FaCoffee, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: "home", label: "Home", extra: "lg:text-lg" },
    { id: "menu", label: "Menu", extra: "lg:text-lg" },
    { id: "about", label: "About", extra: "lg:text-lg" },
    { id: "testimonial", label: "Testimonial", extra: "lg:text-lg" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-cover bg-center shadow-xl border-4 border-dashed border-amber-500 rounded-xl overflow-hidden">
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4b3621] to-[#6f4e37] opacity-95" />

      <div className="relative max-w-7xl mx-auto px-4 py-5">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center">
            <a
              href="#"
              className="text-white text-3xl md:text-lg lg:text-4xl font-extrabold flex items-center"
              style={{ fontFamily: "'Lobster', cursive" }}
            >
              <FaCoffee className="mr-2 text-yellow-300" />
              Coffee-num
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map(({ id, label, extra }) => (
              <Link
                key={id}
                to={id}
                smooth={true}
                duration={500}
                offset={-70}
                className={`text-white hover:text-yellow-300 transition-all duration-300 
                font-semibold text-lg md:text-sm cursor-pointer ${extra} relative group`}
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {label}

                {/* Hover underline */}
                <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-yellow-300 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            {/* Order Button */}
            <button className="bg-yellow-400 hover:bg-yellow-300 text-[#4b3621] px-5 py-2 rounded-full font-bold transition-all duration-300 shadow-lg">
              Order Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden text-white text-2xl cursor-pointer">
            {isOpen ? (
              <FaTimes onClick={() => setIsOpen(false)} />
            ) : (
              <FaBars onClick={() => setIsOpen(true)} />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-5 flex flex-col items-center space-y-5 bg-[#5c4033] rounded-xl py-6 shadow-lg">
            {navLinks.map(({ id, label }) => (
              <Link
                key={id}
                to={id}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setIsOpen(false)}
                className="text-white text-lg font-semibold hover:text-yellow-300 transition duration-300 cursor-pointer"
              >
                {label}
              </Link>
            ))}

            {/* Mobile Button */}
            <button className="bg-yellow-400 hover:bg-yellow-300 text-[#4b3621] px-5 py-2 rounded-full font-bold transition-all duration-300">
              Order Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;