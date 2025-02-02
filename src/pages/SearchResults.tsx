import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function SearchResults() {
  const [searchParams] = useSearchParams();

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Search Results</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <p className="text-gray-600 dark:text-gray-300">
          Showing results for: {searchParams.get('q')}
        </p>
      </div>
    </div>
  );
}