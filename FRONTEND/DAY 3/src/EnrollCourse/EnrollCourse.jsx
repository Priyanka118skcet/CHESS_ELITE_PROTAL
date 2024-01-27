// SuperRegistrationForm.jsx
import React, { useState } from "react";
import axios from "axios";
import '../styles/EnrollCourse.css';

const SuperRegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    course: "",
    email: "",
    phoneNumber: "",
    chessExperience: "",
    dateOfBirth: "",
    address: "",
    preferredClassTime: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // API endpoint (replace with your actual endpoint)
    const apiUrl = "https://example.com/api/enrollment";

    // Make a POST request to the server
    axios.post(apiUrl, formData)
      .then(response => {
        console.log("Form submitted successfully:", response.data);
        setSuccessMessage(`Successfully enrolled for the course, ${formData.course}!`);
        // Handle any additional logic or redirect the user
      })
      .catch(error => {
        console.error("Error submitting form:", error);
        // Handle errors or show an error message to the user
      });
  };

  return (
    <div className="super-registration-container">
      <h2>Chess Course Enrollment</h2>
      {successMessage && <div className="success-message">{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="super-form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            placeholder="Enter the firstname"
            id="firstName"
            name="firstName"
            value={formData.firstName}
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
          placeholder="Enter the phonenumber"
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
        <label htmlFor="chessExperience">chess Experience</label>
        <input
          type="text"
          placeholder="Enter the chess experience"
          id="chessExperience"
          name="chessExperience"
          value={formData.chessExperience}
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
        <label htmlFor="address">Address</label>
        <input
          type="text"
          placeholder="Enter the Address"
          id="address"
          name="address"
          value={formData.address}
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
  );
};

export default SuperRegistrationForm;
