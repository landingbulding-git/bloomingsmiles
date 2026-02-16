import React, { useState } from 'react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-6 text-left focus:outline-none"
      >
        <h4 className="text-lg font-bold text-gray-900 pr-8">{question}</h4>
        <span className={`transform transition-transform duration-200 text-primary ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold text-gray-900">Common Questions</h2>
        </div>
        
        <div className="bg-gray-50 rounded-2xl p-6 sm:p-10 shadow-sm border border-gray-100">
          <FAQItem 
            question="Is it expensive?" 
            answer="We believe in transparency. We accept most PPO insurances and offer flexible, 0% interest payment plans so cost never stands in the way of a healthy smile." 
          />
          <FAQItem 
            question="What if my child is scared?" 
            answer="Our offices are built for kids. From TVs on the ceiling to our gentle specialists, we turn dental anxiety into a fun, rewarding experience." 
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;