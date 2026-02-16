import React from 'react';
import BookingForm from './BookingForm';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-brand-blue/30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Visuals */}
          <div className="space-y-6 z-10">
            
            {/* Social Proof Stack (ATF) - Moved to Top */}
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center text-sm font-semibold text-gray-700">
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
                </div>
                <span>300+ 5-Star Yelp Reviews</span>
              </div>
              <span className="hidden sm:block text-gray-300">|</span>
              <div className="flex items-center gap-2">
                <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-bold">G</span>
                <span>4.7/5 Google Rating</span>
              </div>
              <span className="hidden sm:block text-gray-300">|</span>
              <div className="italic text-gray-500 font-normal">
                As Seen In: San Fernando Valley Parent Magazine
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-gray-900 leading-tight">
                Achieve a Confident, Radiant Smile Your Child Will Love Starting Today While Building a Lifetime of Oral Health.
              </h1>
              <h2 className="text-lg sm:text-xl text-gray-600 font-medium leading-relaxed max-w-2xl">
                Tired of dental visits that feel like a battle? Our board-certified specialists provide gentle, kid-first pediatric and orthodontic care designed to eliminate anxiety and deliver perfect results.
              </h2>
            </div>
            
          </div>

          {/* Right Column: Conversion Trigger Form */}
          <div className="w-full max-w-md mx-auto lg:max-w-none lg:ml-auto z-20">
             <BookingForm />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;