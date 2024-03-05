import React, { useEffect } from 'react';
import { Link , useParams} from 'react-router-dom';


export default function HotelDetails() {

    const { id } = useParams(); // Extract the id parameter from the URL


  return (
    <div>
      <p>Here you can:</p>
      <ul>
        <li><Link to="/add-hotel">Add Hotel</Link></li>
        <li><Link to={`/admin/update/${id}`}>Update Hotel</Link></li>
        <li><Link to={`/admin/delete/${id}`} >Delete Hotel</Link></li>
      </ul>
    </div>
  )
}
