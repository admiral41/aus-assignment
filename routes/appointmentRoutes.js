const express = require('express');
const router = express.Router();
const appointmentController = require('../controller/appointmentController');

router.post('/book', appointmentController.bookAppointment);

module.exports = router;
