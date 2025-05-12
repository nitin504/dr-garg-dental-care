import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Our Clinic</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-lg"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/20 rounded-lg"></div>
                <img 
                  src="https://images.pexels.com/photos/3845756/pexels-photo-3845756.jpeg" 
                  alt="Modern dental clinic" 
                  className="w-full h-auto object-cover rounded-lg shadow-lg relative z-10"
                />
              </div>
            </div>
            
            <div className="md:w-1/2 mt-8 md:mt-0">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Excellence in Dental Care</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Dr Garg's Dental Care Implant and CBCT Centre is a professional, women-owned, LGBTQ+ friendly dental clinic in Ludhiana offering advanced treatments by MDS specialists.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our clinic combines the latest dental technology with personalized care to ensure the best possible outcomes for our patients. We're committed to providing a comfortable and welcoming environment for everyone.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-primary text-3xl font-bold">16+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-primary text-3xl font-bold">2</div>
                  <div className="text-gray-600">MDS Specialists</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-primary text-3xl font-bold">9+</div>
                  <div className="text-gray-600">Dental Services</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-primary text-3xl font-bold">100%</div>
                  <div className="text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;