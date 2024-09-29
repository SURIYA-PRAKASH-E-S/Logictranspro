// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/demo', {
}).then(()=>console.log('connected...')).catch(()=>console.log('Error occured'));


const Vehicle=require('./models/VehicleModel.js')


//const Vehicle = mongoose.model('Vehicle', vehicleSchema);

// Route to get vehicles
app.get('/getvehicles', async (req, res) => {
    try {
        const vehicles = await Vehicle.find();
        res.json(vehicles);
    } catch (err) {
        res.status(404).send(err);
    }
});

const Booking=require('./models/BookingModel.js')
// Get all bookings
app.get('bookings', async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching bookings', error });
    }
});

// Create a new booking
app.post('/bookings', async (req, res) => {
    console.log('Received booking data:', req.body);
    const { customerName, customerEmail, customerProduct,  vehicle} = req.body;

    try {
        const newBooking = new Booking({
            customerName,
            customerEmail,
            customerProduct,
            vehicle,
        });

        await newBooking.save();
        res.status(201).json(newBooking);
    } catch (error) {
        res.status(400).json({ message: 'Failed to create booking', error });
    }
});
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Running....');
    console.log(`Server running on port ${PORT}`);
});
