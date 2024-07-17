const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/db');

// Connect to database
connectDB();

// Middleware

app.use(express.json()); // Parses incoming requests with JSON payloads
app.use(cors()); // Enables Cross-Origin Resource Sharing

// Routes
const bookingRoutes = require('./routes/bookings');
const authRoutes = require('./routes/auth');
const reviewsRoutes = require('./routes/reviewsRoutes');
const offersRoutes = require('./routes/offersRoutes');
app.use('/api/bookings', bookingRoutes); // Routes for booking-related APIs
app.use('/api/auth', authRoutes); // Routes for authentication-related APIs
app.use('/api/reviews', reviewsRoutes);
app.use('/api/offers', offersRoutes);

// Default route for testing
app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));
