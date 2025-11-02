"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Services() {
  const sectionRefs = {
    phases: useRef(null),
    healing: useRef(null),
    social: useRef(null),
    men: useRef(null),
    retreats: useRef(null),
  };

  const scrollToSection = (key) => {
    sectionRefs[key]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const slides = [
    {
      key: "phases",
      icon: "🌀",
      title: "The 9 Phases of Transformation",
      text: "A carefully designed journey through nine stages of growth — from awareness and release to realignment and purpose. Each phase is guided with compassion, helping you uncover and embody your authentic self.",
      gradient: "from-purple-200 via-pink-200 to-orange-100",
    },
    {
      key: "healing",
      icon: "🌸",
      title: "1:1 Healing & Emotional Empowerment",
      text: "Personalised one-to-one sessions designed to help you regulate emotions, rebuild confidence, and strengthen your emotional foundations.",
      gradient: "from-pink-100 via-rose-100 to-orange-100",
    },
    {
      key: "social",
      icon: "👥",
      title: "Professional Social Work Support",
      text: "Rooted in professional practice, this service provides trauma-informed, person-centred support for those facing life’s challenges.",
      gradient: "from-blue-100 via-teal-100 to-green-100",
    },
    {
      key: "men",
      icon: "🧠",
      title: "Men’s Listening & Advice Sessions",
      text: "A safe and non-judgemental space for men to talk, reflect, and gain guidance on relationships, identity, and emotional struggles.",
      gradient: "from-indigo-100 via-cyan-100 to-sky-100",
    },
    {
      key: "retreats",
      icon: "🏡",
      title: "The House of Gippeun Membership & Retreats",
      text: "A nurturing community of like-minded individuals seeking inner balance and soulful connection through retreats and healing circles.",
      gradient: "from-green-100 via-lime-100 to-yellow-100",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="bg-gradient-to-b from-orange-50 to-white text-orange-900 py-20">
      {/* Section 1 — Overview List */}
      <div className="max-w-3xl mx-auto px-6 mb-20">
        <h2 className="text-4xl font-light text-center mb-12">
          Explore Our Offerings
        </h2>

        <ul className="space-y-4">
          {slides.map(({ key, icon, title, text }) => (
            <li key={key}>
              <button
                onClick={() => scrollToSection(key)}
                className="w-full flex items-start gap-4 bg-white bg-opacity-80 border border-orange-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:bg-orange-50 transition-all duration-300 text-left"
              >
                <div className="text-3xl">{icon}</div>
                <div>
                  <h3 className="text-xl font-medium mb-1">{title}</h3>
                  <p className="text-orange-700 text-sm">{text}</p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Section 2 — Carousel */}
      <div className="relative max-w-4xl mx-auto px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            ref={sectionRefs[slides[currentIndex].key]}
            className={`bg-gradient-to-br ${slides[currentIndex].gradient} backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-orange-200 text-center`}
          >
            <div className="text-5xl mb-4">{slides[currentIndex].icon}</div>
            <h3 className="text-3xl font-light mb-4 text-orange-800">
              {slides[currentIndex].title}
            </h3>
            <p className="text-orange-700 leading-relaxed text-lg">
              {slides[currentIndex].text}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 p-3 rounded-full shadow-md hover:scale-110 transition"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6 text-orange-700" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 p-3 rounded-full shadow-md hover:scale-110 transition"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6 text-orange-700" />
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentIndex
                  ? "bg-orange-500 scale-125"
                  : "bg-orange-200 hover:bg-orange-300"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-32">
        <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-10 max-w-2xl mx-auto border border-orange-200 shadow-xl">
          <h3 className="text-3xl font-light text-orange-800 mb-4">
            Ready to Begin Your Journey?
          </h3>
          <p className="text-orange-700 mb-8 leading-relaxed text-lg">
            Whether through professional support or soul-centred healing,
            Gippeun is here to walk gently with you on your path to wholeness.
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
  );
}
