import React from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from '@headlessui/react';
import { MapPinIcon, CalendarIcon, StarIcon } from '@heroicons/react/24/outline';

export default function DestinationDetail() {
  const { id } = useParams();

  const destination = {
    name: 'Paris',
    country: 'France',
    description: 'Experience the magic of the City of Light...',
    images: [
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80', // Eiffel Tower
      'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80', // Louvre
      'https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?w=800&q=80', // Notre Dame
    ],
    rating: 4.8,
    attractions: [
      { name: 'Eiffel Tower', price: '$25', rating: 4.9 },
      { name: 'Louvre Museum', price: '$20', rating: 4.8 },
    ],
    hotels: [
      { name: 'Grand Hotel Paris', price: '$300', rating: 4.7 },
      { name: 'Luxury Palace', price: '$500', rating: 4.9 },
    ],
    restaurants: [
      { name: 'Le Petit Bistro', cuisine: 'French', price: '$$$', rating: 4.6 },
      { name: 'Café de Paris', cuisine: 'French', price: '$$', rating: 4.5 },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">{destination.name}</h1>
        <div className="flex items-center gap-4 mt-2 text-gray-600 dark:text-gray-300">
          <span className="flex items-center">
            <MapPinIcon className="h-5 w-5 mr-1" />
            {destination.country}
          </span>
          <span className="flex items-center">
            <StarIcon className="h-5 w-5 mr-1" />
            {destination.rating}
          </span>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {destination.images.map((image, index) => (
          <div key={index} className="aspect-w-16 aspect-h-9">
            <img
              src={image}
              alt={`${destination.name} ${index + 1}`}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Tabs */}
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {['Overview', 'Attractions', 'Hotels', 'Restaurants'].map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                `w-full rounded-lg py-2.5 text-sm font-medium leading-5 transition-colors duration-200
                ${selected
                  ? 'bg-white dark:bg-gray-800 shadow text-blue-700 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-white/[0.12] hover:text-blue-600 dark:hover:text-blue-400'
                }`
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-4">
          <Tab.Panel className="rounded-xl bg-white dark:bg-gray-800 p-4 shadow-sm">
            <p className="text-gray-600 dark:text-gray-300">{destination.description}</p>
          </Tab.Panel>
          <Tab.Panel>
            <div className="space-y-4">
              {destination.attractions.map((attraction) => (
                <div key={attraction.name} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{attraction.name}</h3>
                    <span className="text-gray-600 dark:text-gray-300">{attraction.price}</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <StarIcon className="h-5 w-5 text-yellow-400" />
                    <span className="ml-1 text-gray-600 dark:text-gray-300">{attraction.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="space-y-4">
              {destination.hotels.map((hotel) => (
                <div key={hotel.name} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{hotel.name}</h3>
                    <span className="text-gray-600 dark:text-gray-300">{hotel.price}</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <StarIcon className="h-5 w-5 text-yellow-400" />
                    <span className="ml-1 text-gray-600 dark:text-gray-300">{hotel.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="space-y-4">
              {destination.restaurants.map((restaurant) => (
                <div key={restaurant.name} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{restaurant.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{restaurant.cuisine}</p>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">{restaurant.price}</span>
                  </div>
                  <div className="flex items-center mt-2">
                    <StarIcon className="h-5 w-5 text-yellow-400" />
                    <span className="ml-1 text-gray-600 dark:text-gray-300">{restaurant.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>

      {/* Add to Itinerary Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 p-4 shadow-lg md:relative md:mt-8 md:shadow-none">
        <button className="w-full bg-blue-600 dark:bg-blue-500 text-white py-3 rounded-lg flex items-center justify-center hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200">
          <CalendarIcon className="h-5 w-5 mr-2" />
          Add to Itinerary
        </button>
      </div>
    </div>
  );
}