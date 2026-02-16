import React from 'react';
import ReviewCard from './Reviews';

const WallOfLove: React.FC = () => {
  const reviews = [
    { headline: "Blown away by the amazing service!", text: "We took our 7 year old daughter to blooming smiles and wow! Very communicative with the child and very attentive to the children's needs!", platform: 'yelp', author: "Lloque" },
    { headline: "My daughter is looking forward to her next visit!", text: "It was my daughters first time visiting the dentist and the experience was definitely one to remember. The staff was so friendly and welcoming.", platform: 'google', author: "Denise D." },
    { headline: "Thank you for being kind and gentle.", text: "The safety protocol was in place and the visit was fast and efficient. Thank you for being kind and gentle, too!", platform: 'yelp', author: "Maggie H." },
    { headline: "Just took 3 of my kids... AMAZING", text: "I've always taken my kids to a pedodontist but this one is by far the best. Friendly staff and clean office always a plus.", platform: 'google', author: "Maria V." },
    { headline: "Made her smile shine", text: "My daughter had a good fortune of having Dr. Payam A. Sanjideh as her orthodontist... The caring environment and highly professional team made her smile shine.", platform: 'yelp', author: "Victoria V." },
    { headline: "Toddler smiled the whole time", text: "My toddler was at no time afraid and smiled the whole time. She enjoyed her first experience at the dentist and that's what I was hoping.", platform: 'google', author: "Ely P." },
    { headline: "Highly Recommended!", text: "If you want a dentist who truly cares about your child's comfort, this is the place. Dr. Golian is amazing.", platform: 'yelp', author: "Sarah J." },
    { headline: "Clean and Professional", text: "The office is spotless and the staff is incredibly professional. We felt safe and well-cared for.", platform: 'google', author: "Mike T." },
    { headline: "Kids actually ask to go back", text: "Never thought I'd say this, but my kids ask when their next appointment is. The TVs on the ceiling are a game changer!", platform: 'yelp', author: "Jessica R." },
  ] as const;

  return (
    <section id="reviews" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            300+ Real Parents Share Their Blooming Smiles Success Stories.
          </h2>
          <p className="text-gray-600">See why families in Northridge and Woodland Hills choose us.</p>
        </div>

        {/* Masonry Grid Layout using CSS Columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {reviews.map((review, idx) => (
             <ReviewCard key={idx} {...review} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#contact" className="text-primary font-bold hover:underline">Read more reviews on Yelp & Google &rarr;</a>
        </div>
      </div>
    </section>
  );
};

export default WallOfLove;