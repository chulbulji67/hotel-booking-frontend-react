import React, { useState, useEffect } from 'react';
import { getAllBookings } from '../../../services/Bookings';

export default function AllBookingsComponent() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetchAllBookings();
    }, []);

    const fetchAllBookings = async () => {
        try {
            const allBookings = await getAllBookings();
            setBookings(allBookings);
        } catch (error) {
            console.error('Error fetching bookings:', error);
        }
    };

    return (
        <div>
            <h2>All Bookings</h2>
            <ul>
                {bookings.map(booking => (
                    <li key={booking.id}>
                        {`ID: ${booking.id}, Check-in: ${booking.checkInDate}, Check-out: ${booking.checkOutDate}, Cost: ${booking.totalCost}, Status: ${booking.bookingStatus}`}
                    </li>
                ))}
            </ul>
        </div>
    );
}
