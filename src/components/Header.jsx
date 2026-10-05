import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Planters", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header className="bg-transparent pt-6 lg:pt-9.25 w-full absolute top-0 left-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="logo z-50">
          <a href="#">
            <img src="logo.svg" alt="logo" className="h-8 lg:h-auto" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-16.75 font-lato">
          <ul className="flex items-center gap-8 xl:gap-12.5 text-[18px] text-white font-medium">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="hover:text-gray-200 transition-colors">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <button className="cursor-pointer text-[16px] text-white font-bold px-8 xl:px-12.5 py-2.75 border border-white rounded-[3px] hover:bg-white hover:text-black transition-all">
            Call Us
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-3xl focus:outline-none cursor-pointer p-1"
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Slide-Down/Overlay Menu */}
        <div
          className={`fixed inset-0 min-h-screen w-full bg-black/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 text-white font-lato z-40 transition-all duration-300 lg:hidden ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
        >
          <ul className="flex flex-col items-center gap-6 text-[20px] font-semibold text-white">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-gray-300 transition-colors block py-2"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setIsOpen(false)}
            className="cursor-pointer text-[16px] text-white font-bold px-10 py-3 border border-white rounded-[3px] hover:bg-white hover:text-black transition-all mt-4"
          >
            Call Us
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;