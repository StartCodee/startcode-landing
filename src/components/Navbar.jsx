import React, { useState } from "react";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaCode,
} from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { icon: FaHome, label: "Home", href: "#home" },
    { icon: FaUser, label: "About", href: "#about" },
    { icon: FaBriefcase, label: "Services", href: "#services" },
    { icon: FaCode, label: "Portfolio", href: "#portfolio" },
    { icon: FaEnvelope, label: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed z-50 w-full mt-5 top-0 left-0 px-4">
      {/* Navbar untuk Laptop dan Tablet */}
      <div className="hidden sm:block max-w-5xl mx-auto sm:w-3/4 md:w-2/3 lg:w-1/2">
        <div className="relative">
          {/* Glassmorphism Container */}
          <div
            className="
          bg-white/30 
          backdrop-blur-lg 
          border border-white/20 
          shadow-lg 
          rounded-2xl 
          overflow-hidden
          absolute 
          inset-0
          -z-10
        "
          ></div>

          {/* Navbar Content */}
          <div className="relative z-10 flex justify-between items-center p-3">
            {/* Logo */}
            <div>
              <img
                src="/scode.webp"
                className="w-[50px] h-[50px]"
                style={{ borderRadius: "10px" }}
                alt="Logo"
              />
            </div>

            {/* Navigation */}
            <div className="flex space-x-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="
                  flex 
                  items-center 
                  space-x-2 
                  text-white 
                  hover:text-[#5e4bf5] 
                  transition-colors 
                  duration-300
                  text-sm
                "
                >
                  <item.icon size={16} />
                  <span className="hidden md:inline">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="sm:hidden">
        <div className="relative">
          {/* Glassmorphism Container */}
          <div
            className="
          bg-white/30 
          backdrop-blur-lg 
          border border-white/20 
          shadow-lg 
          overflow-hidden
          absolute 
          inset-0
          -z-10
        "
          ></div>

          {/* Mobile Navbar Content */}
          <div className="relative z-10 flex justify-between items-center p-4">
            {/* Logo */}
            <div className="text-xl font-bold text-gray-800">
              <img
                src="/scode.webp"
                className="w-[50px] h-[50px]"
                style={{ borderRadius: "10px" }}
                alt="Logo"
              />
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="
               text-white 
                  hover:text-[#5e4bf5] 
              focus:outline-none 
              transition-colors 
              duration-300
            "
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {isMenuOpen && (
            <div
              className="
            absolute 
            top-full 
            left-0 
            w-full 
            
            bg-white/30 
            backdrop-blur-lg 
            border-t 
            border-white/20
          "
            >
              <div className="flex flex-col">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="
                    flex 
                    items-center 
                    space-x-3 
                    p-4 
                    text-white 
                    hover:bg-white/20 
                    transition-colors 
                    duration-300
                  "
                    onClick={toggleMenu}
                  >
                    <item.icon size={20} />
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
