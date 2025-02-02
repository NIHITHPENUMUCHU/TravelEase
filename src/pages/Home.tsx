import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PaperAirplaneIcon, 
  BuildingOfficeIcon, 
  GlobeAltIcon, 
  SparklesIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Flights',
    description: 'Find the best deals on flights worldwide',
    icon: PaperAirplaneIcon,
    href: '/flights',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop'
  },
  {
    name: 'Hotels',
    description: 'Book comfortable stays at amazing prices',
    icon: BuildingOfficeIcon,
    href: '/hotels',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop'
  },
  {
    name: 'Packages',
    description: 'Explore curated holiday packages',
    icon: GlobeAltIcon,
    href: '/packages',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&auto=format&fit=crop'
  },
  {
    name: 'Activities',
    description: 'Discover exciting local experiences',
    icon: SparklesIcon,
    href: '/activities',
    image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=800&auto=format&fit=crop'
  },
];

const deals = [
  {
    id: 1,
    title: 'Paris Summer Special',
    price: '999',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format&fit=crop',
    discount: '30% OFF'
  },
  {
    id: 2,
    title: 'Tokyo Adventure',
    price: '1299',
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&auto=format&fit=crop',
    discount: '25% OFF'
  },
  {
    id: 3,
    title: 'Bali Paradise',
    price: '899',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&auto=format&fit=crop',
    discount: '20% OFF'
  },
];

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&auto=format&fit=crop"
            alt="Travel"
            className="w-full h-[500px] object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 rounded-2xl" />
        </div>
        
        <div className="relative py-24 px-6 sm:px-12 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Your Journey Begins Here
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Discover amazing destinations and create unforgettable memories
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {features.map((feature) => (
              <Link
                key={feature.name}
                to={feature.href}
                className="flex items-center gap-2 bg-white/90 dark:bg-gray-800/90 px-6 py-3 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200"
              >
                <feature.icon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                <span className="text-gray-900 dark:text-white font-medium">{feature.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <Link
            key={feature.name}
            to={feature.href}
            className="group relative overflow-hidden rounded-xl"
          >
            <img
              src={feature.image}
              alt={feature.name}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-bold text-white mb-2">{feature.name}</h3>
              <p className="text-gray-200 text-sm">{feature.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Deals Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Hot Deals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="relative">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {deal.discount}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {deal.title}
                </h3>
                <div className="flex justify-between items-center">
                  <div className="text-gray-600 dark:text-gray-300">
                    Starting from
                    <span className="text-2xl font-bold text-gray-900 dark:text-white ml-2">
                      ${deal.price}
                    </span>
                  </div>
                  <button className="bg-indigo-600 dark:bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors duration-200">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}