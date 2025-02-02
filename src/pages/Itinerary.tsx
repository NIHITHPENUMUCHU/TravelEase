import React, { useState } from 'react';
import { CalendarIcon, MapPinIcon, TrashIcon } from '@heroicons/react/24/outline';

export default function Itinerary() {
  const [trips] = useState([
    {
      id: 1,
      destination: 'Paris',
      startDate: '2024-06-15',
      endDate: '2024-06-22',
      activities: [
        {
          id: 1,
          name: 'Eiffel Tower Visit',
          date: '2024-06-15',
          time: '10:00 AM',
          location: 'Champ de Mars'
        }
      ]
    }
  ]);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Itineraries</h1>
        <button className="bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200">
          Plan New Trip
        </button>
      </div>

      {trips.map((trip) => (
        <div key={trip.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm mb-6">
          {/* Trip Header */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">{trip.destination}</h2>
                <div className="flex items-center text-gray-600 dark:text-gray-300 mt-2">
                  <CalendarIcon className="h-5 w-5 mr-2" />
                  <span>{trip.startDate} - {trip.endDate}</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200">
                  Edit
                </button>
                <button className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 transition-colors duration-200">
                  <TrashIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Activities */}
          <div className="p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Activities</h3>
            <div className="space-y-4">
              {trip.activities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">{activity.name}</h4>
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mt-1">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      <span className="text-sm">{activity.date} at {activity.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mt-1">
                      <MapPinIcon className="h-4 w-4 mr-1" />
                      <span className="text-sm">{activity.location}</span>
                    </div>
                  </div>
                  <button className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 transition-colors duration-200">
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>

            <button className="mt-4 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200">
              + Add Activity
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}