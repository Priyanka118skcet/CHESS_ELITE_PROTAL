import React, { useState } from "react";
import SuccessModal from "./SuccessModal"; // Import the modal component
import '../styles/EnrollCourse.css';

const SuperRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    preferredClassTime: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demonstration purposes, directly show the modal
    setShowModal(true);
  };

  return (
    <div className="super-picture"> 
      <div className="super-registration-container">
        <h2 className="ch">Chess Course Enrollment</h2>
        <form onSubmit={handleSubmit}>
          <div className="super-form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter the name"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="super-form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter the email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="super-form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter the phone number"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="super-form-group">
            <label htmlFor="course">Course</label>
            <input
              type="text"
              placeholder="Enter the course"
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            />
          </div>

          <div className="super-form-group">
            <label htmlFor="dateOfBirth">Date Of Birth</label>
            <input
              type="date"
              placeholder="Date of birth"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
          </div>

          <div className="super-form-group">
            <label htmlFor="preferredClassTime">Preferred Class Time</label>
            <input
              type="time"
              placeholder="Enter the preferred class time"
              id="preferredClassTime"
              name="preferredClassTime"
              value={formData.preferredClassTime}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="super-btn-enroll">Enroll</button>
        </form>
      </div>
      {showModal && <SuccessModal courseName={formData.course} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default SuperRegistrationForm;
