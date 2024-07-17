// routes/bookings.js
const express = require('express');
const router = express.Router();
const { getAllRoomBookings, addRoomBooking, updateRoomBooking, deleteRoomBooking } = require('../controllers/roomBookingController');
const { getAllTableBookings, addTableBooking, updateTableBooking, deleteTableBooking } = require('../controllers/tableBookingController');

// Routes for table bookings
router.get('/table', getAllTableBookings);
router.post('/table', addTableBooking);
router.put('/table/:id', updateTableBooking);
router.delete('/table/:id', deleteTableBooking);

// Routes for room bookings
router.get('/room', getAllRoomBookings);
router.post('/room', addRoomBooking);
router.put('/room/:id', updateRoomBooking);
router.delete('/room/:id', deleteRoomBooking);

module.exports = router;
