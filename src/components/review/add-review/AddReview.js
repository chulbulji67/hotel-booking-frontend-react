import React, { useState } from 'react';
import { addReview } from '../../../services/ReviewService';
import { useParams } from 'react-router-dom';

export default function AddReview() {
    const userId = localStorage.getItem("userId");
    const {id} = useParams();
    
    const [reviewData, setReviewData] = useState({
        rating: 0,
        comment: '',
        date: '',
        hotel: { id:  id}, // Initialize with hotel ID
        user: { id: userId } // Initialize with user ID
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setReviewData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAddReview = async (e) => {
        e.preventDefault();
        try {
            await addReview(reviewData);
            // Optionally, redirect the user or update the state to reflect the addition
            console.log('Review added successfully');
            // Reset review data after submission
            setReviewData({
                rating: 0,
                comment: '',
                date: '',
                hotel: { id: 0 }, // Reset hotel ID
                user: { id: 0 } // Reset user ID
            });
        } catch (error) {
            console.error('Error adding review:', error);
        }
    };

    return (
        <div>
            <h2>Add Review</h2>
            <form onSubmit={handleAddReview}>
                <input type="number" name="rating" placeholder="Rating" value={reviewData.rating} onChange={handleInputChange} />
                <textarea name="comment" placeholder="Comment" value={reviewData.comment} onChange={handleInputChange} />
                <input type="date" name="date" placeholder="Date" value={reviewData.date} onChange={handleInputChange} />
                {/* Optionally, you can provide a dropdown or input to select the hotel */}
                {/* Optionally, you can hide the user ID input if it's retrieved from the authentication */}
                
                <button type="submit">Add Review</button>
            </form>
        </div>
    );
}
