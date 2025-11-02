"use client";
import { useRef } from "react";

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
      behaviour: "smooth",
      block: "start",
    });
  };

  return (
    <div className="bg-gradient-to-b from-orange-50 to-white text-orange-900 py-20">
      {/* =====================
          Section 1 — Overview List
      ====================== */}
      <div className="max-w-3xl mx-auto px-6 mb-20">
        <h2 className="text-4xl font-light text-center mb-12">
          Explore Our Offerings
        </h2>

        <ul className="space-y-4">
          {[
            {
              key: "phases",
              icon: "🌀",
              title: "The 9 Phases of Transformation",
              subtitle: "Your journey through holistic healing and renewal.",
            },
            {
              key: "healing",
              icon: "🌸",
              title: "1:1 Healing & Emotional Empowerment",
              subtitle: "Personalised sessions for confidence and grounding.",
            },
            {
              key: "social",
              icon: "👥",
              title: "Professional Social Work Support",
              subtitle: "Compassionate, qualified, person-centred care.",
            },
            {
              key: "men",
              icon: "🧠",
              title: "Men’s Listening & Advice Sessions",
              subtitle: "For men seeking understanding and emotional balance.",
            },
            {
              key: "retreats",
              icon: "🏡",
              title: "The House of Gippeun Membership & Retreats",
              subtitle: "Community, connection, and giving back.",
            },
          ].map(({ key, icon, title, subtitle }) => (
            <li key={key}>
              <button
                onClick={() => scrollToSection(key)}
                className="w-full flex items-start gap-4 bg-white bg-opacity-80 border border-orange-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:bg-orange-50 transition-all duration-300 text-left"
              >
                <div className="text-3xl">{icon}</div>
                <div>
                  <h3 className="text-xl font-medium mb-1">{title}</h3>
                  <p className="text-orange-700 text-sm">{subtitle}</p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* =====================
          Section 2 — Detailed Descriptions
      ====================== */}
      <div className="space-y-32 max-w-4xl mx-auto px-6">
        {/* 1. The 9 Phases of Transformation */}
        <div ref={sectionRefs.phases} className="scroll-mt-24">
          <div className="bg-white bg-opacity-80 backdrop-blur-sm border border-orange-200 rounded-3xl p-10 shadow-xl">
            <h3 className="text-3xl font-light mb-4 text-orange-800">
              🌀 The 9 Phases of Transformation
            </h3>
            <p className="text-orange-700 leading-relaxed text-lg">
              A carefully designed journey through nine stages of growth — from
              awareness and release to realignment and purpose. Each phase is
              guided with compassion, helping you uncover and embody your
              authentic self.
            </p>
          </div>
        </div>

        {/* 2. Healing & Emotional Empowerment */}
        <div ref={sectionRefs.healing} className="scroll-mt-24">
          <div className="bg-white bg-opacity-80 backdrop-blur-sm border border-orange-200 rounded-3xl p-10 shadow-xl">
            <h3 className="text-3xl font-light mb-4 text-orange-800">
              🌸 1:1 Healing & Emotional Empowerment
            </h3>
            <p className="text-orange-700 leading-relaxed text-lg">
              Personalised one-to-one sessions designed to help you regulate
              emotions, rebuild confidence, and strengthen your emotional
              foundations. Through intuitive guidance, gentle techniques and
              mindful reflection, you’ll find grounding and empowerment from
              within.
            </p>
          </div>
        </div>

        {/* 3. Professional Social Work Support */}
        <div ref={sectionRefs.social} className="scroll-mt-24">
          <div className="bg-white bg-opacity-80 backdrop-blur-sm border border-orange-200 rounded-3xl p-10 shadow-xl">
            <h3 className="text-3xl font-light mb-4 text-orange-800">
              👥 Professional Social Work Support
            </h3>
            <p className="text-orange-700 leading-relaxed text-lg">
              Rooted in professional practice, this service provides
              trauma-informed, person-centred support for those facing life’s
              challenges. With years of experience in adult social work,
              Gippeun offers practical guidance, safeguarding, and compassionate
              advocacy.
            </p>
          </div>
        </div>

        {/* 4. Men’s Listening & Advice Sessions */}
        <div ref={sectionRefs.men} className="scroll-mt-24">
          <div className="bg-white bg-opacity-80 backdrop-blur-sm border border-orange-200 rounded-3xl p-10 shadow-xl">
            <h3 className="text-3xl font-light mb-4 text-orange-800">
              🧠 Men’s Listening & Advice Sessions
            </h3>
            <p className="text-orange-700 leading-relaxed text-lg">
              A safe and non-judgemental space for men to talk, reflect, and
              gain guidance. Whether navigating relationships, identity, or
              emotional struggles, these sessions are tailored to support honest
              conversation and healthy expression.
            </p>
          </div>
        </div>

        {/* 5. Membership & Retreats */}
        <div ref={sectionRefs.retreats} className="scroll-mt-24">
          <div className="bg-white bg-opacity-80 backdrop-blur-sm border border-orange-200 rounded-3xl p-10 shadow-xl">
            <h3 className="text-3xl font-light mb-4 text-orange-800">
              🏡 The House of Gippeun Membership & Retreats
            </h3>
            <p className="text-orange-700 leading-relaxed text-lg">
              A nurturing community of like-minded individuals seeking inner
              balance and soulful connection. Join private retreats, healing
              circles and community initiatives that blend self-care with
              service — nurturing both self and society.
            </p>
          </div>
        </div>
      </div>

      {/* =====================
          Call to Action Section
      ====================== */}
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

            {/* TikTok Link */}
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
