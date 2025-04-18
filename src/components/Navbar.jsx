import React, { useState, useEffect } from "react";
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
  const [isAtTop, setIsAtTop] = useState(true);

  const navItems = [
    { icon: FaHome, label: "Home", href: "#home" },
    { icon: FaUser, label: "About", href: "#about" },
    { icon: FaCode, label: "Portfolio", href: "#portfolio" },
    { icon: FaBriefcase, label: "Services", href: "#services" },
    { icon: FaEnvelope, label: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setIsMenuOpen(false);
    }
  };


  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0); // true jika scroll di atas
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav className="fixed z-50 w-full top-0 left-0">
      {/* Navbar untuk Laptop dan Tablet */}
      <div className={`hidden sm:block mx-auto py-2 transition-all duration-500 ease-in-out ${isAtTop ? "w-full" : "sm:w-3/4 md:w-2/3 lg:w-1/2 "}`}>
        <div className="relative">
          {/* Glassmorphism Container */}
          <div
            className={`
            ${isAtTop
                ? "w-full bg-transparent"
                : "mt-0 bg-[#242539]/16 border border-white/20 backdrop-blur-lg shadow-lg"
              }
          transition-all 
          duration-500 
          ease-in-out
          rounded-2xl
          overflow-hidden
          absolute
          inset-0
          -z-10
          `}
          ></div>

          {/* Navbar Content */}
          <div className="w-full relative z-10 flex justify-between items-center px-12 py-4">
            {/* Logo */}
            <div className="flex gap-4 justify-center items-center">
              <img
                src="/StartCode.png"
                className="w-[35px] h-[35px]"
                style={{ borderRadius: "10px" }}
                alt="Logo"
              />
              <p className="text-white font-bold text-xl">StartCode</p>
            </div>

            {/* Navigation */}
            <div className="flex space-x-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="
                  flex 
                  items-center 
                  space-x-8 
                  text-white 
                  hover:text-[#5e4bf5] 
                  transition-colors 
                  duration-300
                  text-sm
                "
                >
                  {/* <item.icon size={16} /> */}
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
          bg-[#242539]/16  
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
              aria-label="Toggle Menu"
              onClick={toggleMenu}
              className="
               text-white 
                  hover:text-[#5e4bf5] 
              focus:outline-none 
              transition-colors 
              duration-300
            "
            >
              <span className="sr-only">Hamburger Bar</span>
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
    </nav >
  );
}
