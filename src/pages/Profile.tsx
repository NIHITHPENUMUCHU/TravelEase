import React, { useState } from 'react';
import { UserCircleIcon, PencilIcon } from '@heroicons/react/24/outline';

export default function Profile() {
  const [user] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    avatar: null,
    trips: [
      {
        id: 1,
        destination: 'Paris',
        date: '2024-06-15',
        status: 'Upcoming'
      }
    ],
    reviews: [
      {
        id: 1,
        destination: 'Rome',
        rating: 5,
        comment: 'Amazing experience!'
      }
    ]
  });

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Profile Header */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <div className="flex items-center space-x-4">
          {user.avatar ? (
            <img
              src={user.avatar}
              alt={user.name}
              className="h-24 w-24 rounded-full"
            />
          ) : (
            <UserCircleIcon className="h-24 w-24 text-gray-400 dark:text-gray-500" />
          )}
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{user.name}</h1>
            <p className="text-gray-600 dark:text-gray-300">{user.email}</p>
          </div>
          <button className="ml-auto flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
            <PencilIcon className="h-5 w-5 mr-1" />
            Edit Profile
          </button>
        </div>
      </div>

      {/* Trips */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">My Trips</h2>
        <div className="space-y-4">
          {user.trips.map((trip) => (
            <div
              key={trip.id}
              className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4"
            >
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{trip.destination}</h3>
                <p className="text-gray-600 dark:text-gray-300">{trip.date}</p>
              </div>
              <span className="px-3 py-1 rounded-full text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                {trip.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">My Reviews</h2>
        <div className="space-y-4">
          {user.reviews.map((review) => (
            <div
              key={review.id}
              className="border-b border-gray-200 dark:border-gray-700 pb-4"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900 dark:text-white">{review.destination}</h3>
                <div className="flex items-center">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}