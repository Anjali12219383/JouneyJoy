import React, { useState } from 'react';
//import './Components/booking.css'; // Optional: Style the page

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    travelDate: '',
    destination: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulating a booking confirmation
    setMessage(`Thank you, ${formData.name}! Your booking to ${formData.destination} is confirmed.`);
    setFormData({
      name: '',
      email: '',
      travelDate: '',
      destination: '',
    });
  };

  return (
    <div className="booking-page">
      <h1>Book Your Trip</h1>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Travel Date:</label>
          <input
            type="date"
            name="travelDate"
            value={formData.travelDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Destination:</label>
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn">Confirm Booking</button>
      </form>
      {message && <p className="confirmation-message">{message}</p>}
    </div>
  );
};

export default Booking;
