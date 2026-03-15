import React from "react";
import { FaCoffee } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {

  const navLinks = [
    { id: "home", label: "Home", extra: "lg:text-lg" },
    { id: "menu", label: "Menu", extra: "lg:text-lg" },
    { id: "about", label: "About", extra: "lg:text-lg" },
    { id: "testimonial", label: "Testimonial", extra: "lg:text-lg" },
  ];

  return (
    <nav className="relative bg-cover bg-center shadow-xl border-4 border-dashed border-amber-500 rounded-xl overflow-hidden">

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

          {/* Nav Links */}
          <div className="hidden md:flex space-x-8 items-center">

            {navLinks.map(({ id, label, extra }) => (
              <Link
                key={id}
                to={id}
                smooth={true}
                duration={500}
                className={`text-white hover:text-yellow-300 transition-all duration-300 
                font-semibold text-lg md:text-sm cursor-pointer ${extra} relative group`}
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {label}

                <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-yellow-300 transition-all duration-300 group-hover:w-full" />

              </Link>
            ))}

          </div>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;