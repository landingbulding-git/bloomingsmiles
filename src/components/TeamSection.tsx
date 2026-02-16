import React from 'react';

const TeamSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Images Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
             <img 
               src="https://cdn.prod.website-files.com/5f96cbbba8d742bdcc652c6e/5fa31c8a932e6b43467a6fbf_Dr.%20Golian%20With%20Tooth%20Background.jpg" 
               alt="Dr. Hormoz Golian" 
               className="rounded-xl shadow-lg w-full h-auto object-cover aspect-[3/4]"
             />
             <img 
               src="https://cdn.prod.website-files.com/5f96cbbba8d742bdcc652c6e/5fa31c618ce6b2a79005067e_Dr.%20Sanjideh%20With%20Tooth%20Background.jpg" 
               alt="Dr. Payam Sanjideh" 
               className="rounded-xl shadow-lg w-full h-auto object-cover aspect-[3/4] mt-8"
             />
          </div>

          {/* Copy */}
          <div className="w-full lg:w-1/2 text-left space-y-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
               Meet Dr. Hormoz Golian & Dr. Payam Sanjideh
            </h2>
            
            <blockquote className="text-xl text-primary font-medium italic border-l-4 border-secondary pl-4 py-2 bg-gray-50 rounded-r-lg">
              "We aren't just doctors; we are parents who believe every child deserves a fearless dental experience. Our mission is to combine Harvard-level expertise with a neighborhood-family feel."
            </blockquote>
            
            <p className="text-gray-600 leading-relaxed">
              At Blooming Smiles, you get the best of both worlds: Specialized Pediatric Dentistry and Expert Orthodontics under one roof. Our board-certified team is dedicated to making every visit educational, comfortable, and positive.
            </p>

            <div className="pt-4">
              <a href="#contact" className="text-secondary font-bold hover:text-pink-700 underline underline-offset-4 decoration-2">
                Schedule an appointment with our specialists &rarr;
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TeamSection;