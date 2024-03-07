import React, { useState, useEffect } from 'react';
import { updateReviewById, getReviewById } from '../../../services/ReviewService';
import { useParams, useNavigate } from 'react-router-dom';

export default function UpdateReview() {
    const userId = localStorage.getItem("userId");
    const { reviewId } = useParams(); // Assuming you have a parameter for review ID in the URL

    const navigate = useNavigate();
    const {id} = useParams();

    // State to hold review data
    const [reviewData, setReviewData] = useState({
        rating: 0,
        comment: '',
        date: '',
        hotel: { id: id }, // Initialize with hotel ID
        user: { id: userId } // Initialize with user ID
    });

   
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setReviewData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleUpdateReview = async (e) => {
        e.preventDefault();
        try {
            await updateReviewById(reviewId, reviewData); // Update review data by ID
            navigate(`/home/hotel-details/${id}/reviews`);
            console.log('Review updated successfully');
        } catch (error) {
            console.error('Error updating review:', error);
        }
    };

    return (
        <div>
            <h2>Update Review</h2>
            <form onSubmit={handleUpdateReview}>
                <input type="number" name="rating" placeholder="Rating" value={reviewData.rating} onChange={handleInputChange} />
                <textarea name="comment" placeholder="Comment" value={reviewData.comment} onChange={handleInputChange} />
                <input type="date" name="date" placeholder="Date" value={reviewData.date} onChange={handleInputChange} />
                {/* Optionally, you can provide a dropdown or input to select the hotel */}
                {/* Optionally, you can hide the user ID input if it's retrieved from the authentication */}
                
                <button type="submit">Update Review</button>
            </form>
        </div>
    );
}
