"use client"
import React, { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('story');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { icon: '🧠', title: 'Trauma-informed Support', description: 'Compassionate care that understands the impact of trauma' },
    { icon: '🎯', title: 'Person-centred Practice', description: 'Your needs and goals guide every session' },
    { icon: '👂', title: 'Deep Presence & Listening', description: 'Creating space for your truth to emerge' },
    { icon: '💪', title: 'Emotional Accountability', description: 'Gentle guidance toward lasting change' },
    { icon: '📖', title: 'Guided Self-reflection', description: 'Tools for deeper self-understanding' },
    { icon: '🌸', title: 'Boundaries & Self-love', description: 'Building healthy relationships with yourself and others' },
    { icon: '🌍', title: 'Culturally Sensitive Care', description: 'Honoring your unique background and beliefs' },
    { icon: '✨', title: 'Storytelling & Truth-telling', description: 'Finding healing through authentic narrative' }
  ];

  const qualifications = [
    { title: 'Qualified Social Worker', detail: 'Registered professional with statutory services experience' },
    { title: 'Trauma-Aware Practice', detail: 'Specialized training in trauma-informed care approaches' },
    { title: 'Adult Mental Health', detail: 'Years of experience supporting diverse communities' },
    { title: 'Solution-Focused Therapy', detail: 'Outcome-focused interventions for lasting change' }
  ];

  return (
    <div className="relative bg-gradient-to-b from-green-50 via-white to-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-light text-orange-800 mb-6 tracking-wide">
            About Gippeun
          </h2>
          <p className="text-xl text-orange-700 max-w-3xl mx-auto leading-relaxed">
            Experienced Social Worker | Healing Coach & Emotional Mentor
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white bg-opacity-60 backdrop-blur-sm rounded-full p-2 border border-orange-200 shadow-lg">
            <button
              onClick={() => setActiveTab('story')}
              className={`px-6 py-3 rounded-full font-light tracking-wide transition-all duration-300 ${
                activeTab === 'story' 
                  ? 'bg-orange-400 text-white shadow-md' 
                  : 'text-orange-700 hover:bg-orange-100'
              }`}
            >
              🌱 My Story
            </button>
            <button
              onClick={() => setActiveTab('approach')}
              className={`px-6 py-3 rounded-full font-light tracking-wide transition-all duration-300 ${
                activeTab === 'approach' 
                  ? 'bg-orange-400 text-white shadow-md' 
                  : 'text-orange-700 hover:bg-orange-100'
              }`}
            >
              💫 My Approach
            </button>
            <button
              onClick={() => setActiveTab('credentials')}
              className={`px-6 py-3 rounded-full font-light tracking-wide transition-all duration-300 ${
                activeTab === 'credentials' 
                  ? 'bg-orange-400 text-white shadow-md' 
                  : 'text-orange-700 hover:bg-orange-100'
              }`}
            >
              📜 Credentials
            </button>
          </div>
        </div>

        {/* Content Sections */}
        <div className="relative">
          
          {/* My Story Tab */}
          {activeTab === 'story' && (
            <div className="grid lg:grid-cols-2 gap-12 items-center animate-fade-in">
              
              {/* Left Side - Story */}
              <div className="space-y-6">
                <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 border border-orange-200 shadow-lg">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl text-white">🌸</span>
                    </div>
                    <h3 className="text-2xl font-light text-orange-800">Founder of The House of Gippeun</h3>
                  </div>
                  
                  <div className="space-y-4 text-orange-700 leading-relaxed">
                    <p>
                      I am a qualified, trauma-aware social worker with years of experience supporting adults through complex emotional, psychological, and life challenges. My work is rooted in empathy, confidentiality, and person-centred, outcome-focused practice.
                    </p>
                    <p>
                      Through working in statutory services with diverse individuals and vulnerable communities, I've refined skills that blend professional expertise with deep compassion.
                    </p>
                    <p>
                      Alongside my professional role, I am also a gifted healing coach and mentor. I specialize in guiding women through emotional healing — especially around heartbreak, anxiety, life transitions, grief, and low self-worth.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side - Mission */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-3xl p-8 border border-orange-200 shadow-lg">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">💝</div>
                    <h3 className="text-2xl font-light text-orange-800">My Mission</h3>
                  </div>
                  
                  <div className="text-center text-lg text-orange-700 leading-relaxed mb-6">
                    <p className="italic">
                      "To walk gently with people through their pain and support them in becoming emotionally grounded, whole, and free."
                    </p>
                  </div>
                  
                  <div className="space-y-4 text-orange-700">
                    <p>
                      Whether in my role as a social worker or a healing coach, this mission guides everything I do.
                    </p>
                    <p>
                      My approach blends therapeutic insight with intuitive care, offering 1:1 sessions that help women reconnect to self-trust, softness, and personal power.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* My Approach Tab */}
          {activeTab === 'approach' && (
            <div className="animate-fade-in">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-light text-orange-800 mb-4">Skills & Tools</h3>
                <p className="text-lg text-orange-700 max-w-2xl mx-auto">
                  A holistic approach that honors both professional training and intuitive wisdom
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-6 border border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                    onMouseEnter={() => setHoveredSkill(index)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="text-center">
                      <div className="text-3xl mb-3">{skill.icon}</div>
                      <h4 className="font-medium text-orange-800 mb-2 text-sm">{skill.title}</h4>
                      <p className={`text-xs text-orange-600 transition-all duration-300 ${
                        hoveredSkill === index ? 'opacity-100 max-h-20' : 'opacity-70 max-h-10'
                      } overflow-hidden`}>
                        {skill.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Approach Philosophy */}
              <div className="mt-12 bg-white bg-opacity-60 backdrop-blur-sm rounded-3xl p-8 border border-orange-200 shadow-lg">
                <div className="text-center">
                  <h3 className="text-2xl font-light text-orange-800 mb-6">My Therapeutic Philosophy</h3>
                  <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                      <div className="text-3xl mb-3">🤝</div>
                      <h4 className="font-medium text-orange-800 mb-2">Empathy & Trust</h4>
                      <p className="text-sm text-orange-700">Building safe spaces where healing can naturally unfold</p>
                    </div>
                    <div>
                      <div className="text-3xl mb-3">🎯</div>
                      <h4 className="font-medium text-orange-800 mb-2">Outcome-Focused</h4>
                      <p className="text-sm text-orange-700">Working toward tangible, lasting change in your life</p>
                    </div>
                    <div>
                      <div className="text-3xl mb-3">🌿</div>
                      <h4 className="font-medium text-orange-800 mb-2">Holistic Care</h4>
                      <p className="text-sm text-orange-700">Honoring your whole self - mind, body, and spirit</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Credentials Tab */}
          {activeTab === 'credentials' && (
            <div className="animate-fade-in">
              <div className="grid lg:grid-cols-2 gap-8">
                
                {/* Professional Qualifications */}
                <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 border border-orange-200 shadow-lg">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">🎓</div>
                    <h3 className="text-2xl font-light text-orange-800">Professional Qualifications</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {qualifications.map((qual, index) => (
                      <div key={index} className="border-l-4 border-orange-300 pl-4 py-2">
                        <h4 className="font-medium text-orange-800">{qual.title}</h4>
                        <p className="text-sm text-orange-600">{qual.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Important Information */}
                <div className="space-y-6">
                  
                  {/* Confidentiality */}
                  <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">🔒</div>
                      <div>
                        <h4 className="font-medium text-green-800 mb-2">Confidentiality</h4>
                        <p className="text-sm text-green-700 leading-relaxed">
                          All sessions are completely confidential. Personal information will not be disclosed without written consent, 
                          except where legally required (e.g., risk of harm to self or others).
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Disclaimer */}
                  <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">⚖️</div>
                      <div>
                        <h4 className="font-medium text-blue-800 mb-2">Important Disclaimer</h4>
                        <p className="text-sm text-blue-700 leading-relaxed">
                          Coaching is not a substitute for therapy, counselling, or mental health support. 
                          If you are experiencing severe emotional distress or are in crisis, please seek support 
                          from a licensed professional or emergency services.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Contact for Emergencies */}
                  <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">🚨</div>
                      <div>
                        <h4 className="font-medium text-red-800 mb-2">Crisis Support</h4>
                        <p className="text-sm text-red-700 leading-relaxed">
                          UK: Samaritans 116 123 (free, 24/7)<br/>
                          Emergency: 999 or NHS 111<br/>
                          Crisis Text Line: Text SHOUT to 85258
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white bg-opacity-60 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto border border-orange-200 shadow-lg">
            <h3 className="text-2xl font-light text-orange-800 mb-4">Ready to Begin Your Healing Journey?</h3>
            <p className="text-orange-700 mb-6 leading-relaxed">
              Whether you're seeking professional support or soul-centered healing, 
              I'm here to walk gently with you toward wholeness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-light tracking-wide rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Book a Session
              </button>
              <button className="px-8 py-3 border border-orange-300 text-orange-700 font-light tracking-wide rounded-full hover:bg-orange-50 transform hover:scale-105 transition-all duration-300">
                Follow @thehouseofgippeun
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;