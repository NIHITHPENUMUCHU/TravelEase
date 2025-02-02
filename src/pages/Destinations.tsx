import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

const destinations = [
  {
    id: 'paris',
    name: 'Paris',
    country: 'France',
    description: 'The City of Light featuring iconic landmarks and rich culture',
    image: 'https://source.unsplash.com/800x600/?paris',
    rating: 4.8,
    priceRange: '$$$'
  },
  {
    id: 'tokyo',
    name: 'Tokyo',
    country: 'Japan',
    description: 'A vibrant metropolis blending ultramodern and traditional',
    image: 'https://source.unsplash.com/800x600/?tokyo',
    rating: 4.9,
    priceRange: '$$$'
  },
  {
    id: 'new-york',
    name: 'New York',
    country: 'United States',
    description: 'The city that never sleeps, filled with endless possibilities',
    image: 'https://source.unsplash.com/800x600/?new-york',
    rating: 4.7,
    priceRange: '$$$'
  }
];

export default function Destinations() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDestinations = destinations.filter(dest =>
    dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dest.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search destinations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 shadow-sm"
          />
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 text-gray-900 dark:text-white">
          <AdjustmentsHorizontalIcon className="h-5 w-5" />
          <span>Filters</span>
        </button>
      </div>

      {/* Destinations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDestinations.map((destination) => (
          <Link
            key={destination.id}
            to={`/destination/${destination.id}`}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4 sm:p-5">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">{destination.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{destination.country}</p>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1 text-gray-900 dark:text-white">{destination.rating}</span>
                </div>
              </div>
              <p className="mt-2 text-gray-600 dark:text-gray-300 line-clamp-2">{destination.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-500 dark:text-gray-400">{destination.priceRange}</span>
                <span className="text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-500 dark:group-hover:text-indigo-300">View Details →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* No Results Message */}
      {filteredDestinations.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg">No destinations found matching your search.</p>
        </div>
      )}
    </div>
  );
}