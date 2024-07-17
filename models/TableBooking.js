// models/TableBooking.js
const mongoose = require('mongoose');

const tableBookingSchema = new mongoose.Schema({
    diningOption: { type: String, required: true },
    seatingPreference: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    guests: { type: Number, required: true },
    specialRequests: { type: String },
    name: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true }
});

module.exports = mongoose.model('TableBooking', tableBookingSchema);
