import React, { useEffect, useState } from 'react';
import { getAllBookingsByUser } from '../../services/Bookings'; // Assuming the service method is named getUserBookings
import { Link, useParams } from 'react-router-dom';

export default function UserBooking() {
    const [bookings, setBookings] = useState([]);
    const {id} = useParams();
    const userId = localStorage.getItem("userId");
    useEffect(() => {
        const fetchUserBookings = async () => {
            try {
                const userBookings = await getAllBookingsByUser(userId); // Assuming the userId is passed as a prop
                setBookings(userBookings);
            } catch (error) {
                console.error('Error fetching user bookings:', error);
            }
        };

        fetchUserBookings();
    }, [userId]); // Fetch bookings whenever userId changes

    return (
        <div>
            <h2>User Bookings</h2>
            {console.log(id)}
            <ul>
                {bookings.map(booking => (
                    <li key={booking.id}>
                        <p>Booking ID: {booking.id}</p>
                        <p>Check-in Date: {booking.checkInDate}</p>
                        <p>Check-out Date: {booking.checkOutDate}</p>
                        <p>Booking Status: {booking.bookingStatus}</p>
                        <p>Total Cost: {booking.totalCost}</p>
                        <p>Room Number: {booking.roomNumber}</p>
                        <p>Hotel Name: {booking.hotelName}</p>
                        <Link to={`/user/${userId}/hotel/${id}/bookings/${booking.id}`} >Update Booking</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
