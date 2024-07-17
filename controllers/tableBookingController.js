// controllers/tableBookingController.js
const { TableBooking } = require('../models');

exports.getAllTableBookings = async (req, res) => {
    try {
        const bookings = await TableBooking.find();
        res.json(bookings);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.addTableBooking = async (req, res) => {
    try {
        const newBooking = await TableBooking.create(req.body);
        res.json({ success: true, booking: newBooking });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

exports.updateTableBooking = async (req, res) => {
    try {
        const updatedBooking = await TableBooking.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBooking) {
            return res.status(404).json({ success: false, error: 'Booking not found.' });
        }
        res.json({ success: true, booking: updatedBooking });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

exports.deleteTableBooking = async (req, res) => {
    try {
        const deletedBooking = await TableBooking.findByIdAndDelete(req.params.id);
        if (!deletedBooking) {
            return res.status(404).json({ success: false, error: 'Booking not found.' });
        }
        res.json({ success: true, message: 'Booking deleted successfully.' });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};