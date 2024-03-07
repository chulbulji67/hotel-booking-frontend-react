import axios from 'axios';

const API_URL = 'http://localhost:9090/hotel/reviews';

// Function to get the auth token
const getAuthToken = () => {
    return `Bearer ${localStorage.getItem('Authorization')}`;
};

// Service function to add a review
const addReview = async (reviewData) => {
    try {
        console.log("Review data ",reviewData)
        const response = await axios.post(API_URL, reviewData, {
            headers: {
                Authorization: getAuthToken(),
            }
        });
        return response.data;
    } catch (error) {
        console.error('Failed to add review:', error);
        throw error;
    }
};

// Service function to get all reviews
const getAllReviews = async () => {
    try {
        const response = await axios.get(API_URL, {
            headers: {
                Authorization: getAuthToken(),
            }
        });
        return response.data;
    } catch (error) {
        console.error('Failed to get all reviews:', error);
        throw error;
    }
};

// Service function to delete a review by ID
const deleteReviewById = async (reviewId) => {
    try {
        const response = await axios.delete(`${API_URL}/${reviewId}`, {
            headers: {
                Authorization: getAuthToken(),
            }
        });
        return response.data;
    } catch (error) {
        console.error('Failed to delete review:', error);
        throw error;
    }
};

// Service function to update a review by ID
const updateReviewById = async (reviewId, updatedReviewData) => {
    try {
        const response = await axios.put(`${API_URL}/${reviewId}`, updatedReviewData, {
            headers: {
                Authorization: getAuthToken(),
            }
        });
        return response.data;
    } catch (error) {
        console.error('Failed to update review:', error);
        throw error;
    }
};

// Service function to get all reviews for a specific hotel
const getAllReviewsForHotel = async (hotelId) => {
    try {
        const response = await axios.get(`${API_URL}/${hotelId}/reviews`, {
            headers: {
                Authorization: getAuthToken(),
            }
        });
        return response.data;
    } catch (error) {
        console.error('Failed to get reviews for hotel:', error);
        throw error;
    }
};

export { addReview, getAllReviews, deleteReviewById, updateReviewById, getAllReviewsForHotel };
