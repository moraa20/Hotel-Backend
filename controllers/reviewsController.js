// controllers/reviewsController.js

const Review = require('../models/Review');

// Get all reviews
exports.getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find();
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new review
exports.createReview = async (req, res) => {
    const { name, comment } = req.body;
    try {
        const newReview = await Review.create({ name, comment });
        res.status(201).json(newReview);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
