import React, { useState } from 'react';
import { updateBookingById } from '../../../services/Bookings';
import { useParams } from 'react-router-dom';

export default function UpdateBookingComponent() {
    const [res, setRes] = useState();
    const {id} = useParams();
    const [updatedBookingData, setUpdatedBookingData] = useState({
        checkInDate: '',
        checkOutDate: '',
        totalCost: '',
        bookingStatus: '',
        user: { id: '' },
        room: { id: '' },
        hotel: { id: id }
    });
    const [bookingIdToUpdate, setBookingIdToUpdate] = useState('');

    const {bookingId} = useParams();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedBookingData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleUpdateBooking = async (e) => {
        e.preventDefault();
        try {
            console.log(bookingId);
            const data =  await updateBookingById(bookingId, updatedBookingData);
            setUpdatedBookingData({
                checkInDate: '',
                checkOutDate: '',
                totalCost: '',
                bookingStatus: ''
            });
            setRes(data);
            console.log('Booking updated successfully');
            
        } catch (error) {
            console.error('Error updating booking:', error);
            setRes(error);
        }
    };

    return (
        <div>
            <h2>Update Booking</h2>
            {res && <pre>{JSON.stringify(res, null, 2)}</pre>}

            <form onSubmit={handleUpdateBooking}>
                <input type="datetime-local" name="checkInDate" value={updatedBookingData.checkInDate} onChange={handleInputChange} />
                <input type="datetime-local" name="checkOutDate" value={updatedBookingData.checkOutDate} onChange={handleInputChange} />
                <input type="number" name="totalCost" value={updatedBookingData.totalCost} onChange={handleInputChange} />
                <select name="bookingStatus" value={updatedBookingData.bookingStatus} onChange={handleInputChange}>
                    <option value="CONFIRMED">Confirmed</option>
                    <option value="CANCELLED">Cancelled</option>
                    <option value="COMPLETED">Completed</option>
                </select>
                <button type="submit">Update Booking</button>
            </form>
        </div>
    );
}
