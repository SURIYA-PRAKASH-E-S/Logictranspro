import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Make sure to import axios
import './BookingPage.css';

const BookingPage = () => {
    const location = useLocation();
    const { vehicle } = location.state;
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [customerProduct, setCustomerProduct] = useState('');
    const navigate = useNavigate();

    const handleBookingSubmit = async (e) => {
        e.preventDefault();
        if (!customerName || !customerEmail || !customerProduct) {
            alert("Please fill in all fields.");
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/bookings', {
                customerName,
                customerEmail,
                customerProduct,
                vehicle,
            });
            console.log('Booking successful:', response.data); // Log the success response
            navigate('/payment', {
                state: {
                    vehicle,
                    customerName,
                    customerEmail,
                    customerProduct,
                },
            });
        } catch (error) {
            alert("Failed to book. Please try again.");
            console.error(error);
        }
    };

    return (
        <div className="booking-page container mt-5">
            <h2 className="text-center">Booking Details for {vehicle.name}</h2>
            <div className="vehicle-details text-center mb-4">
                <img src={vehicle.image || 'placeholder-image-url.jpg'} alt={vehicle.name} className="vehicle-image img-fluid" />
                <p><strong>Type:</strong> {vehicle.type}</p>
                <p><strong>Charges:</strong> ₹{vehicle.price}</p>
            </div>

            <form onSubmit={handleBookingSubmit} className="mb-4">
                <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input type="text" className="form-control" value={customerName} onChange={(e) => setCustomerName(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input type="email" className="form-control" value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">What type of Product?</label>
                    <input type="text" className="form-control" value={customerProduct} onChange={(e) => setCustomerProduct(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary">Confirm</button>
            </form>

            <div className="text-center mt-4">
                <button onClick={() => navigate('/')} className="btn btn-secondary">Back to Home</button>
            </div>
        </div>
    );
};

export default BookingPage;
