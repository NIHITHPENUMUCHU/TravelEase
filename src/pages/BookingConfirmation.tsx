import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { useBooking } from '../contexts/BookingContext';

export default function BookingConfirmation() {
  const { state } = useBooking();

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
        <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Booking Confirmed!
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Thank you for your booking. Your confirmation number is #{Math.random().toString(36).substr(2, 9).toUpperCase()}
        </p>

        <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg text-left">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Booking Details</h2>
          <div className="space-y-2 text-gray-600 dark:text-gray-300">
            <p>Type: {state.type}</p>
            <p>Item: {state.item?.name || state.item?.title}</p>
            <p>Dates: {state.dates.checkIn} - {state.dates.checkOut}</p>
            <p>Guests: {state.guests}</p>
            <p className="text-lg font-semibold mt-4">Total Paid: ${state.totalPrice}</p>
          </div>
        </div>

        <div className="space-x-4">
          <Link
            to="/itinerary"
            className="inline-block bg-indigo-600 dark:bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors duration-200"
          >
            View My Itinerary
          </Link>
          <Link
            to="/"
            className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}