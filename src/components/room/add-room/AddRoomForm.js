import React, { useState } from 'react';
import { addRoom } from "../../../services/RoomService"; // Import your service method here
import { useParams } from 'react-router-dom';

const AddRoomForm = () => {
    const {id} = useParams();
    
    const [roomDetails, setRoomDetails] = useState({
        roomNumber: '',
        roomType: '',
        price: '',
        roomStatus: '',
        hotel: {
            id: '', // You might want to make this dynamic based on user selection or another logic
        },
    });
    roomDetails.hotel.id = id;

    const handleChange = (e) => {
        
        const { name, value } = e.target;
        if (name === 'hotel.id') {
            setRoomDetails(prevState => ({
                ...prevState,
                hotel: { ...prevState.hotel, id: value }
            }));
        } else {
            setRoomDetails(prevState => ({
                ...prevState,
                [name]: value,
            }));
        }
        
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("id",id);
        try {
            const response = await addRoom(roomDetails);
            console.log(response);
            // Handle success (e.g., showing a success message, redirecting, etc.)
            setRoomDetails({
                roomNumber: '',
                roomType: '',
                price: '',
                roomStatus: '',
                hotel: {
                    id: id, // Keeping the dynamic hotel id
                },
            });
        } catch (error) {
            console.error("Failed to add room:", error);
            // Handle error (e.g., showing an error message)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
             
                <input type="text" name="roomNumber" value={roomDetails.roomNumber} onChange={handleChange} placeholder='Room Number' />
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
               
                <input type="number" name="price" value={roomDetails.price} onChange={handleChange} placeholder='Price'/>
            </div>
            <div>
                
                <select name="roomStatus" value={roomDetails.roomStatus} onChange={handleChange} placeholder="Room Status">
                    <option value="">Room Status</option>
                    <option value="AVAILABLE">Available</option>
                    <option value="BOOKED">Booked</option>
                </select>
            </div>
            {/* <div>
                <label>Hotel ID</label>
                <input type="text" name="hotel.id" value={roomDetails.hotel.id} onChange={handleChange} />
            </div> */}
            <button type="submit">Add Room</button>
        </form>
    );
};

export default AddRoomForm;
