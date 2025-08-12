import React, { useState } from 'react';

const ServiceCard = ({ side, icon, title, subtitle, description, features, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`flex items-center ${side === 'left' ? 'justify-start' : 'justify-end'}`}>
      <div 
        className={`w-full md:w-96 transform transition-all duration-700 ease-out ${
          side === 'left' ? 'md:translate-x-0' : 'md:-translate-x-0'
        } hover:scale-105`}
        style={{ animationDelay: `${delay}ms` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Journey Dot */}
        <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-400 rounded-full border-4 border-white shadow-lg z-10 ${isHovered ? 'scale-125' : ''} transition-transform duration-300`}></div>
        
        <div className={`bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-100 ${side === 'left' ? 'mr-8 md:mr-16' : 'ml-8 md:ml-16'} hover:shadow-xl transition-all duration-300`}>
          
          {/* Icon & Header */}
          <div className="flex items-start space-x-4 mb-4">
            <div className="text-3xl">{icon}</div>
            <div className="flex-1">
              <h3 className="text-xl font-light text-orange-800 mb-1">{title}</h3>
              <p className="text-sm text-orange-600 tracking-wide">{subtitle}</p>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-orange-700 leading-relaxed mb-4 text-sm">
            {description}
          </p>
          
          {/* Features */}
          <div className="space-y-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                <span className="text-sm text-orange-700">{feature}</span>
              </div>
            ))}
          </div>
          
          {/* Hover Effect */}
          <div className={`mt-4 pt-4 border-t border-orange-100 transition-all duration-300 ${isHovered ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0 overflow-hidden'}`}>
            <button className="text-orange-600 text-sm font-light hover:text-orange-500 transition-colors duration-300">
              Learn more about this service →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;