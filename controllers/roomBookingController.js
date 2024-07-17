// controllers/roomBookingController.js
const { RoomBooking } = require('../models');

exports.getAllRoomBookings = async (req, res) => {
    try {
        const bookings = await RoomBooking.find();
        res.json(bookings);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.addRoomBooking = async (req, res) => {
    try {
        const newBooking = await RoomBooking.create(req.body);
        res.json({ success: true, booking: newBooking });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

exports.updateRoomBooking = async (req, res) => {
    try {
        const updatedBooking = await RoomBooking.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBooking) {
            return res.status(404).json({ success: false, error: 'Booking not found.' });
        }
        res.json({ success: true, booking: updatedBooking });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

exports.deleteRoomBooking = async (req, res) => {
    try {
        const deletedBooking = await RoomBooking.findByIdAndDelete(req.params.id);
        if (!deletedBooking) {
            return res.status(404).json({ success: false, error: 'Booking not found.' });
        }
        res.json({ success: true, message: 'Booking deleted successfully.' });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};