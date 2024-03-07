import './App.css';
import React, {useState} from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Home from './components/home/Home';
import HotelForm from './components/add-hotel/HotelForm';
import HotelDetails from './components/hotel-details/HotelDetails';
import HotelUpdate from './components/update-hotel/HotelUpdate';
import HotelDelete from './components/delete-hotel/HotelDelete';
import AddRoomForm from './components/room/add-room/AddRoomForm';
import DeleteRoom from './components/room/delete-room/DeleteRoom';
import UpdateRoom from './components/room/update-room/UpdateRoom';
import AddBookingComponent from './components/bookings/add-booking/AddBookingComponent';
import UserBooking from './components/bookings/UserBooking';
import UpdateBookingComponent from './components/bookings/update-booking/UpdateBookingComponet';
import DeleteBooking from './components/bookings/delete-bookings/DeleteBooking';
import Reviews from './components/review/get-all-review/Reviews';
import AddReview from './components/review/add-review/AddReview';
import DeleteReview from './components/review/delete-review/DeleteReview';
import UpdateReview from './components/review/update-review/UpdateReview';


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
      <Route path="/" element={<Home />} />
      <Route path='/admin' element = {<HotelDetails/>}/>
      <Route path="/home/hotel-details/:id" element={<HotelDetails />} />
      <Route path="/admin/update/:id" element={<HotelUpdate />} />
      <Route path="/admin/delete/:id" element={<HotelDelete />} />
      <Route path="/admin/add-room/:id" element={<AddRoomForm />} />
      <Route path='/home/hotel-details/:id/room-details/:roomId' element={<DeleteRoom/>}/> 
      <Route path='update/room/:id' element={<UpdateRoom/>}/>
      <Route path='/hotel/:id/book/room/:roomId' element={<AddBookingComponent/>}/>
      <Route path='/user/:id/bookings' element={<UserBooking/>}/>
      <Route path='/user/:userId/hotel/:id/bookings/:bookingId' element={<UpdateBookingComponent/>}/>
      <Route path='/user/:userId/hotel/:id/bookings/delete/:bookingId' element={<DeleteBooking/>}/>
      <Route path='home/hotel-details/:id/reviews' element={<Reviews/>}/>
      <Route path='/hotel/:id/add-review' element={<AddReview/>}/>
      <Route path='/hotel/:id/delete-review/:reviewId' element={<DeleteReview/>}/>
      <Route path='/hotel/:id/update-review/:reviewId' element={<UpdateReview/>}/>
      
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
