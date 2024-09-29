const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
    _id: { type: String, required: true }, // Use _id for MongoDB documents
    name: { type: String, required: true },
    type: { type: String, required: true },
    availability: { type: Boolean, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true }, // Add price field
});

const VehicleModel = mongoose.model("vehicles", VehicleSchema);

module.exports = VehicleModel;
