import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-white"
    >
      <div 
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3845127/pexels-photo-3845127.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      
      <div className="container mx-auto px-4 z-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white leading-tight">
          Dr Garg's Dental Care<br />
          <span className="text-2xl md:text-3xl lg:text-4xl font-normal block mt-2">
            Implant and CBCT Centre
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 font-light max-w-3xl mx-auto">
          All treatment done by MDS specialists
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 mb-12">
          <Button 
            size="large"
            onClick={scrollToBooking}
          >
            Book Appointment Now
          </Button>
          
          <div className="flex items-center space-x-2 text-lg">
            <span className="font-medium">Call us:</span>
            <a href="tel:09915835290" className="hover:text-primary transition-colors">
              099158 35290
            </a>
            <span>/</span>
            <a href="tel:09876313939" className="hover:text-primary transition-colors">
              98763 13939
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <svg 
            className="w-6 h-6 text-white" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;