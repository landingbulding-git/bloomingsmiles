import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      {/* Top Bar for Phone Numbers - Always visible or highly prominent */}
      <div className="bg-primary text-white text-xs sm:text-sm py-2 px-4 text-center font-semibold tracking-wide">
        <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6">
          <a href="tel:8187271800" className="hover:text-gray-200 transition-colors flex items-center gap-1">
             <span>📍 Northridge: (818) 727-1800</span>
          </a>
          <span className="hidden sm:inline">|</span>
          <a href="tel:8189329100" className="hover:text-gray-200 transition-colors flex items-center gap-1">
             <span>📍 Woodland Hills: (818) 932-9100</span>
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/">
              <img 
                className="h-12 w-auto md:h-16" 
                src="https://cdn.prod.website-files.com/5f96cbbba8d7422fd1652c69/5f98414ffd716e3a54cc973d_bloomingsmiles-logo.png" 
                alt="Blooming Smiles Logo" 
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#pediatric" className="text-gray-600 hover:text-primary font-medium transition-colors">Pediatric Dentistry</a>
            <a href="#ortho" className="text-gray-600 hover:text-primary font-medium transition-colors">Orthodontics</a>
            <a href="#reviews" className="text-gray-600 hover:text-primary font-medium transition-colors">Reviews</a>
            <a href="#booking-form" className="bg-secondary hover:bg-pink-700 text-white px-6 py-3 rounded-full font-bold shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
              Request Your Visit
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#pediatric" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Pediatric Dentistry</a>
            <a href="#ortho" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Orthodontics</a>
            <a href="#reviews" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Reviews</a>
            <a href="#booking-form" className="block w-full text-center mt-4 bg-secondary text-white px-6 py-3 rounded-md font-bold text-lg">
              Request Your Visit
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;