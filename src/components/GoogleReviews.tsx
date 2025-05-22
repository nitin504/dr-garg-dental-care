import React from 'react';
import { Star } from 'lucide-react';
import Button from './Button';

interface Review {
  name: string;
  rating: number;
  date: string;
  text: string;
  initial: string;
  reviewCount?: number;
  photoCount?: number;
}

const GoogleReviews: React.FC = () => {
  const reviews: Review[] = [
    {
      name: "Mandeep kaur Deol",
      rating: 5,
      date: "a month ago",
      text: "I recently visited Dr. Greg for a routine cleaning and filling. Initially, I was nervous, but Dr. Greg and his staff quickly put me at ease. Dr. Grag is exceptionally kind, humble, and genuinely caring towards his patients. The treatment was efficient, and I appreciated Dr. Grag's attention to detail. The clinic's modern equipment and immaculately clean facilities also impressed me. I highly recommend Dr. Greg to anyone seeking top-notch dental care.",
      initial: "M"
    },
    {
      name: "Brar Shari",
      rating: 5,
      date: "2 months ago",
      text: "Dr. Garg's dental clinic is truly the best! They take the time to listen to concerns, explain procedures in detail, and provide top-notch care. All dentists here are very knowledgeable and provided a painless treatment in the shortest time possible. The office is clean, well-organized and staff is also very helpful. I highly recommend them for anyone looking for a skilled and compassionate dentist",
      initial: "B",
      reviewCount: 8,
      photoCount: 7
    },
    {
      name: "Rimpy Chahal",
      rating: 5,
      date: "2 months ago",
      text: "The doctor has done a great job with their availability, cleanliness, and great environment. They were super nice and knowledgeable, very cooperative which helped us get through the process. I would recommend this place to anyone looking to get helped for dental work.",
      initial: "R",
      reviewCount: 3
    },
    {
      name: "Ramanpreet Kaur",
      rating: 5,
      date: "a month ago",
      text: "I had an amazing experience at Dr Garg's Dental Care. The entire team is incredibly friendly and made me feel comfortable from the moment I walked in. I highly recommend Garg Dental Clinic to anyone looking for top-notch dental care with a personal touch.",
      initial: "R",
      reviewCount: 2
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={16}
        fill={index < rating ? "currentColor" : "none"}
        className="text-yellow-400"
      />
    ));
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Patient Reviews</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-6">
              <div className="mr-4">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                    <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Google Reviews</h3>
                <div className="flex items-center">
                  <div className="flex text-yellow-400 mr-2">
                    {renderStars(5)}
                  </div>
                  <span className="text-gray-600 text-sm">5.0/5 based on 120+ reviews</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-4 mb-6">
              {reviews.map((review, index) => (
                <div key={index} className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-start mb-2">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2 flex-shrink-0">
                      <span className="text-blue-500 font-medium">{review.initial}</span>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-start justify-between flex-wrap gap-2">
                        <div>
                          <p className="font-medium text-gray-800">{review.name}</p>
                          {(review.reviewCount || review.photoCount) && (
                            <p className="text-gray-500 text-xs">
                              {review.reviewCount && `${review.reviewCount} reviews`}
                              {review.reviewCount && review.photoCount && ' · '}
                              {review.photoCount && `${review.photoCount} photos`}
                            </p>
                          )}
                        </div>
                        <span className="text-gray-500 text-sm">{review.date}</span>
                      </div>
                      <div className="flex text-yellow-400 mt-1">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">
                    "{review.text}"
                  </p>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <a 
                href="https://www.google.co.in/maps/place/Dr+Garg's+Dental+Care+Implant+and+CBCT+Centre/@30.8914049,75.8450806,11z/data=!4m8!3m7!1s0x391a824c9e70fd0d:0x1c204a4e584dbecb!8m2!3d30.8913792!4d75.8451123!9m1!1b1!16s%2Fg%2F11cncs_b8f?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline">
                  Read More Google Reviews
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;