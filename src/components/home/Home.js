import React from 'react';
import './Home.css'

import Carousel from '../carousel/Carousel';
import Hotel from '../hotel/Hotel';

function Home() {
    return (
        <div className="container">

            <header>
                <h1>Welcome to Hotel Booking</h1>
            </header>

            <Carousel />


            <Hotel />
        </div>
    );
}

export default Home;
