import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookingsList = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get('http://localhost:5000/bookings');
                setBookings(response.data);
            } catch (err) {
                setError('Failed to fetch bookings.');
            } finally {
                setLoading(false);
            }
        };

        fetchBookings();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="bookings-list container mt-5">
            <h2 className="text-center">Bookings List</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Vehicle ID</th>
                        <th>Customer Name</th>
                        <th>Email</th>
                        <th>Product</th>
                        <th>Booking Date</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking) => (
                        <tr key={booking._id}>
                            <td>{booking._id}</td>
                            <td>{booking.vehicleId}</td>
                            <td>{booking.customerName}</td>
                            <td>{booking.customerEmail}</td>
                            <td>{booking.customerProduct}</td>
                            <td>{new Date(booking.bookingDate).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookingsList;
