import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPinIcon, StarIcon } from '@heroicons/react/24/outline';
import { useBooking } from '../contexts/BookingContext';

export default function Activities() {
  const navigate = useNavigate();
  const { dispatch } = useBooking();

  const handleBookNow = (activity: any) => {
    dispatch({
      type: 'SET_BOOKING',
      payload: {
        type: 'activity',
        item: activity,
        totalPrice: parseFloat(activity.price)
      }
    });
    navigate('/booking/form');
  };

  const activities = [
    {
      title: 'Guided City Tour',
      location: 'Paris, France',
      price: '49',
      rating: '4.8',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format&fit=crop',
      duration: '3 hours'
    },
    {
      title: 'Scuba Diving',
      location: 'Great Barrier Reef',
      price: '149',
      rating: '4.9',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop',
      duration: '5 hours'
    },
    {
      title: 'Desert Safari',
      location: 'Dubai, UAE',
      price: '89',
      rating: '4.7',
      image: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=800&auto=format&fit=crop',
      duration: '6 hours'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Discover Activities</h1>

      {/* Activities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <img
              src={activity.image}
              alt={activity.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {activity.title}
              </h3>
              <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                <MapPinIcon className="h-4 w-4 mr-1" />
                <span className="text-sm">{activity.location}</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                <StarIcon className="h-4 w-4 mr-1 text-yellow-400" />
                <span className="text-sm">{activity.rating}</span>
                <span className="mx-2">•</span>
                <span className="text-sm">{activity.duration}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-gray-900 dark:text-white">
                  <span className="text-2xl font-bold">${activity.price}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-300">/person</span>
                </div>
                <button 
                  onClick={() => handleBookNow(activity)}
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