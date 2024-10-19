// models/Appointment.js
const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    studentName: {
        type: String,
        required: true,
    },
    instructor: {
        type: String,
        required: true,
    },
    timeSlot: {
        type: Date,
        required: true,
    },
    reason: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
