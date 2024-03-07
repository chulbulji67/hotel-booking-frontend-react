import React from 'react'

export default function BookingCard() {
    return (
        <div>
            <p>Booking ID: {booking.id}</p>
            <p>Check-in Date: {booking.checkInDate}</p>
            <p>Check-out Date: {booking.checkOutDate}</p>
            <p>Booking Status: {booking.bookingStatus}</p>
            <p>Total Cost: {booking.totalCost}</p>
            <p>Room Number: {booking.roomNumber}</p>
            <p>Hotel Name: {booking.hotelName}</p>
            <Link to={`/user/${userId}/bookings/${booking.id}`} >Update Booking</Link>
        </div>
    )
}
