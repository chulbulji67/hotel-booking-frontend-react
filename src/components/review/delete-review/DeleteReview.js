import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteReviewById } from '../../../services/ReviewService';

export default function DeleteReview() {
    const { reviewId } = useParams();
    const {id} = useParams();
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            await deleteReviewById(reviewId);
            alert('Review deleted successfully');
            // Optionally, redirect the user or update the state to reflect the deletion
            navigate(`/home/hotel-details/${id}/reviews`);

        } catch (error) {
            alert('Failed to delete review');
            navigate(`/home/hotel-details/${id}/reviews`);
            console.error(error);
        }
    };

    return (
        <div>
            <button onClick={handleDelete}>Delete Review</button>
        </div>
    );
}
