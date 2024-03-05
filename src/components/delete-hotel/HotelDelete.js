import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { deleteHotelById } from '../../services/hotelService';

export default function HotelDelete() {

    const [response, setResponse] = useState();
    const {id} = useParams();

    
    const deleteHotel =async (e) =>{
        console.log("Delete button has clicked")
        const data = await deleteHotelById(id);
        console.log(data)
        setResponse(data);
    }

  return (
    <div>
        {`workding ${id}`}
        {response && `${response}`}
        <button type="button" onClick={deleteHotel}>Delete</button>
    </div>
  )
}
