import React, { createContext, useContext, useReducer } from 'react';

interface BookingState {
  type: 'hotel' | 'package' | 'activity' | null;
  item: any;
  dates: {
    checkIn: string | null;
    checkOut: string | null;
  };
  guests: number;
  totalPrice: number;
}

type BookingAction =
  | { type: 'SET_BOOKING'; payload: Partial<BookingState> }
  | { type: 'CLEAR_BOOKING' };

const initialState: BookingState = {
  type: null,
  item: null,
  dates: {
    checkIn: null,
    checkOut: null,
  },
  guests: 1,
  totalPrice: 0,
};

const BookingContext = createContext<{
  state: BookingState;
  dispatch: React.Dispatch<BookingAction>;
}>({ state: initialState, dispatch: () => null });

function bookingReducer(state: BookingState, action: BookingAction): BookingState {
  switch (action.type) {
    case 'SET_BOOKING':
      return { ...state, ...action.payload };
    case 'CLEAR_BOOKING':
      return initialState;
    default:
      return state;
  }
}

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(bookingReducer, initialState);

  return (
    <BookingContext.Provider value={{ state, dispatch }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}