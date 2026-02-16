import React from 'react';
import BookingForm from './BookingForm';

const CloserSection: React.FC = () => {
  return (
    <section className="bg-primary py-16 lg:py-24 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
         <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -mr-32 -mt-32"></div>
         <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full -ml-48 -mb-48"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Value Stack (Left) */}
          <div className="text-white space-y-8 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold leading-tight">
              Give Your Child the Gift of a Perfect, Healthy Smile Today.
            </h2>
            
            <div className="space-y-4 text-lg">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="bg-secondary p-1 rounded-full">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="font-medium">Board-Certified Pediatric & Ortho Specialists.</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="bg-secondary p-1 rounded-full">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="font-medium">Free Orthodontic Consultations.</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="bg-secondary p-1 rounded-full">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="font-medium">Two Convenient Locations in the SFV.</span>
              </div>
            </div>
          </div>

          {/* Lead Form (Right) */}
          <div className="w-full max-w-md mx-auto">
             <BookingForm id="closer-form" isCompact />
          </div>

        </div>
      </div>
    </section>
  );
};

export default CloserSection;