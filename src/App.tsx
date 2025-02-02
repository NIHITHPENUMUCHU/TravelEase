import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Flights from './pages/Flights';
import Hotels from './pages/Hotels';
import Packages from './pages/Packages';
import Activities from './pages/Activities';
import BookingForm from './pages/BookingForm';
import Payment from './pages/Payment';
import BookingConfirmation from './pages/BookingConfirmation';
import BookingDetails from './pages/BookingDetails';
import Profile from './pages/Profile';
import SearchResults from './pages/SearchResults';
import { BookingProvider } from './contexts/BookingContext';

export default function App() {
  return (
    <BookingProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
          <Navbar />
          <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/flights" element={<Flights />} />
              <Route path="/hotels" element={<Hotels />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/booking/form" element={<BookingForm />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/booking-confirmation" element={<BookingConfirmation />} />
              <Route path="/booking/:id" element={<BookingDetails />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/search" element={<SearchResults />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </BookingProvider>
  );
}