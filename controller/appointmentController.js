const Appointment = require('../models/Appointment');
const nodemailer = require('nodemailer');

// Function to book an appointment
exports.bookAppointment = async (req, res) => {
    try {
        const { studentName, instructor, timeSlot, reason, email } = req.body;

        // Create a new appointment
        const appointment = new Appointment({
            studentName,
            instructor,
            timeSlot,
            reason,
            email,
        });

        await appointment.save();

        // Send confirmation email
        sendConfirmationEmail(studentName, email, instructor, timeSlot);

        return res.status(201).json({
            message: `Hi ${studentName}, your appointment is confirmed with ${instructor}.`,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Function to send a confirmation email
const sendConfirmationEmail = (studentName, email, instructor, timeSlot) => {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST, 
        port: process.env.SMTP_PORT, 
        secure: process.env.SMTP_PORT === '465', 
        auth: {
            user: process.env.SMTP_EMAIL, 
            pass: process.env.SMTP_PASSWORD, 
        },
    });

    const mailOptions = {
        from: process.env.SMTP_EMAIL,
        to: email,
        subject: 'Appointment Confirmation',
        text: `Hi ${studentName}, your appointment with ${instructor} is confirmed for ${new Date(timeSlot).toLocaleString()}.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.error('Error sending email:', error);
        }
        console.log('Email sent:', info.response);
    });
};
