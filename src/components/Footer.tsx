import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Heart, Lock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Dr Garg's Dental Care</h3>
            <p className="text-gray-400 mb-4">
              Professional dental care by MDS specialists in a warm, welcoming environment.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} className="text-primary" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-primary" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">099158 35290</p>
                  <p className="text-gray-300">98763 13939</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="text-primary mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-300">info@drgargsdental.com</p>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-primary mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-300">Opposite Children Traffic Training Park, Pritm Nagar, Model Town, Ludhiana, Punjab 141002</p>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Clinic Hours</h3>
            <ul className="space-y-1">
              <li className="flex justify-between">
                <span className="text-gray-400">Monday - Saturday</span>
                <span className="text-gray-300">10AM – 8PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Sunday</span>
                <span className="text-gray-300">Closed</span>
              </li>
            </ul>
            <div className="flex items-center mt-4 text-gray-400">
              <Clock size={18} className="mr-2 text-primary" />
              <span>By appointment preferred</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary transition-colors">Dental Consultation</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary transition-colors">Laser Dentistry</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary transition-colors">Metal Braces Fixing</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary transition-colors">Tooth Reshaping</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-primary transition-colors">Invisible & Clear Braces</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              © 2025 Dr Garg's Dental Care. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-gray-400">
                <Heart size={16} className="text-secondary mr-1" />
                <span>LGBTQ+ Friendly</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Lock size={16} className="text-primary mr-1" />
                <span>Secure HTTPS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;