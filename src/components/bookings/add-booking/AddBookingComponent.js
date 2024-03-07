import React, { useId, useState } from 'react';
import { addBooking } from '../../../services/Bookings';
import { useParams } from 'react-router-dom';

export default function AddBookingComponent() {
    const { id, roomId } = useParams();
    const userId = localStorage.getItem("userId");

    console.log("userId", userId);
    const [bookingData, setBookingData] = useState({
        checkInDate: '',
        checkOutDate: '',
        totalCost: '',
        bookingStatus: '',
        user: { id: userId }, // Set user ID from localStorage
        room: { id: roomId },
        hotel: { id: id }
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBookingData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAddBooking = async (e) => {
        e.preventDefault();
        try {
            const data = await addBooking(bookingData);
            console.log(id, roomId, userId);
            console.log(data);
            setBookingData({
                checkInDate: '',
                checkOutDate: '',
                totalCost: '',
                bookingStatus: '',
                user: { id: '' },
                room: { id: '' },
                hotel: { id: '' }
            });
            console.log('Booking added successfully');
        } catch (error) {
            console.error('Error adding booking:', error);
        }
    };

    return (
        <div>
            <h2>Add Booking</h2>
            <form onSubmit={handleAddBooking}>
                <input type="datetime-local" name="checkInDate" value={bookingData.checkInDate} onChange={handleInputChange} />
                <input type="datetime-local" name="checkOutDate" value={bookingData.checkOutDate} onChange={handleInputChange} />
                <input type="number" name="totalCost" value={bookingData.totalCost} onChange={handleInputChange} />
                <select name="bookingStatus" value={bookingData.bookingStatus} onChange={handleInputChange}>
                    <option value="CONFIRMED">Confirmed</option>
                    <option value="CANCELLED">Cancelled</option>
                    <option value="COMPLETED">Completed</option>
                </select>

                <button type="submit">Add Booking</button>
            </form>
        </div>
    );
}
