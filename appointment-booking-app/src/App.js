import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppointmentBooking from './component/AppointmentBooking';

const App = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />      
      <Router>
        <Routes>
          <Route path="/" element={<AppointmentBooking />} />
        </Routes>
      </Router>
    </>

  );
};

export default App;
