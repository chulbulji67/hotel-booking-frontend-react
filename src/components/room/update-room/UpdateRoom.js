import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { updateHotelById } from '../../../services/hotelService';
import { updateRoomById } from '../../../services/RoomService';

export default function UpdateRoom() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [response, setResponse] = useState();
    const [roomDetails, setRoomDetails] = useState({
        roomNumber: '',
        roomType: '',
        price: '',
        roomStatus: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRoomDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("Update Button Clicked");
            console.log(id)
            const data = await updateRoomById(id, roomDetails)
            console.log(data);
            setResponse("Room Updated Successfully");
            // navigate(`/home/hotel-details/${id}`); // Adjust path according to your routing
        } catch (error) {
            console.error('Failed to update room details', error);
            setResponse("Some Internal Error Occured")
        }
    };

    return (
        <div>
            {response && response}
            <h2>Update Room</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Room Number</label>
                    <input
                        type="text"
                        name="roomNumber"
                        value={roomDetails.roomNumber}
                        onChange={handleChange}
                    />
                </div>
                <div>
                <select name="roomType" value={roomDetails.roomType} onChange={handleChange} placeholder="Select Room Type">
                    <option value="">Select Room Type</option>
                    <option value="SINGLE">Single</option>
                    <option value="DOUBLE">Double</option>
                    <option value="SUITE">Suite</option>
                </select>
            </div>
                <div>
                    <label>Price</label>
                    <input
                        type="number"
                        name="price"
                        value={roomDetails.price}
                        onChange={handleChange}
                    />
                </div>
                <div>
                
                <select name="roomStatus" value={roomDetails.roomStatus} onChange={handleChange} placeholder="Room Status">
                    <option value="">Room Status</option>
                    <option value="AVAILABLE">Available</option>
                    <option value="BOOKED">Booked</option>
                </select>
            </div>
                <button type="submit">Update</button>
            </form>
        </div>
    );
}
