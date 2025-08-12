"use client"
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/">
            <div className="flex items-center space-x-3">
            
              <div className="w-10 h-10 relative">
             
                <div className="w-full h-full border border-orange-400 bg-white bg-opacity-20 backdrop-blur-sm rounded-t-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 100 100" className="text-orange-500">
                    <g stroke="currentColor" strokeWidth="2" fill="none">
                      <path d="M50 25 C47 20, 53 20, 50 25 C53 30, 47 30, 50 25"/>
                      <path d="M40 30 C35 28, 38 35, 40 30 C45 30, 42 25, 40 30"/>
                      <path d="M60 30 C65 28, 62 35, 60 30 C55 30, 58 25, 60 30"/>
                      <path d="M50 35 Q47 40, 45 45 Q52 42, 50 35 Q53 40, 55 45" strokeWidth="1.5"/>
                    </g>
                  </svg>
                </div>
               
              </div>
              <span className="text-orange-800 font-light text-lg tracking-wide">Gippeun</span>
            </div>
            </a>
           

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-orange-700 font-light tracking-wide hover:text-orange-600 transition-colors duration-300 relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/about" className="text-orange-700 font-light tracking-wide hover:text-orange-600 transition-colors duration-300 relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/services" className="text-orange-700 font-light tracking-wide hover:text-orange-600 transition-colors duration-300 relative group">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/get-started" className="text-orange-700 font-light tracking-wide hover:text-orange-600 transition-colors duration-300 relative group">
               Get Started
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/contact" className="text-orange-700 font-light tracking-wide hover:text-orange-600 transition-colors duration-300 relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a href="/get-started">
              <button className="px-6 py-2 bg-white bg-opacity-20 backdrop-blur-sm border border-orange-300 text-orange-800 font-light tracking-wide rounded-full hover:bg-opacity-30 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
                Book Session
              </button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-8 h-8 flex flex-col justify-center items-center space-y-1 group"
            >
              <span className={`w-6 h-0.5 bg-orange-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-orange-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-orange-600 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden absolute top-full left-0 right-0 bg-white bg-opacity-90 backdrop-blur-md border-t border-orange-200 transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
            <div className="px-6 py-6 space-y-4">
              <a href="#home" className="block text-orange-700 font-light tracking-wide hover:text-orange-600 transition-colors duration-300 py-2">
                Home
              </a>
              <a href="/about" className="block text-orange-700 font-light tracking-wide hover:text-orange-600 transition-colors duration-300 py-2">
                About
              </a>
              <a href="/services" className="block text-orange-700 font-light tracking-wide hover:text-orange-600 transition-colors duration-300 py-2">
                Services
              </a>
              <a href="/get-started" className="block text-orange-700 font-light tracking-wide hover:text-orange-600 transition-colors duration-300 py-2">
                Get Started
              </a>
              <a href="/contact" className="block text-orange-700 font-light tracking-wide hover:text-orange-600 transition-colors duration-300 py-2">
                Contact
              </a>
              <div className="pt-4 border-t border-orange-200">
                <a href='/get-started'>
                <button className="w-full px-6 py-3 bg-white bg-opacity-40 backdrop-blur-sm border border-orange-300 text-orange-800 font-light tracking-wide rounded-full hover:bg-opacity-60 transform hover:scale-105 transition-all duration-300 shadow-md">
                  Book Session
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      </div>
  );
};

export default Navbar;