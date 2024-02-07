import React, { useState } from "react";
import axios from "axios";
import SuccessModal from "./SuccessModal"; // Import the modal component
import '../styles/EnrollCourse.css';

const SuperRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    email: "",
    preferredClassTime: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // API endpoint (replace with your actual endpoint)
    const apiUrl = "http://localhost:8081/enrollments/";

    // Make a POST request to the server
    axios.post(apiUrl, formData)
      .then(response => {
        console.log("Form submitted successfully:", response.data);
        setShowModal(true); // Show the modal on successful submission
        // Handle any additional logic or redirect the user
      })
      .catch(error => {
        console.error("Error submitting form:", error);
        // Handle errors or show an error message to the user
      });
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
            <label htmlFor="preferredClassTime">Preferred Class Time</label>
            <input
              type="text"
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
