const Offer = require('../models/Offer');

// Get all offers
exports.getOffers = async (req, res) => {
    try {
        const offers = await Offer.find();
        res.json(offers);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

// Create a new offer
exports.createOffer = async (req, res) => {
    try {
        const { title, validUntil, description, type } = req.body;

        const newOffer = new Offer({
            title,
            validUntil,
            description,
            type,
        });

        const offer = await newOffer.save();
        res.json(offer);
    } catch (err) {
        res.status(500).send('Server error');
    }
};
