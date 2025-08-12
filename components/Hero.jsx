import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-200 via-yellow-100 to-green-200"></div>
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-gradient-to-r from-transparent via-white to-transparent"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-orange-300 rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-yellow-300 rounded-full opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-green-300 rounded-full opacity-50 animate-pulse delay-2000"></div>
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        
        {/* Logo/Icon */}
        <div className="mb-12 transform hover:scale-105 transition-transform duration-300">
          <div className="relative">
            {/* House Shape */}
            <div className="w-32 h-32 border-2 border-orange-400 bg-white bg-opacity-20 backdrop-blur-sm rounded-t-full relative mb-4 mx-auto">
              {/* Lotus Flower */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="80" height="80" viewBox="0 0 100 100" className="text-orange-400">
                  {/* Lotus Petals */}
                  <g stroke="currentColor" strokeWidth="1.5" fill="none">
                    {/* Center petal */}
                    <path d="M50 30 C45 20, 55 20, 50 30 C55 40, 45 40, 50 30" className="animate-pulse delay-500"/>
                    {/* Side petals */}
                    <path d="M35 35 C25 30, 30 45, 35 35 C45 35, 40 25, 35 35" className="animate-pulse delay-700"/>
                    <path d="M65 35 C75 30, 70 45, 65 35 C55 35, 60 25, 65 35" className="animate-pulse delay-900"/>
                    {/* Lower petals */}
                    <path d="M42 45 C32 40, 37 55, 42 45 C52 45, 47 35, 42 45" className="animate-pulse delay-300"/>
                    <path d="M58 45 C68 40, 63 55, 58 45 C48 45, 53 35, 58 45" className="animate-pulse delay-1100"/>
                    {/* Outer petals */}
                    <path d="M30 50 C20 45, 25 60, 30 50 C40 50, 35 40, 30 50" className="animate-pulse delay-1300"/>
                    <path d="M70 50 C80 45, 75 60, 70 50 C60 50, 65 40, 70 50" className="animate-pulse delay-200"/>
                  </g>
                  {/* Stem */}
                  <path d="M50 55 Q45 65, 40 75 Q55 70, 50 55 Q55 65, 60 75" 
                        stroke="currentColor" strokeWidth="1.5" fill="none" className="opacity-80"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="space-y-4 mb-8">
          <h1 className="text-sm font-normal tracking-[0.3em] text-orange-800 uppercase opacity-90">
            The House of
          </h1>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-light text-orange-700 tracking-tight leading-none">
            Gippeun
          </h2>
        </div>

        {/* Subtitle */}
        <div className="max-w-md mx-auto mb-12">
          <p className="text-lg md:text-xl font-light text-orange-700 leading-relaxed tracking-wide">
            A healing journey to your<br />
            <span className="italic">grounded, authentic self</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Link href={"/get-started"}>
          <button className="px-8 py-3 bg-white bg-opacity-20 backdrop-blur-sm border border-orange-300 text-orange-800 font-light tracking-wide rounded-full hover:bg-opacity-30 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Begin Your Journey
          </button>
          </Link>
          <Link href={"/about"}>
          <button className="px-8 py-3 text-orange-700 font-light tracking-wide rounded-full hover:bg-white hover:bg-opacity-10 transform hover:scale-105 transition-all duration-300">
            Learn More 
          </button>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-orange-400 rounded-full opacity-60">
            <div className="w-1 h-3 bg-orange-400 rounded-full mx-auto mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white from-10% to-transparent opacity-30"></div>
      
      {/* Side Decorations */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <div className="w-32 h-32 border border-orange-200 rounded-full opacity-20"></div>
      </div>
      <div className="absolute right-0 top-1/3 transform -translate-y-1/2 translate-x-1/2">
        <div className="w-24 h-24 border border-yellow-200 rounded-full opacity-20"></div>
      </div>
    </div>
  );
};

export default Hero;