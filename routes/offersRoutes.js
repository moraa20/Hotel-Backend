const express = require('express');
const router = express.Router();
const { getOffers, createOffer } = require('../controllers/offersController');

// @route GET /api/offers
// @desc Get all offers
router.get('/', getOffers);

// @route POST /api/offers
// @desc Create a new offer
router.post('/', createOffer);

module.exports = router;
