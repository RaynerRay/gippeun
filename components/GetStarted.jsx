"use client"
import React, { useState } from 'react';

const GetStarted = () => {
  const [selectedFocus, setSelectedFocus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    preferredTime: '',
    focusArea: '',
    goals: ''
  });
  const [activeTab, setActiveTab] = useState('pricing');

  const focusAreas = [
    { emoji: '💔', text: 'Heartbreak & Emotional Pain', color: 'from-rose-400 to-pink-500' },
    { emoji: '😰', text: 'Anxiety & Stress', color: 'from-blue-400 to-indigo-500' },
    { emoji: '✨', text: 'Confidence Building', color: 'from-yellow-400 to-amber-500' },
    { emoji: '🌱', text: 'Self-Worth & Trust', color: 'from-green-400 to-emerald-500' },
    { emoji: '🎯', text: 'Life Transitions', color: 'from-purple-400 to-violet-500' },
    { emoji: '🧘', text: 'Emotional Grounding', color: 'from-teal-400 to-cyan-500' }
  ];

  const timeSlots = [
    { day: 'Saturday', times: ['10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM'] },
    { day: 'Sunday', times: ['10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM'] },
    { day: 'Weekdays', times: ['6:00 PM', '7:00 PM', '8:00 PM'] }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Booking request:', formData);
  };

  return (
    <div className="relative bg-gradient-to-b from-orange-50 via-white to-green-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-light text-orange-800 mb-6 tracking-wide">
            Begin Your Healing
          </h2>
          <p className="text-xl text-orange-700 max-w-3xl mx-auto leading-relaxed">
            Healing doesn't have to be rushed, hard, or lonely. You are welcome here — just as you are.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white bg-opacity-60 backdrop-blur-sm rounded-full p-2 border border-orange-200">
            <button
              onClick={() => setActiveTab('pricing')}
              className={`px-6 py-3 rounded-full font-light tracking-wide transition-all duration-300 ${
                activeTab === 'pricing' 
                  ? 'bg-orange-400 text-white shadow-md' 
                  : 'text-orange-700 hover:bg-orange-100'
              }`}
            >
              💰 Pricing & Sessions
            </button>
            <button
              onClick={() => setActiveTab('booking')}
              className={`px-6 py-3 rounded-full font-light tracking-wide transition-all duration-300 ${
                activeTab === 'booking' 
                  ? 'bg-orange-400 text-white shadow-md' 
                  : 'text-orange-700 hover:bg-orange-100'
              }`}
            >
              📝 Book Your Session
            </button>
          </div>
        </div>

        {/* Content Sections */}
        <div className="relative">
          
          {/* Pricing & Sessions Tab */}
          {activeTab === 'pricing' && (
            <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
              
              {/* Pricing Card */}
              <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 border border-orange-200 shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="text-2xl font-light text-orange-800 mb-2">Investment</h3>
                  <div className="text-4xl font-light text-orange-600 mb-2">£50</div>
                  <p className="text-orange-700">per hour</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-orange-700">Sessions are 1-2 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-orange-700">Online sessions (Zoom, WhatsApp, voice)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-orange-700">Flexible payment options</span>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-orange-50 rounded-2xl border border-orange-100">
                  <p className="text-sm text-orange-700 text-center leading-relaxed">
                    <strong>💡 Recommended:</strong> Book 10+ sessions (1-2 per week) for deep transformation and lasting emotional clarity
                  </p>
                </div>
              </div>

              {/* Availability Card */}
              <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 border border-orange-200 shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">🗓️</div>
                  <h3 className="text-2xl font-light text-orange-800 mb-4">Availability</h3>
                </div>
                
                <div className="space-y-6">
                  {timeSlots.map((slot, index) => (
                    <div key={index} className="border-b border-orange-100 pb-4 last:border-b-0">
                      <h4 className="font-medium text-orange-800 mb-2">{slot.day}</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {slot.times.map((time, timeIndex) => (
                          <div key={timeIndex} className="px-3 py-2 bg-orange-50 rounded-lg text-sm text-orange-700 text-center">
                            {time}
                          </div>
                        ))}
                      </div>
                      {slot.day === 'Weekdays' && (
                        <p className="text-xs text-orange-600 mt-2 italic">*Subject to availability</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Booking Form Tab */}
          {activeTab === 'booking' && (
  <div className="max-w-4xl mx-auto animate-fade-in">
    <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 border border-orange-200 shadow-lg">
      
      {/* Form Header */}
      <div className="text-center mb-8">
        <div className="text-4xl mb-4">📝</div>
        <h3 className="text-2xl font-light text-orange-800 mb-2">Book Your Session</h3>
        <p className="text-orange-700">Please share the details below to begin your healing journey</p>
      </div>

      <form 
        action="https://formsubmit.co/gippeun.tiffin@yahoo.com" 
        method="POST" 
        className="grid md:grid-cols-2 gap-6"
      >
        {/* Hidden fields for FormSubmit */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />

        {/* Left Column */}
        <div className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-orange-800 font-light mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-3 rounded-xl border border-orange-200 bg-white bg-opacity-60 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-300"
              placeholder="Enter your name"
              required
            />
          </div>
          {/* Contact */}
          <div>
            <label className="block text-orange-800 font-light mb-2">Your Email / Phone Number</label>
            <input
              type="text"
              name="emailornumber"
              className="w-full px-4 py-3 rounded-xl border border-orange-200 bg-white bg-opacity-60 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-300"
              placeholder="Enter your email address or phone number"
              required
            />
          </div>

          {/* Preferred Time */}
          <div>
            <label className="block text-orange-800 font-light mb-2">Preferred Day + Time</label>
            <select
              name="preferredTime"
              className="w-full px-4 py-3 rounded-xl border border-orange-200 bg-white bg-opacity-60 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-300"
              required
            >
              <option value="">Select a time slot</option>
              {timeSlots.map((slot) => 
                slot.times.map((time) => (
                  <option key={`${slot.day}-${time}`} value={`${slot.day} ${time}`}>
                    {slot.day} - {time}
                  </option>
                ))
              )}
            </select>
          </div>

          {/* Focus Area */}
         {/* Focus Area */}
<div>
  <label className="block text-orange-800 font-light mb-3">
    What would you like to focus on?
  </label>
  <div className="grid grid-cols-1 gap-2">
    {focusAreas.map((area, index) => (
      <label
        key={index}
        className="relative flex items-center space-x-3 p-3 rounded-xl border border-orange-200 bg-white bg-opacity-60 hover:bg-orange-50 cursor-pointer transition-all duration-300 peer-checked:border-orange-400 peer-checked:bg-orange-50"
      >
        {/* Hidden Radio */}
        <input
          type="radio"
          name="focusArea"
          value={area.text}
          className="peer hidden"
          required
        />
        
        {/* Content that stays visible */}
        <span className="text-xl">{area.emoji}</span>
        <span className="text-orange-700">{area.text}</span>
      </label>
    ))}
  </div>
</div>

        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Goals */}
          <div>
            <label className="block text-orange-800 font-light mb-2">What do you hope to achieve?</label>
            <textarea
              name="goals"
              className="w-full px-4 py-3 rounded-xl border border-orange-200 bg-white bg-opacity-60 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-300 h-32 resize-none"
              placeholder="Share your goals and what you'd like to work on during our session(s)..."
              required
            />
          </div>

          {/* Additional Info */}
          <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
            <h4 className="font-medium text-orange-800 mb-3">What happens next?</h4>
            <div className="space-y-2 text-sm text-orange-700">
              <div className="flex items-start space-x-2">
                <span>1.</span>
                <span>I'll review your request and confirm your time slot</span>
              </div>
              <div className="flex items-start space-x-2">
                <span>2.</span>
                <span>You'll receive session details and payment information</span>
              </div>
              <div className="flex items-start space-x-2">
                <span>3.</span>
                <span>We'll begin your healing journey together</span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-8 py-4 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-light tracking-wide rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-lg"
          >
            Send Booking Request
          </button>
        </div>
      </form>
    </div>
  </div>
)}


        </div>

        {/* Footer Message */}
        <div className="text-center mt-16">
          <div className="bg-white bg-opacity-60 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto border border-orange-200">
            <p className="text-lg text-orange-700 leading-relaxed mb-4">
              ✨ Thank you for choosing The House of Gippeun
            </p>
            <p className="text-orange-600 italic">
              With softness and grace,<br />
              <strong>T | The House of Gippeun</strong><br />
              Healing Coach & Emotional Guide
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GetStarted;