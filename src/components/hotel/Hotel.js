import React, {useState, useEffect} from 'react'
import HotelCard from '../hotelcard/HotelCard'
import { getAllHotels } from '../../services/hotelService';

export default function Hotel() {

    const [hotels, setHotels] = useState([]);

    useEffect(() => {
      async function fetchHotels() {
        try {
          const data = await getAllHotels();
          console.log(data);
          setHotels(data);
        } catch (error) {
          console.error('Error fetching hotels:', error);
        }
      }
  
      fetchHotels();
    }, []);


  return (
    <div className='hotel-card'>
       
      {hotels.map(hotel => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
  
       
    </div>
  )
}
