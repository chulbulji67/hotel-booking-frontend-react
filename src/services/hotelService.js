import axios from 'axios';

const API_URL = 'http://localhost:9090/hotels';
const token = localStorage.getItem('Authorization');
const addHotel = async (hotelData) => {
    try {
      
      console.log(token);
      const response = await axios.post(API_URL, hotelData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer "+token,
        },
      });
  
      return response.data;
    } catch (error) {
      console.error('There was an error!', error);
      throw error;
    }
  };

const getAllHotels = async () => {
  try {
   const response = await axios.get(API_URL, {
    headers:{
        "Authorization":"Bearer "+token
    }
   });
   console.log(token);
    return response.data;
  } catch (error) {
    console.error('There was an error!', error);
    throw error;
  }
};

const getHotelById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('There was an error!', error);
    throw error;
  }
};

const updateHotelById = async (id, hotelData) => {
  try {
    const token = localStorage.getItem('Authorization');
    console.log("token ",token);
    const response = await axios.put(`${API_URL}/${id}`, hotelData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer "+token,
      },
    });
    
    return response.data;
  } catch (error) {
    console.error('There was an error!', error);
    throw error;
  }
};

const deleteHotelById = async (id) => {
    try {
        const token = localStorage.getItem('Authorization');
        console.log("token ",token);
        const response = await axios.delete(`${API_URL}/${id}`, {
          headers: {
            'Authorization': "Bearer "+token,
          },
        });
        
        return response.data;
      } catch (error) {
      console.error('There was an error!', error);
      throw error;
    }
  };

export { getAllHotels, getHotelById, updateHotelById, addHotel, deleteHotelById };
