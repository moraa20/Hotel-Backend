// routes/reviewsRoutes.js

const express = require('express');
const router = express.Router();
const reviewsController = require('../controllers/reviewsController');

// GET all reviews
router.get('/', reviewsController.getAllReviews);

// POST a new review
router.post('/', reviewsController.createReview);

module.exports = router;
