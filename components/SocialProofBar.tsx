import React from 'react';

const SocialProofBar: React.FC = () => {
  return (
    <div className="bg-gray-50 border-y border-gray-200 py-10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-xl sm:text-2xl font-heading font-bold text-gray-800 mb-6">
          Trusted by 5,000+ San Fernando Valley Families to Protect Their Children’s Smiles.
        </h2>
        
        {/* Logos / Trust indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
          {/* Simple SVG Placeholders for "Safe Choice" logic */}
          <div className="flex items-center gap-2">
            <svg className="h-8 w-8 text-gray-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            <span className="font-bold text-lg text-gray-700">Verified Specialists</span>
          </div>
           <div className="flex items-center gap-2">
            <svg className="h-8 w-8 text-gray-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            <span className="font-bold text-lg text-gray-700">Family Focused</span>
          </div>
           <div className="flex items-center gap-2">
            <svg className="h-8 w-8 text-gray-600" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
            <span className="font-bold text-lg text-gray-700">Most Insurance Accepted</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProofBar;