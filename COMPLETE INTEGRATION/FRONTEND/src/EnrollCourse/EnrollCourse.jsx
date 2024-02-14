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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const token = localStorage.getItem('token');
      console.log(token);
  
    const response =await axios.post("http://localhost:8081/enrollments/",
    formData,{
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
   console.log(response.data);
   if(response.status === 200){
    setShowModal(true);
   }
   else{
    console.error("Registration failed. Response:",response);
   }
  }
  catch(error){
    console.error("Error during registration:",error);
  }
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
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="">Select a course</option>
            <option value="Chess Basics">Chess Basics</option>
            <option value="Advanced Chess Strategies">Advanced Chess Strategies</option>
          </select>
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
