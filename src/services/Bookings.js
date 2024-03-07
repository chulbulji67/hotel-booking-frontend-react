import axios from 'axios';

const API_URL = 'http://localhost:9090/bookings';

// Function to get the auth token
const getAuthToken = () => {
    return `Bearer ${localStorage.getItem('Authorization')}`;
  };

// Service function to add a booking
const addBooking = async (bookingData) => {
    try {
        const response = await axios.post(API_URL, bookingData, {
            headers: {
                Authorization: getAuthToken(),
            }
        });
        return response.data;
    } catch (error) {
        console.error('Failed to add booking:', error);
        throw error;
    }
};

// Service function to get all bookings
const getAllBookings = async () => {
    try {
        const response = await axios.get(API_URL, {
            headers: {
                Authorization: getAuthToken(),
            }
        });
        return response.data;
    } catch (error) {
        console.error('Failed to get all bookings:', error);
        throw error;
    }
};
const getAllBookingsByUser = async (userId) => {
    try {
        const response = await axios.get(API_URL+`/user/${userId}`, {
            headers: {
                Authorization: getAuthToken(),
            }
        });
        return response.data;
    } catch (error) {
        console.error('Failed to get all bookings:', error);
        throw error;
    }
};

// Service function to update a booking by ID
const updateBookingById = async (bookingId, updatedBookingData,) => {
    try {
        const response = await axios.put(`${API_URL}/${bookingId}`, updatedBookingData, {
            headers: {
                Authorization: getAuthToken(),
            }
        });
        return response.data;
    } catch (error) {
        console.error('Failed to update booking by ID:', error);
        throw error;
    }
};

export { addBooking, getAllBookings, updateBookingById , getAllBookingsByUser};
