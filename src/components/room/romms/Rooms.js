import React, {useState, useEffect} from 'react'
import { getAllRooms, getAllRoomsInHotel } from '../../../services/RoomService';
import RoomCard from '../room-card/RoomCard';
import { useParams } from 'react-router-dom';

export default function Rooms() {
    const [rooms, serRooms] = useState([]);
    const {id} = useParams();

    useEffect(() => {
      async function fetchHotels() {
        try {
          const data = await getAllRoomsInHotel(id);
          console.log(data);
          serRooms(data);
        } catch (error) {
          console.error('Error fetching hotels:', error);
        }
      }
  
      fetchHotels();
    }, []);
    return (
        <div className='hotel-card'>Rooms
            {rooms.map(room => (
                <RoomCard key={room.id} room={room} />
            ))}
        </div>
      );
      
}
