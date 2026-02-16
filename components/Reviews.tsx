import React from 'react';

interface ReviewCardProps {
  headline: string;
  text: string;
  platform: 'yelp' | 'google';
  author: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ headline, text, platform, author }) => (
  <div className="break-inside-avoid mb-6 bg-white p-6 rounded-xl shadow-soft border border-gray-100 hover:shadow-lg transition-shadow">
    <div className="flex justify-between items-start mb-4">
      <div className="flex text-yellow-400 text-sm">
        {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
      </div>
      {platform === 'yelp' ? (
        <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded">Yelp</span>
      ) : (
        <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">Google</span>
      )}
    </div>
    <h4 className="font-bold text-gray-900 mb-2">{headline}</h4>
    <p className="text-gray-600 text-sm mb-4">"{text}"</p>
    <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
      - {author}
    </div>
  </div>
);

export default ReviewCard;