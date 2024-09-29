// models/Booking.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    customerEmail: { type: String, required: true },
    customerProduct: { type: String, required: true },
    vehicle: {
        name: { type: String, required: true },
        type: { type: String, required: true },
        price: { type: Number, required: true },
    },
}, { timestamps: true });

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
