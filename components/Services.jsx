"use client"
import React, { useState, useEffect } from 'react';

const Services = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [completedSteps, setCompletedSteps] = useState([]);

  const services = [
    {
      icon: "👥",
      title: "Professional Social Work",
      subtitle: "Qualified Adult Social Worker",
      description: "Person-centred, trauma-informed practice supporting you through emotional and life challenges with professional expertise and compassionate care.",
      features: ["Trauma-informed approach", "Person-centred practice", "Emotional support", "Life transitions"],
      color: "from-orange-400 to-orange-500",
      bgColor: "bg-orange-50"
    },
    {
      icon: "🌸",
      title: "1:1 Healing Sessions",
      subtitle: "Healing Coach & Mentor",
      description: "Personalized sessions guiding you from heartbreak, anxiety, or low self-worth into softness, clarity, and personal power.",
      features: ["Emotional healing", "Confidence building", "Self-trust development", "Personal empowerment"],
      color: "from-pink-400 to-rose-500",
      bgColor: "bg-pink-50"
    },
    {
      icon: "✨",
      title: "Confidence Building",
      subtitle: "Rediscover Your Inner Strength",
      description: "Transform limiting beliefs and step into your authentic power through gentle, supportive guidance tailored to your unique journey.",
      features: ["Self-worth restoration", "Inner strength activation", "Authentic self-expression", "Personal boundaries"],
      color: "from-yellow-400 to-amber-500",
      bgColor: "bg-yellow-50"
    },
    {
      icon: "🌿",
      title: "Emotional Grounding",
      subtitle: "Find Your Center",
      description: "Learn to navigate emotions with grace, develop resilience, and create lasting inner stability through proven healing techniques.",
      features: ["Emotional regulation", "Mindfulness practices", "Stress management", "Inner peace cultivation"],
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50"
    }
  ];

  useEffect(() => {
    setIsInView(true);
    const timer = setInterval(() => {
      setActiveStep((prev) => {
        const next = (prev + 1) % services.length;
        if (!completedSteps.includes(prev)) {
          setCompletedSteps(completed => [...completed, prev]);
        }
        return next;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const handleStepClick = (index) => {
    setActiveStep(index);
    if (!completedSteps.includes(index)) {
      setCompletedSteps(completed => [...completed, index]);
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-white to-orange-50 py-20 overflow-hidden">
        {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-200 via-yellow-100 to-green-200"></div>
      <div className="max-w-7xl mx-auto px-6">

        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-light text-orange-800 mb-6 tracking-wide">
            Your Healing Journey
          </h2>
          <p className="text-xl text-orange-700 max-w-3xl mx-auto leading-relaxed">
            Walk gently with Tafie through pain, and emerge emotionally grounded, whole, and free
          </p>
        </div>

        {/* Interactive Walkthrough */}
        <div className="relative">
          
          {/* Progress Indicator */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleStepClick(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-500 ${
                    index === activeStep 
                      ? 'bg-orange-500 scale-150 shadow-lg' 
                      : completedSteps.includes(index)
                      ? 'bg-orange-300 scale-110'
                      : 'bg-orange-200 hover:bg-orange-300'
                  }`}
                >
                  {completedSteps.includes(index) && index !== activeStep && (
                    <div className="w-full h-full rounded-full bg-green-500 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="relative min-h-[600px]">
            
            {/* Animated Background */}
            <div className={`absolute inset-0 rounded-3xl transition-all duration-1000 ${services[activeStep].bgColor} opacity-30`}></div>
            
            {/* Floating Particles */}
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${services[activeStep].color} opacity-40 animate-pulse`}
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${10 + (i % 3) * 30}%`,
                  animationDelay: `${i * 0.5}s`
                }}
              ></div>
            ))}

            {/* Service Cards Container */}
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              
              {/* Left Side - Service Info */}
              <div className="space-y-8 p-4">
                <div className={`transform transition-all duration-700 ${isInView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                  
                  {/* Step Indicator */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${services[activeStep].color} flex items-center justify-center text-3xl shadow-lg transform transition-all duration-500 hover:scale-110`}>
                      {services[activeStep].icon}
                    </div>
                    <div>
                      <div className="text-sm text-orange-600 font-medium tracking-wide">
                        STEP {activeStep + 1} OF {services.length}
                      </div>
                      <div className="text-orange-800 font-light text-lg">
                        {services[activeStep].subtitle}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-light text-orange-800 mb-4 leading-tight">
                    {services[activeStep].title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-orange-700 leading-relaxed mb-6">
                    {services[activeStep].description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {services[activeStep].features.map((feature, index) => (
                      <div 
                        key={index}
                        className="flex items-center space-x-3 transform transition-all duration-500"
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${services[activeStep].color}`}></div>
                        <span className="text-orange-700 font-light">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="pt-6">
                    <button className={`px-8 py-3 bg-gradient-to-r ${services[activeStep].color} text-white font-light tracking-wide rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
                      Learn More About This Service
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Side - Visual Journey */}
              <div className="relative">
                <div className={`transform transition-all duration-700 ${isInView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                  
                  {/* Journey Visualization */}
                  <div className="relative w-80 h-80 mx-auto">
                    
                    {/* Central Circle */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${services[activeStep].color} opacity-20 animate-pulse`}></div>
                    <div className={`absolute inset-4 rounded-full bg-gradient-to-r ${services[activeStep].color} opacity-40`}></div>
                    <div className={`absolute inset-8 rounded-full bg-gradient-to-r ${services[activeStep].color} opacity-60 flex items-center justify-center`}>
                      <div className="text-6xl">{services[activeStep].icon}</div>
                    </div>

                    {/* Orbiting Elements */}
                    {services.map((service, index) => (
                      <div
                        key={index}
                        className={`absolute w-12 h-12 rounded-full bg-white shadow-lg border-2 flex items-center justify-center transition-all duration-500 cursor-pointer hover:scale-110 ${
                          index === activeStep 
                            ? `border-orange-500 scale-125` 
                            : completedSteps.includes(index)
                            ? 'border-green-400'
                            : 'border-orange-200'
                        }`}
                        style={{
                          transform: `rotate(${index * 90}deg) translateX(140px) rotate(-${index * 90}deg)`,
                          transformOrigin: '50% 50%'
                        }}
                        onClick={() => handleStepClick(index)}
                      >
                        <span className="text-xl">{service.icon}</span>
                        {completedSteps.includes(index) && index !== activeStep && (
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        )}
                      </div>
                    ))}

                    {/* Connection Lines */}
                    <svg className="absolute inset-0 w-full h-full">
                      {services.map((_, index) => (
                        <line
                          key={index}
                          x1="50%"
                          y1="50%"
                          x2={`${50 + 35 * Math.cos(index * Math.PI / 2)}%`}
                          y2={`${50 + 35 * Math.sin(index * Math.PI / 2)}%`}
                          stroke={index === activeStep ? '#f97316' : '#fed7aa'}
                          strokeWidth={index === activeStep ? "3" : "1"}
                          className="transition-all duration-500"
                          opacity={index === activeStep ? "0.8" : "0.3"}
                        />
                      ))}
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center mt-12 space-x-4">
            <button
              onClick={() => handleStepClick(activeStep > 0 ? activeStep - 1 : services.length - 1)}
              className="px-6 py-3 bg-white bg-opacity-60 backdrop-blur-sm border border-orange-300 text-orange-700 font-light tracking-wide rounded-full hover:bg-opacity-80 transform hover:scale-105 transition-all duration-300"
            >
              ← Previous
            </button>
            <button
              onClick={() => handleStepClick((activeStep + 1) % services.length)}
              className="px-6 py-3 bg-orange-400 text-white font-light tracking-wide rounded-full hover:bg-orange-500 transform hover:scale-105 transition-all duration-300"
            >
              Next →
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto border border-orange-200 shadow-xl">
            <h3 className="text-3xl font-light text-orange-800 mb-4">Ready to Begin Your Journey?</h3>
            <p className="text-orange-700 mb-8 leading-relaxed text-lg">
              Whether through professional support or soul-centered healing, Taffie is here to walk gently with you on your path to wholeness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-4 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-light tracking-wide rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg">
                Book Your First Session
              </button>
              <button className="px-10 py-4 border-2 border-orange-300 text-orange-700 font-light tracking-wide rounded-full hover:bg-orange-50 transform hover:scale-105 transition-all duration-300 text-lg">
                Connect on Instagram
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
);

};

export default Services;