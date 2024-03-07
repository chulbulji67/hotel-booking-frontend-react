import React, { useEffect, useState } from 'react';
import { deleteReviewById, getAllReviews, getAllReviewsForHotel } from '../../../services/ReviewService';
import { Link, useParams } from 'react-router-dom';

export default function Reviews() {
    const [reviews, setReviews] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = async () => {
        try {
            const data = await getAllReviewsForHotel(id);
            setReviews(data);
            console.log(reviews);
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    };

    const deleteReviewHandler = async(reviedId) =>{
        try{
            const data = await deleteReviewById(reviedId)
            console.log("Deleted successfully");
        }catch(error){
            console.log("Some Error Occured");
        }
    }

    return (
        <div>
            <h2>All Reviews</h2>
            <Link to={`/hotel/${id}/add-review`}>Add Review</Link>
            <ul>
                {reviews.map((review, index) => (
                    <li key={index}>
                        {/* <h3>Id: {review.id}</h3> */}
                        <p>Rating: {review.rating}</p>
                        <p>Comment: {review.comment}</p>
                        <p>Date: {review.date}</p>               
                        <p>User ID: {review.userName}</p>
                        <Link to={`/hotel/${id}/delete-review/${review.id}`} >Delete review</Link>
                        <Link to={`/hotel/${id}/update-review/${review.id}`} >Update review</Link>
                    </li>
                ))}
                
                
            </ul>
        </div>
    );
}
