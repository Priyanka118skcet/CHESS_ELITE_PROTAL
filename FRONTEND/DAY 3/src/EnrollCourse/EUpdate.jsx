// Update.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import '../styles/ECreatestyle.css';
const Update = () => {
  const { id } = useParams();
  const [recordDetails, setRecordDetails] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [enrolledCourse, setEnrolledCourse] = useState("");

  useEffect(() => {
    const fetchRecordDetails = async () => {
      try {
        const response = await axios.get(`https://64c88e5ca1fe0128fbd5e6f1.mockapi.io/crud-react/${id}`);
        setRecordDetails(response.data);
        setName(response.data.name);
        setEmail(response.data.email);
        setPhoneNumber(response.data.phoneNumber || ""); // Set to empty string if null
        setEnrolledCourse(response.data.enrolledCourse || ""); // Set to empty string if null
      } catch (error) {
        console.error("Error fetching record details:", error);
      }
    };

    fetchRecordDetails();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`https://64c88e5ca1fe0128fbd5e6f1.mockapi.io/crud-react/${id}`, {
        name,
        email,
        phoneNumber,
        enrolledCourse,
      });

      console.log("Record updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating record:", error);
    }
  };

  return (
    <div className="mys-customer-container">
      <div className="d-flex justify-content-between m-2 mys-custom-container">
        <h2>Update Record</h2>
        <Link to="/ERead">
          <button type="submit" className="btn mys-custom-btn-primary">
            Back to Read
          </button>
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 mys-custom-form-group">
          <label className="form-labels">Name</label>
          <input type="text" className="mys-form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3 mys-custom-form-group">
          <label className="form-labels">Email</label>
          <input type="email" className="mys-form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3 mys-custom-form-group">
          <label className="form-labels">Phone Number</label>
          <input type="text" className="mys-form-control" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
        <div className="mb-3 mys-custom-form-group">
          <label className="form-labels">Enrolled Course</label>
          <input type="text" className="mys-form-control" value={enrolledCourse} onChange={(e) => setEnrolledCourse(e.target.value)} />
        </div>
        <button type="submit" className="btn mys-custom-btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
