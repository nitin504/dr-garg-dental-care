import React from 'react';
import { Armchair as Wheelchair } from 'lucide-react';

const Facilities: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Facilities</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex flex-col md:flex-row items-start justify-between">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Clinic Amenities</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Modern, comfortable waiting area</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">State-of-the-art treatment rooms</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Advanced digital radiography</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">CBCT scanning technology</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Strict sterilization protocols</span>
                  </li>
                </ul>
              </div>
              
              <div className="md:w-1/2 md:pl-8 md:border-l border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Accessibility</h3>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <Wheelchair className="text-accent mr-2" size={20} />
                    <span className="text-accent font-medium">Wheelchair Accessible</span>
                  </div>
                  <ul className="space-y-2 pl-8">
                    <li className="text-gray-700 flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      Accessible entrance
                    </li>
                    <li className="text-gray-700 flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      Wheelchair-friendly exit
                    </li>
                    <li className="text-gray-700 flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      Accessible washroom
                    </li>
                    <li className="text-gray-700 flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      Wide doorways and corridors
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;