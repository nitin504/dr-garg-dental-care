import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Location & Directions</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-start mb-6">
                <MapPin size={24} className="text-secondary flex-shrink-0 mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Our Clinic</h3>
                  <p className="text-gray-700 mb-4">
                    Opposite Children Traffic Training Park, near Sethi Study Circle, Pritm Nagar, Model Town, Ludhiana, Punjab 141002
                  </p>
                  <div className="bg-gray-100 p-3 rounded-lg inline-block">
                    <span className="font-medium text-gray-800">Short code:</span> VRRW+H2 Ludhiana, Punjab
                  </div>
                </div>
              </div>
              
              <div className="bg-primary/10 rounded-lg p-5 mb-6">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Navigation size={18} className="text-primary mr-2" />
                  Landmarks
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-2"></span>
                    <span className="text-gray-700">Opposite Children Traffic Training Park</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-2"></span>
                    <span className="text-gray-700">Near Sethi Study Circle</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-2"></span>
                    <span className="text-gray-700">Pritm Nagar area</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-2"></span>
                    <span className="text-gray-700">Model Town neighborhood</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-secondary/10 rounded-lg p-5">
                <h4 className="font-semibold text-gray-900 mb-3">Parking Information</h4>
                <p className="text-gray-700">
                  Convenient parking available nearby for patients. Street parking is also available in front of the clinic.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d219125.14617836202!2d75.8450806!3d30.8914049!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a824c9e70fd0d%3A0x1c204a4e584dbecb!2sDr%20Garg's%20Dental%20Care%20Implant%20and%20CBCT%20Centre!5e0!3m2!1sen!2sin!4v1747057058993!5m2!1sen!2sin" 
                  width="600" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  title="Detailed map of Dr Garg's Dental Care location"
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-lg z-0"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/20 rounded-lg z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;