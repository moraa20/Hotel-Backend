// models/Offer.js
const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    validUntil: {
        type: Date,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['hotel', 'restaurant'], // Example types
        required: true,
    },
});

module.exports = mongoose.model('Offer', offerSchema);
