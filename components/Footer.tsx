import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-4">
             <img 
                src="https://cdn.prod.website-files.com/5f96cbbba8d7422fd1652c69/5f98414ffd716e3a54cc973d_bloomingsmiles-logo.png" 
                alt="Blooming Smiles" 
                className="h-10 w-auto brightness-0 invert opacity-80"
             />
             <p className="text-sm text-slate-400">
               Pediatric Dentistry & Orthodontics in Northridge and Woodland Hills.
             </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">About Us</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Our Practice</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Locations</h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold text-white">Northridge</p>
                <p>19240 Nordhoff St., Suite C2</p>
                <a href="tel:8187271800" className="text-secondary hover:underline">(818) 727-1800</a>
              </div>
              <div>
                 <p className="font-semibold text-white">Woodland Hills</p>
                 <p>20968 Ventura Blvd.</p>
                 <a href="tel:8189329100" className="text-secondary hover:underline">(818) 932-9100</a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Follow Us</h4>
             <div className="flex space-x-4">
               <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
               <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
               <a href="#" className="text-gray-400 hover:text-white transition-colors">Yelp</a>
             </div>
          </div>

        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Blooming Smiles. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;