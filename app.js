
const express = require('express');
const connectDB = require('./config/db');
const appointmentRoutes = require('./routes/appointmentRoutes');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');  
const cors = require('cors'); 
// Create an Express app
const app = express();

// Load environment variables
dotenv.config();
const corsOptions = {
    origin: true, // Allow requests from this origin
    credentials: true,
    optionSuccessStatus: 200
};
app.use(cors(corsOptions));
// Connect to MongoDB
connectDB();
app.use(bodyParser.json()); // Parse incoming requests with JSON payloads
app.use(express.json()); // To accept JSON payloads

// Routes
app.use('/api/appointments', appointmentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
