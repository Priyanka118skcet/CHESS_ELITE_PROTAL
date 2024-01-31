import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../styles/Createstyle.css';

const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [enrolledCourse, setEnrolledCourse] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const storedId = localStorage.getItem("id");
    const storedName = localStorage.getItem("name");
    const storedEmail = localStorage.getItem("email");
    const storedPhoneNumber = localStorage.getItem("phoneNumber");
    const storedEnrolledCourse = localStorage.getItem("enrolledCourse");

    setId(storedId);
    setName(storedName);
    setEmail(storedEmail);
    setPhoneNumber(storedPhoneNumber || "");
    setEnrolledCourse(storedEnrolledCourse || "");
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`https://64c88e5ca1fe0128fbd5e6f1.mockapi.io/crud-react/${id}`, {
        name,
        email,
        phoneNumber,
        enrolledCourse,
      });

      navigate("/read");
    } catch (error) {
      console.error("Update Error:", error);
    }
  };

  return (
    <>
    <div className="mys-customer-container">
        <div className="d-flex justify-content-between m-2 mys-custom-container">
      <center><h2>Update</h2></center>
      </div>
      <form>
        <div className="mb-3 mys-custom-form-group">
          <label className="form-labels">Name</label>
          <input
            type="text"
            className="mys-form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3 mys-custom-form-group">
          <label className="form-labels">Email address</label>
          <input
            type="email"
            className="mys-form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Additional fields */}
        <div className="mb-3 mys-custom-form-group">
          <label className="form-labels">Phone Number</label>
          <input
            type="text"
            className="mys-form-control"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        <div className="mb-3 mys-custom-form-group">
          <label className="form-labels">Enrolled Course</label>
          <input
            type="text"
            className="mys-form-control"
            value={enrolledCourse}
            onChange={(e) => setEnrolledCourse(e.target.value)}
          />
        </div>
       
        <div class="button-container">
        <button
          type="submit"
          className="custom-btn custom-btn-primary"
          onClick={handleUpdate}
        >
          Update
        </button>
        <Link to="/read">
          <button className="custom-btn custom-btn-secondary mx-2">Back</button>
        </Link>
        </div>
      </form>
      </div>
    </>
  );
};

export default Update;
