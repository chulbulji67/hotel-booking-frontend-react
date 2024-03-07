// AuthService.js
import axios from 'axios';

const API_URL = 'http://localhost:9090/auth/login';

const login = async (email, password) => {
    try {
        const response = await axios.post(API_URL, {
            email,
            password,
        });

        const data = response.data;

        // Check if the response contains a JWT token
        if (data.jwtToken) {
            // Set JWT token and other data in local storage
            localStorage.setItem('Authorization', data.jwtToken);
            localStorage.setItem('username', data.username);
            localStorage.setItem('roles', data.roles[0]);
        }

        return data;
    } catch (error) {
        // Handle different types of errors
        if (error.response) {
            // Server responded with an error status code
            console.error('Server error:', error.response.data);
            throw new Error('Server error. Please try again later.');
        } else if (error.request) {
            // The request was made but no response was received
            console.error('Network error:', error.request);
            throw new Error('Network error. Please check your internet connection.');
        } else {
            // Something else happened while setting up the request
            console.error('Error:', error.message);
            throw new Error('An error occurred. Please try again later.');
        }
    }
};

const logout = () => {
    // Remove user from local storage to log user out
    
    localStorage.removeItem('Authorization');
    localStorage.removeItem('username');
    localStorage.removeItem('roles');
    localStorage.removeItem("userId")
};

export const authService = {
    login,
    logout,
};
