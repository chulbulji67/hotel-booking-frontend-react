import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { deleteRoomById } from '../../../services/RoomService';
import "./DeleteRoom.css"

export default function DeleteRoom() {

    const [response, setResponse] = useState();
    const {id} = useParams();//for hotel
    const {roomId} = useParams();//for room
    const role = localStorage.getItem('roles')
    
    const deleteRoom =async (e) =>{
        console.log("Delete button has clicked")
        const data = await deleteRoomById(roomId);
        console.log(data)
        setResponse(data);
    }
    const updateRoom = async (e) =>{
        console.log("Update button clicked")
    }

  return (
    <div>
        {/* {`workding ${roomId}`} */}
        {role==="ROLE_ADMIN" && <Link to = {`/update/room/${roomId}`} className='link'>Update Room</Link>}
        <Link to = {`/hotel/${id}/book/room/${roomId}`} className='link'>Book Room</Link>
        {response && `${response}`}
        {role==="ROLE_ADMIN" && <button type="button" onClick={deleteRoom}>Delete Room</button>}
      
    </div>
  )
}
