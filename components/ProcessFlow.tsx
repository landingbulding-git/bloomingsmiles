import React from 'react';

const ProcessFlow: React.FC = () => {
  return (
    <section className="bg-brand-blue/20 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Get Your Child’s Smile on Track in 3 Simple Steps.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-gray-200 -z-10"></div>

          {/* Step 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg relative border border-gray-100 flex flex-col items-center text-center h-full">
            <div className="w-16 h-16 bg-primary text-white text-2xl font-bold rounded-full flex items-center justify-center mb-6 shadow-md border-4 border-white">
              1
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Book Your Easy Visit</h3>
            <p className="text-gray-600">2-minute online request.</p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg relative border border-gray-100 flex flex-col items-center text-center h-full">
            <div className="w-16 h-16 bg-primary text-white text-2xl font-bold rounded-full flex items-center justify-center mb-6 shadow-md border-4 border-white">
              2
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Consultation</h3>
            <p className="text-gray-600">We handle the insurance and create a custom plan.</p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg relative border border-gray-100 flex flex-col items-center text-center h-full">
            <div className="w-16 h-16 bg-secondary text-white text-2xl font-bold rounded-full flex items-center justify-center mb-6 shadow-md border-4 border-white">
              3
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">The Big Payoff</h3>
            <p className="text-gray-600">Your child leaves with a healthy, confident smile they are proud to show off.</p>
          </div>

        </div>

        <div className="mt-12 text-center">
            <a href="#contact" className="inline-block bg-secondary hover:bg-pink-700 text-white font-bold py-4 px-10 rounded-full shadow-xl transform transition hover:-translate-y-1">
                Start Step 1 Now
            </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;