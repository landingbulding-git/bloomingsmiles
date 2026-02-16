import React from 'react';

const ValueProps: React.FC = () => {
  return (
    <section id="pediatric" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Headlines */}
        <div className="space-y-16">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900">
              Gentle Pediatric Dentistry So That Your Child Actually Enjoys Their Dental Visits.
            </h3>
            <p className="text-gray-600 leading-relaxed mx-auto max-w-2xl">
              We transform the typical "scary" dentist trip into a fun, educational adventure.
            </p>
          </div>

          <div id="ortho" className="max-w-4xl mx-auto text-center space-y-4">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900">
              Customized Orthodontic Plans (Braces & Invisalign) So That You Get Faster Results Tailored to Your Unique Smile.
            </h3>
            <p className="text-gray-600 leading-relaxed mx-auto max-w-2xl">
              Precision technology means less time in the chair and more time smiling.
            </p>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900">
              Advanced Dental Technology So That Every Procedure is Faster, Safer, and Completely Pain-Free.
            </h3>
            <p className="text-gray-600 leading-relaxed mx-auto max-w-2xl">
               From digital scanning to low-radiation imaging, we invest in the best for your child.
            </p>
          </div>
        </div>

        {/* Visual Directive: Icon Row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-3 group">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <span className="text-4xl">🦷</span>
            </div>
            <h4 className="font-bold text-gray-900">First Visit Care</h4>
          </div>
          
          <div className="flex flex-col items-center text-center space-y-3 group">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
               <span className="text-4xl">✨</span>
            </div>
            <h4 className="font-bold text-gray-900">Digital Orthodontics</h4>
          </div>

          <div className="flex flex-col items-center text-center space-y-3 group">
             <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
               <span className="text-4xl">🛡️</span>
            </div>
            <h4 className="font-bold text-gray-900">Preventative Care</h4>
          </div>

          <div className="flex flex-col items-center text-center space-y-3 group">
             <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
               <span className="text-4xl">☁️</span>
            </div>
            <h4 className="font-bold text-gray-900">Sedation Options</h4>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ValueProps;