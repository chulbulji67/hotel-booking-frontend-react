import React from 'react'
import "./HotelCard.css"
import { Link } from 'react-router-dom';

export default function HotelCard({hotel}) {
        // console.log("Hotel=",hotel)
        // console.log("HotelName" , hotel.name);
    return (


        <div className="hotel-card">
            <div className='about-hotel'>
                <img src="https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                <div className="hotel-card-content">
                    <h3>{hotel.name}</h3>
                    <p>{hotel.description}</p>
                    <p>{hotel.location}</p>
                    {localStorage.getItem("roles") && <Link to={`hotel-details/${hotel.id}`} className='btn' style={{marginRight:"60px"}}>Know More</Link>}
                    {localStorage.getItem("roles") && <Link to={`hotel-details/${hotel.id}/reviews`} className='btn'>See Reviews</Link>}
                </div>
            </div>
            
        </div>
    )
}
