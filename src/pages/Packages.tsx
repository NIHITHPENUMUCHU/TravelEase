import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CalendarIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { useBooking } from '../contexts/BookingContext';

export default function Packages() {
  const navigate = useNavigate();
  const { dispatch } = useBooking();

  const handleBookNow = (pkg: any) => {
    dispatch({
      type: 'SET_BOOKING',
      payload: {
        type: 'package',
        item: pkg,
        totalPrice: parseFloat(pkg.price)
      }
    });
    navigate('/booking/form');
  };

  const packages = [
    {
      title: 'Paris & Switzerland',
      duration: '7 Days',
      price: '1499',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format&fit=crop',
      description: 'Explore the best of Europe with this amazing package',
      includes: ['Flights', 'Hotels', 'Transfers', 'Sightseeing']
    },
    {
      title: 'Thailand Beach Holiday',
      duration: '5 Days',
      price: '999',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop',
      description: 'Relax on beautiful beaches and explore tropical islands',
      includes: ['Hotels', 'Transfers', 'Activities', 'Some meals']
    },
    {
      title: 'Japan Discovery',
      duration: '8 Days',
      price: '1899',
      image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&auto=format&fit=crop',
      description: 'Experience the unique culture and beauty of Japan',
      includes: ['Flights', 'Hotels', 'Rail Pass', 'Guided Tours']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Holiday Packages</h1>
      
      {/* Featured Packages */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <div className="relative">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-3 py-1 rounded-full text-sm font-medium">
                {pkg.duration}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {pkg.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {pkg.description}
              </p>
              <div className="space-y-2 mb-4">
                {pkg.includes.map((item, i) => (
                  <div key={i} className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                    <GlobeAltIcon className="h-4 w-4 mr-2 text-indigo-600 dark:text-indigo-400" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div className="text-gray-900 dark:text-white">
                  <span className="text-sm">from </span>
                  <span className="text-2xl font-bold">${pkg.price}</span>
                </div>
                <button 
                  onClick={() => handleBookNow(pkg)}
                  className="bg-indigo-600 dark:bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors duration-200"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}