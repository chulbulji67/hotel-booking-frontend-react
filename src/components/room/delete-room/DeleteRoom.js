import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { deleteRoomById } from '../../../services/RoomService';


export default function DeleteRoom() {

    const [response, setResponse] = useState();
    const {id} = useParams();//for hotel
    const {roomId} = useParams();//for room
    
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
        <Link to = {`/update/room/${roomId}`}>Update Room</Link>
        {response && `${response}`}
        <button type="button" onClick={deleteRoom}>Delete Room</button>
      
    </div>
  )
}
