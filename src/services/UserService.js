import axios from 'axios';

const API_URL = 'http://localhost:9090/users';

// Service function to add a user
const addUser = async (userData) => {
    try {
        const response = await axios.post(API_URL, userData);
        return response.data;
    } catch (error) {
        console.error('Failed to add user:', error);
        throw error;
    }
};

// Service function to get all users
const getAllUsers = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Failed to get all users:', error);
        throw error;
    }
};

// Service function to get a user by email
const getUserByEmail = async (email) => {
    try {
        const response = await axios.get(`${API_URL}/${email}`);
        return response.data;
    } catch (error) {
        console.error('Failed to get user by email:', error);
        throw error;
    }
};

// Service function to delete a user by id
const deleteUserById = async (userId) => {
    try {
        const response = await axios.delete(`${API_URL}/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Failed to delete user by id:', error);
        throw error;
    }
};

export { addUser, getAllUsers, getUserByEmail, deleteUserById };
