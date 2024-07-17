// models/RoomBooking.js
const mongoose = require('mongoose');

const roomBookingSchema = new mongoose.Schema({
    roomType: { type: String, required: true },
    checkInDate: { type: Date, required: true },
    checkOutDate: { type: Date, required: true },
    guests: { type: Number, required: true },
    rooms: { type: Number, required: true },
    specialRequests: { type: String },
    name: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true }
});

module.exports = mongoose.model('RoomBooking', roomBookingSchema);
