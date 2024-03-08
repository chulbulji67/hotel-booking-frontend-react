import React from 'react'
import "../../hotelcard/HotelCard.css"
import { Link } from 'react-router-dom';


export default function
    RoomCard({room}) {
    const roomId = room.id;
    return (

        
        <div className="hotel-card">
            
            <div className='about-hotel'>
                <img src="https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                <div className="hotel-card-content">
                    <h3>Room Number: {room.roomNumber}</h3>
                    <p>{room.roomType}</p>
                    <p>{room.price}</p>
                    <p>{room.roomStatus}</p>
                    <Link to={`room-details/${roomId}`} className='btn'>Book Room</Link>
                </div>
            </div>
            
        </div>
    )
}
