"use client";
import React, { useState } from "react";

const Services = () => {
  // Grouped service sections
  const sections = [
    {
      title: "Professional Healing & Support",
      subtitle:
        "Walk gently through pain, toward peace, clarity, and confidence.",
      services: [
        {
          icon: "👥",
          title: "Professional Social Work",
          description:
            "Person-centred, trauma-informed practice supporting you through emotional and life challenges with compassion and expertise.",
          features: [
            "Trauma-informed approach",
            "Person-centred practice",
            "Emotional support",
            "Life transitions",
          ],
          color: "from-orange-400 to-orange-500",
        },
        {
          icon: "🌸",
          title: "1:1 Healing Sessions",
          description:
            "Personalized sessions guiding you from heartbreak, anxiety, or low self-worth into softness, clarity, and power.",
          features: [
            "Emotional healing",
            "Confidence building",
            "Self-trust development",
            "Personal empowerment",
          ],
          color: "from-pink-400 to-rose-500",
        },
        {
          icon: "✨",
          title: "Confidence Building",
          description:
            "Transform limiting beliefs and step into your authentic power through gentle, supportive guidance tailored to your journey.",
          features: [
            "Self-worth restoration",
            "Inner strength activation",
            "Authentic self-expression",
            "Personal boundaries",
          ],
          color: "from-yellow-400 to-amber-500",
        },
        {
          icon: "🌿",
          title: "Emotional Grounding",
          description:
            "Learn to navigate emotions with grace, develop resilience, and create lasting inner stability through proven techniques.",
          features: [
            "Emotional regulation",
            "Mindfulness practices",
            "Stress management",
            "Inner peace cultivation",
          ],
          color: "from-green-400 to-emerald-500",
        },
      ],
    },
    {
      title: "The Gippeun Journey",
      subtitle: "A pathway through emotional transformation & sacred retreats.",
      services: [
        {
          icon: "🌀",
          title: "The 9 Phases of Transformation",
          description:
            "A guided model that moves you from deep pain toward authentic peace and softness. Each phase helps you embrace and evolve through your emotional landscape.",
          features: [
            "Pain → Grieving → Acceptance",
            "Accountability → Release → Peace",
            "Confidence → Growth → Softness",
          ],
          color: "from-indigo-400 to-purple-500",
        },
        {
          icon: "🏡",
          title: "Membership: The House of Gippeun Retreats",
          description:
            "Join an intimate community for transformative in-person retreats designed for deep healing, reflection, and connection.",
          features: [
            "Private retreat invitations",
            "Healing workshops & circles",
            "Nature-centered reflection",
            "Exclusive membership access",
          ],
          color: "from-teal-400 to-cyan-500",
        },
      ],
    },
    {
      title: "Giving Back & Grounded Support",
      subtitle: "Extending compassion into the community and to men seeking space.",
      services: [
        {
          icon: "🤲",
          title: "The House of Gippeun Charity Work",
          description:
            "Extending healing into the community through outreach programs, support for vulnerable individuals, and collaborative service initiatives.",
          features: [
            "Community healing projects",
            "Support for women & families",
            "Collaborations with local causes",
            "Volunteer opportunities",
          ],
          color: "from-red-400 to-rose-500",
        },
        {
          icon: "🧠",
          title: "Men’s Listening & Advice Sessions",
          description:
            "A safe, non-judgmental space where men can talk, be heard, and receive grounded advice — not therapy, but compassionate listening.",
          features: [
            "Confidential one-on-one talks",
            "Gentle guidance, not counseling",
            "Male-focused emotional space",
            "Restoring balance & clarity",
          ],
          color: "from-blue-400 to-indigo-500",
        },
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        {sections.map((section, sIndex) => (
          <div key={sIndex}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light text-orange-800 mb-4">
                {section.title}
              </h2>
              <p className="text-lg text-orange-700 max-w-3xl mx-auto">
                {section.subtitle}
              </p>
            </div>

            {/* Cards layout */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.services.map((service, index) => (
                <div
                  key={index}
                  className={`bg-white border border-orange-100 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105`}
                >
                  <div
                    className={`w-14 h-14 mb-4 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-3xl`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-2xl text-orange-800 font-light mb-3">
                    {service.title}
                  </h3>
                  <p className="text-orange-700 text-base mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 text-orange-600 text-sm">
                    {service.features.map((f, i) => (
                      <li key={i}>• {f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto border border-orange-200 shadow-xl">
            <h3 className="text-3xl font-light text-orange-800 mb-4">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-orange-700 mb-8 leading-relaxed text-lg">
              Whether through professional support or soul-centered healing,
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
    </div>
  );
};

export default Services;
