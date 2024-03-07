import React from 'react';
import { useParams } from 'react-router-dom';
import { deleteBookingById } from '../../../services/Bookings'; // Adjust the import path as necessary

export default function DeleteBooking() {
  const { bookingId } = useParams(); // This assumes your route parameter is named `bookingId`

  const handleDelete = async () => {
    try {
        console.log("Booking id ",bookingId);
      await deleteBookingById(bookingId);
      alert('Booking deleted successfully');
      // Optionally, redirect the user or update the state to reflect the deletion
    } catch (error) {
      alert('Failed to delete booking');
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Delete Booking</h2>
      <button onClick={handleDelete}>Delete Booking</button>
    </div>
  );
}
