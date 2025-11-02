"use client";
import React, { useState, useEffect } from "react";

const Services = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [completedSteps, setCompletedSteps] = useState([]);

  const services = [
    {
      icon: "🌀",
      title: "The 9 Phases of Transformation",
      subtitle: "Your Journey Through Healing",
      description:
        "A guided emotional transformation model that moves you from deep pain towards authentic peace and softness. Each phase helps you embrace and evolve through your emotional landscape, one gentle step at a time.",
      features: [
        "Pain → Grieving → Acceptance",
        "Accountability → Release → Peace",
        "Confidence → Growth → Softness",
        "Guidance through each emotional phase",
      ],
      color: "from-indigo-400 to-purple-500",
      bgColor: "bg-indigo-50",
    },
    {
      icon: "🌸",
      title: "1:1 Healing & Emotional Empowerment",
      subtitle: "Personalised Support for Your Growth",
      description:
        "Gentle, one-to-one sessions guiding you from heartbreak, anxiety or self-doubt into clarity, confidence and calm. A deeply supportive space to help you reconnect with your authentic self and emotional balance.",
      features: [
        "Emotional healing and resilience",
        "Confidence and self-worth restoration",
        "Mindfulness and grounding techniques",
        "Personal empowerment and clarity",
      ],
      color: "from-pink-400 to-rose-500",
      bgColor: "bg-pink-50",
    },
    {
      icon: "👥",
      title: "Professional Social Work Support",
      subtitle: "Qualified Adult Social Worker",
      description:
        "Professional, trauma-informed and person-centred support to guide you through emotional or life challenges. Delivered with compassion, expertise and integrity.",
      features: [
        "Trauma-informed approach",
        "Person-centred practice",
        "Support through life transitions",
        "Emotional wellbeing guidance",
      ],
      color: "from-orange-400 to-orange-500",
      bgColor: "bg-orange-50",
    },
    {
      icon: "🧠",
      title: "Men’s Listening & Advice Sessions",
      subtitle: "For Men Seeking Understanding",
      description:
        "A safe, confidential space where men can talk openly, be heard and receive grounded guidance. Not therapy – simply a place to reflect, share and regain emotional balance.",
      features: [
        "Empathetic, non-judgemental support",
        "Confidential one-to-one conversations",
        "Reflective advice and listening",
        "Emotional balance and grounding",
      ],
      color: "from-blue-400 to-indigo-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: "🏡",
      title: "The House of Gippeun Membership & Retreats",
      subtitle: "Community, Connection and Giving Back",
      description:
        "Join a nurturing community for healing retreats, reflective workshops and giving back through collective compassion. A space to grow, connect and contribute together.",
      features: [
        "Private healing retreats and circles",
        "Nature-based reflection and workshops",
        "Community service and charity projects",
        "Exclusive member invitations",
      ],
      color: "from-teal-400 to-cyan-500",
      bgColor: "bg-teal-50",
    },
  ];

  useEffect(() => {
    setIsInView(true);
    const timer = setInterval(() => {
      setActiveStep((prev) => {
        const next = (prev + 1) % services.length;
        if (!completedSteps.includes(prev)) {
          setCompletedSteps((completed) => [...completed, prev]);
        }
        return next;
      });
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const handleStepClick = (index) => {
    setActiveStep(index);
    if (!completedSteps.includes(index)) {
      setCompletedSteps((completed) => [...completed, index]);
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-white to-orange-50 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-200 via-yellow-100 to-green-200"></div>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-light text-orange-800 mb-6 tracking-wide">
            Your Healing Journey
          </h2>
          <p className="text-xl text-orange-700 max-w-3xl mx-auto leading-relaxed">
            Walk gently with Tafie through pain, and emerge emotionally grounded,
            whole, and free.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => handleStepClick(index)}
                className={`w-4 h-4 rounded-full transition-all duration-500 ${
                  index === activeStep
                    ? "bg-orange-500 scale-150 shadow-lg"
                    : completedSteps.includes(index)
                    ? "bg-orange-300 scale-110"
                    : "bg-orange-200 hover:bg-orange-300"
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

        {/* Main Content */}
        <div className="relative min-h-[600px]">
          <div
            className={`absolute inset-0 rounded-3xl transition-all duration-1000 ${services[activeStep].bgColor} opacity-30`}
          ></div>

          {/* Floating Particles */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${services[activeStep].color} opacity-40 animate-pulse`}
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + (i % 3) * 30}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            ></div>
          ))}

          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            {/* Left Side */}
            <div className="space-y-8 p-4">
              <div
                className={`transform transition-all duration-700 ${
                  isInView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                }`}
              >
                {/* Step Info */}
                <div className="flex items-center space-x-4 mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${services[activeStep].color} flex items-center justify-center text-3xl shadow-lg transform transition-all duration-500 hover:scale-110`}
                  >
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

                <h3 className="text-3xl md:text-4xl font-light text-orange-800 mb-4 leading-tight">
                  {services[activeStep].title}
                </h3>

                <p className="text-lg text-orange-700 leading-relaxed mb-6">
                  {services[activeStep].description}
                </p>

                <div className="space-y-3">
                  {services[activeStep].features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 transform transition-all duration-500"
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${services[activeStep].color}`}
                      ></div>
                      <span className="text-orange-700 font-light">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <button
                    className={`px-8 py-3 bg-gradient-to-r ${services[activeStep].color} text-white font-light tracking-wide rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                  >
                    Learn More About This Service
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side Visual */}
            <div className="relative">
              <div
                className={`transform transition-all duration-700 ${
                  isInView ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                }`}
              >
                <div className="relative w-80 h-80 mx-auto">
                  <div
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${services[activeStep].color} opacity-20 animate-pulse`}
                  ></div>
                  <div
                    className={`absolute inset-4 rounded-full bg-gradient-to-r ${services[activeStep].color} opacity-40`}
                  ></div>
                  <div
                    className={`absolute inset-8 rounded-full bg-gradient-to-r ${services[activeStep].color} opacity-60 flex items-center justify-center`}
                  >
                    <div className="text-6xl">{services[activeStep].icon}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mt-12 space-x-4">
          <button
            onClick={() =>
              handleStepClick(activeStep > 0 ? activeStep - 1 : services.length - 1)
            }
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

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto border border-orange-200 shadow-xl">
            <h3 className="text-3xl font-light text-orange-800 mb-4">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-orange-700 mb-8 leading-relaxed text-lg">
              Whether through professional support or soul-centred healing, Gippeun is here to walk gently with you on your path to wholeness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-4 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-light tracking-wide rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg">
                Book Your First Session
              </button>

              <a
                href="https://www.tiktok.com/@gippeun_ji"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 border-2 border-orange-300 text-orange-700 font-light tracking-wide rounded-full hover:bg-orange-50 transform hover:scale-105 transition-all duration-300 text-lg flex items-center justify-center space-x-2"
              >
                <span>Connect on TikTok</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M12.75 2c.41 1.61 1.74 2.85 3.36 3.14V9a6.75 6.75 0 1 1-6.75-6.75h3.39z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
