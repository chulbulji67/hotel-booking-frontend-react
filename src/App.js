import './App.css';
import React, {useState} from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Home from './components/home/Home';
import Admin from './components/admin/Admin';
import HotelForm from './components/add-hotel/HotelForm';
import HotelDetails from './components/hotel-details/HotelDetails';
import HotelUpdate from './components/update-hotel/HotelUpdate';
import HotelDelete from './components/delete-hotel/HotelDelete';

function App() {
  const baseUrl = window.location.origin;
console.log(baseUrl);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
    
    <BrowserRouter>
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="/add-hotel" element={<HotelForm />} />
      <Route path="/home" element={<Home />} />
      <Route path='/admin' element = {<HotelDetails/>}/>
      <Route path="/home/hotel-details/:id" element={<HotelDetails />} />
      <Route path="/admin/update/:id" element={<HotelUpdate />} />
      <Route path="/admin/delete/:id" element={<HotelDelete />} />
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
