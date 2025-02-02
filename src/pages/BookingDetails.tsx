import React from 'react';
import { useParams } from 'react-router-dom';

export default function BookingDetails() {
  const { id } = useParams();

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Booking Details</h1>
      <p className="text-gray-600 dark:text-gray-300">Booking ID: {id}</p>
    </div>
  );
}