import axios from 'axios';
import Hotel from '../components/hotel/Hotel';

const API_BASE_URL = 'http://localhost:9090';
const ROOMS_ENDPOINT = `${API_BASE_URL}/rooms`;

// Function to get the auth token
const getAuthToken = () => {
  return `Bearer ${localStorage.getItem('Authorization')}`;
};

export const addRoom = async (roomData) => {
  try {
    const response = await axios.post(ROOMS_ENDPOINT, roomData, {
      headers: {
        Authorization: getAuthToken(),
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteRoomById = async (roomId) => {
  try {
    const response = await axios.delete(`${ROOMS_ENDPOINT}/${roomId}`, {
      headers: {
        Authorization: getAuthToken(),
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateRoomById = async (roomId, roomData) => {
  try {
    console.log(roomId);
    const response = await axios.put(`${ROOMS_ENDPOINT}/${roomId}`, roomData, {
      headers: {
        Authorization: getAuthToken(),
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getRoomById = async (roomId) => {
  try {
    const response = await axios.get(`${ROOMS_ENDPOINT}/${roomId}`, {
      headers: {
        Authorization: getAuthToken(),
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllRooms = async () =>{
    try{
        const response = await axios.get(`${ROOMS_ENDPOINT}`,{
            headers : {
                Authorization : getAuthToken(),
            },
        });
        return response.data;
    }catch(error){
        throw error;
    }
}
// http://localhost:9090/rooms/hotel/1
// get All rooms in specific Hotel
export const getAllRoomsInHotel = async (hotelId) =>{
    try{
        const response = await axios.get(`http://localhost:9090/rooms/hotel/${hotelId}`,{
            headers : {
                Authorization : getAuthToken(),
            },
        });
        return response.data;
    }catch(error){
        throw error;
    }
}