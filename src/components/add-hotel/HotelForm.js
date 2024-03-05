import React, { useState } from 'react';
import "./HotelForm.css"
import { addHotel } from '../../services/hotelService';
const HotelForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        description: '',
        rating: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to backend
        try{
            console.log(formData);
            const data = await addHotel(formData)
            console.log(data);
        }catch{
            console.log("Some Error Occured");
        }
       
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>

                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder='Name of Hotel'
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div>

                <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder='Hotel Location'
                    value={formData.location}
                    onChange={handleChange}
                />
            </div>
            <div className='textarea'>

                <textarea 
                    id="description"
                    name="description"
                    placeholder='Hotel Description'
                    rows={6}
                    value={formData.description}
                    onChange={handleChange}
                />
            </div>


                <div className='rating'>
                    <select
                        id="rating"
                        name="rating"
                        placeholder="Hotel Rating"
                        value={formData.rating}
                        onChange={handleChange}
                    >
                        <option value="">Select a rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>

        
            <button type="submit">Submit</button>
        </form>
    );
};

export default HotelForm;
