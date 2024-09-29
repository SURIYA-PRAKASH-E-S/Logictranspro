import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './VehicleBooking.css';

const VehicleBooking = () => {
    const [vehicles, setVehicles] = useState([]);
    const [showAvailable, setShowAvailable] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const response = await axios.get('http://localhost:5000/getvehicles');
                setVehicles(response.data);
            } catch (error) {
                console.error("Error fetching vehicles", error);
                alert("Failed to load vehicles. Please try again later.");
            }
        };
        fetchVehicles();
    }, []);

    const handleBooking = (vehicle) => {
        if (!vehicle.availability) {
            alert(`${vehicle.name} is not available for booking.`);
            return;
        }
        navigate('/booking', { state: { vehicle } });
    };

    const handleViewDetails = (vehicle) => {
        navigate('/vehicle-details', { state: { vehicle } });
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Road Way- Vehicles</h2>
            <div className="d-flex justify-content-center mb-4">
                <button className="btn btn-primary me-2" onClick={() => setShowAvailable(true)}>Available Vehicles</button>
                <button className="btn btn-secondary" onClick={() => setShowAvailable(false)}>Booked Vehicles</button>
            </div>

            {showAvailable ? (
                <div className="row">
                    {vehicles.filter(vehicle => vehicle.availability).map(vehicle => (
                        <div className="col-md-4" key={vehicle._id}>
                            <div className="card">
                                <img src={vehicle.image || 'placeholder-image-url.jpg'} alt={vehicle.name} className="card-img-top" />
                                <div className="card-body">
                                    <h3>{vehicle.name}</h3>
                                    <p>Type: {vehicle.type}</p>
                                    <p>Charges: ₹{vehicle.price}</p>
                                    <p>{vehicle.availability ? "Available" : "Not Available"}</p>
                                    <button onClick={() => handleBooking(vehicle)} className="btn btn-primary" disabled={!vehicle.availability}>
                                        {vehicle.availability ? "Book Now" : "Unavailable"}
                                    </button>
                                    <button onClick={() => handleViewDetails(vehicle)} className="btn btn-secondary ms-2">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <Slider {...settings}>
                    {vehicles.filter(vehicle => !vehicle.availability).map(vehicle => (
                        <div className="card" key={vehicle._id}>
                            <img src={vehicle.image || 'placeholder-image-url.jpg'} alt={vehicle.name} className="card-img-top" />
                            <div className="card-body">
                                <h3>{vehicle.name}</h3>
                                <p>Type: {vehicle.type}</p>
                                <p>Charges: ₹{vehicle.price}</p>
                                <p>Availability: {vehicle.availability ? "Available" : "Not Available"}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            )}
        </div>
    );
};

export default VehicleBooking;