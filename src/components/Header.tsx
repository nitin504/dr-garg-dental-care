import React, { useState, useEffect } from 'react';
import { Phone, Clock, Menu, X } from 'lucide-react';
import Button from './Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 
              className={`font-bold text-xl md:text-2xl transition-colors duration-300 ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}
            >
              Dr Garg's Dental Care
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              onClick={() => scrollToSection('about')} 
              className={`cursor-pointer font-medium hover:text-primary transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              About
            </a>
            <a 
              onClick={() => scrollToSection('dentists')} 
              className={`cursor-pointer font-medium hover:text-primary transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              Dentists
            </a>
            <a 
              onClick={() => scrollToSection('services')} 
              className={`cursor-pointer font-medium hover:text-primary transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              Services
            </a>
            <a 
              onClick={() => scrollToSection('location')} 
              className={`cursor-pointer font-medium hover:text-primary transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              Location
            </a>
            <div className="flex items-center space-x-2">
              <Phone size={16} className={isScrolled ? 'text-primary' : 'text-white'} />
              <span className={`${isScrolled ? 'text-gray-800' : 'text-white'} font-medium`}>
                099158 35290
              </span>
            </div>
            <Button onClick={() => scrollToSection('booking')}>
              Book Appointment
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a 
                onClick={() => scrollToSection('about')} 
                className="text-gray-800 font-medium cursor-pointer hover:text-primary transition-colors"
              >
                About
              </a>
              <a 
                onClick={() => scrollToSection('dentists')} 
                className="text-gray-800 font-medium cursor-pointer hover:text-primary transition-colors"
              >
                Dentists
              </a>
              <a 
                onClick={() => scrollToSection('services')} 
                className="text-gray-800 font-medium cursor-pointer hover:text-primary transition-colors"
              >
                Services
              </a>
              <a 
                onClick={() => scrollToSection('location')} 
                className="text-gray-800 font-medium cursor-pointer hover:text-primary transition-colors"
              >
                Location
              </a>
              <div className="flex items-center space-x-2 py-2">
                <Phone size={16} className="text-primary" />
                <span className="text-gray-800">099158 35290 / 98763 13939</span>
              </div>
              <div>
                <Button onClick={() => scrollToSection('booking')} fullWidth>
                  Book Appointment
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;