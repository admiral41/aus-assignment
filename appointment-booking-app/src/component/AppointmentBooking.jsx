import React, { useState } from 'react';
import axios from 'axios';
import './AppointmentBooking.css'; 
import toast from 'react-hot-toast';

const AppointmentBooking = () => {
    const [studentName, setStudentName] = useState('');
    const [instructor, setInstructor] = useState('Mr Caleb Boadi');
    const [timeSlot, setTimeSlot] = useState('');
    const [reason, setReason] = useState('Project Help');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send appointment data as JSON
            const response = await axios.post('http://localhost:5000/api/appointments/book', {
                studentName,
                instructor,
                timeSlot,
                reason,
                email,
            }, {
                headers: {
                    'Content-Type': 'application/json' 
                }
            });

            // Show success message
            toast.success(`Hi ${studentName}! Appointment Confirmed`);
        } catch (error) {
            console.error(error);
            toast.error('There was an error booking the appointment.');
        }
    };

    return (
        <div className="container">
            <div className="card p-4 shadow-sm">
                <h1 className="text-center mb-4">
                    <i className="fas fa-calendar-check"></i> Book a Meeting
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">
                            <i className="fas fa-user icon"></i>Your Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            value={studentName}
                            onChange={(e) => setStudentName(e.target.value)}
                            placeholder="Enter your name"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            <i className="fas fa-chalkboard-teacher icon"></i>Select Instructor
                        </label>
                        <select
                            className="form-select form-control"
                            value={instructor}
                            onChange={(e) => setInstructor(e.target.value)}
                        >
                            <option value="Mr Caleb Boadi">Mr Caleb Boadi</option>
                            <option value="Dr Cesar Sanin">Dr Cesar Sanin</option>
                            <option value="Prof Andrew Levula">Prof Andrew Levula</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            <i className="fas fa-clock icon"></i>Select Date and Time
                        </label>
                        <input
                            type="datetime-local"
                            className="form-control"
                            value={timeSlot}
                            onChange={(e) => setTimeSlot(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            <i className="fas fa-comment-dots icon"></i>Reason for Meeting
                        </label>
                        <select
                            className="form-select form-control"
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                        >
                            <option value="Project Help">Project Help</option>
                            <option value="Course Guidance">Course Guidance</option>
                            <option value="Technical Issues">Technical Issues</option>
                            <option value="Lab Activity">Lab Activity</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            <i className="fas fa-envelope icon"></i>Your Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                        Book Appointment
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AppointmentBooking;
