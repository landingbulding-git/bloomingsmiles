import React from 'react';

interface BookingFormProps {
  id?: string;
  isCompact?: boolean;
}

const BookingForm: React.FC<BookingFormProps> = ({ id = "booking-form", isCompact = false }) => {
  return (
    <div id={id} className={`bg-white rounded-xl shadow-2xl overflow-hidden border-2 border-primary/10 ${isCompact ? 'p-6' : 'p-6 sm:p-8'}`}>
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">Request Your Visit</h3>
        <p className="text-gray-600 text-sm">Response in under 24 hours. Privacy Guaranteed.</p>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor={`name-${id}`} className="sr-only">Full Name</label>
          <input
            type="text"
            id={`name-${id}`}
            name="name"
            placeholder="Parent's Name"
            className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-base"
            required
          />
        </div>

        <div>
          <label htmlFor={`phone-${id}`} className="sr-only">Phone Number</label>
          <input
            type="tel"
            id={`phone-${id}`}
            name="phone"
            placeholder="Phone Number"
            className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-base"
            required
          />
        </div>

        <div>
          <label htmlFor={`service-${id}`} className="sr-only">Service Needed</label>
          <select
            id={`service-${id}`}
            name="service"
            className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-base text-gray-700 bg-white"
            defaultValue=""
          >
            <option value="" disabled>Select Service Needed</option>
            <option value="pediatric">Pediatric Dentistry</option>
            <option value="ortho">Orthodontics (Braces/Invisalign)</option>
            <option value="consult">Free Orthodontic Consultation</option>
          </select>
        </div>

        <div>
          <label htmlFor={`location-${id}`} className="sr-only">Preferred Location</label>
          <select
            id={`location-${id}`}
            name="location"
            className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-base text-gray-700 bg-white"
            defaultValue=""
          >
            <option value="" disabled>Preferred Location</option>
            <option value="northridge">Northridge</option>
            <option value="woodland_hills">Woodland Hills</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-secondary hover:bg-pink-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg transform transition-all duration-200 hover:-translate-y-1 text-lg uppercase tracking-wide"
        >
          Request Your Free Consultation
        </button>

        <div className="mt-4 pt-4 border-t border-gray-100 text-xs text-gray-500 text-center space-y-1">
          <p className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            No-cost orthodontic consults.
          </p>
          <p className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            Most insurances accepted.
          </p>
          <p className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            100% Kid-Friendly Guarantee.
          </p>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;