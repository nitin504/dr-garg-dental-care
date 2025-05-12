import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BookingForm from './components/BookingForm';
import About from './components/About';
import Dentists from './components/Dentists';
import Services from './components/Services';
import Facilities from './components/Facilities';
import Hours from './components/Hours';
import GoogleReviews from './components/GoogleReviews';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative">
      <Header />
      <Hero />
      <BookingForm />
      <About />
      <Dentists />
      <Services />
      <Facilities />
      <Hours />
      <GoogleReviews />
      <Location />
      <Footer />
    </div>
  );
}

export default App;