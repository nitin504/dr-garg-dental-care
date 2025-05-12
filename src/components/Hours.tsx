import React from 'react';
import { Clock } from 'lucide-react';

const Hours: React.FC = () => {
  const days = [
    { day: 'Monday', hours: '10:00 AM - 8:00 PM' },
    { day: 'Tuesday', hours: '10:00 AM - 8:00 PM' },
    { day: 'Wednesday', hours: '10:00 AM - 8:00 PM' },
    { day: 'Thursday', hours: '10:00 AM - 8:00 PM' },
    { day: 'Friday', hours: '10:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 8:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Operating Hours</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          </div>
          
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg shadow-md p-6 md:p-8">
            <div className="flex items-center justify-center mb-6">
              <Clock size={32} className="text-primary mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">We're Here For You</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {days.map((dayInfo, index) => (
                <div 
                  key={index} 
                  className={`p-4 rounded-lg flex justify-between items-center ${
                    dayInfo.day === 'Sunday' 
                      ? 'bg-gray-100 col-span-1 md:col-span-2'
                      : 'bg-white'
                  }`}
                >
                  <span className="font-medium text-gray-800">{dayInfo.day}</span>
                  <span 
                    className={`${
                      dayInfo.day === 'Sunday' ? 'text-red-500' : 'text-gray-700'
                    }`}
                  >
                    {dayInfo.hours}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-white p-4 rounded-lg shadow-sm">
              <p className="text-center text-gray-700">
                <span className="font-medium">Note:</span> Appointments are recommended, but walk-ins are welcome based on availability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hours;