import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CalendarIcon, MagnifyingGlassIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { useBooking } from '../contexts/BookingContext';

export default function Hotels() {
  const navigate = useNavigate();
  const { dispatch } = useBooking();

  const handleBookNow = (hotel: any) => {
    dispatch({
      type: 'SET_BOOKING',
      payload: {
        type: 'hotel',
        item: hotel,
        totalPrice: parseFloat(hotel.price)
      }
    });
    navigate('/booking/form');
  };

  const hotels = [
    {
      name: 'Luxury Resort & Spa',
      location: 'Maldives',
      price: '299',
      rating: '4.9',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop'
    },
    {
      name: 'City View Hotel',
      location: 'New York',
      price: '199',
      rating: '4.7',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop'
    },
    {
      name: 'Mountain Lodge',
      location: 'Switzerland',
      price: '249',
      rating: '4.8',
      image: 'https://images.unsplash.com/photo-1506059612708-99d6c258160e?w=800&auto=format&fit=crop'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Search Form */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Find Perfect Hotels</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Destination
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Where are you going?"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
              />
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Check-in
            </label>
            <div className="relative">
              <input
                type="date"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
              />
              <CalendarIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Check-out
            </label>
            <div className="relative">
              <input
                type="date"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
              />
              <CalendarIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Guests
            </label>
            <div className="relative">
              <select className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400">
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4+ Guests</option>
              </select>
              <UserGroupIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>
        </div>

        <button className="mt-6 w-full bg-indigo-600 dark:bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors duration-200 font-medium">
          Search Hotels
        </button>
      </div>

      {/* Featured Hotels */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Featured Hotels</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {hotel.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{hotel.location}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-yellow-400">★</span>
                    <span className="text-gray-600 dark:text-gray-300 ml-1">{hotel.rating}</span>
                  </div>
                  <div className="text-gray-900 dark:text-white">
                    <span className="text-sm">from </span>
                    <span className="text-lg font-bold">${hotel.price}</span>
                    <span className="text-sm">/night</span>
                  </div>
                </div>
                <button
                  onClick={() => handleBookNow(hotel)}
                  className="mt-4 w-full bg-indigo-600 dark:bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors duration-200"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}