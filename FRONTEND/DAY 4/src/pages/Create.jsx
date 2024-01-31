// Create.jsx
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../styles/Createstyle.css';

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [enrolledCourse, setEnrolledCourse] = useState("");

  const history = useNavigate();

  const header = { "Access-Control-Allow-Origin": "*" };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("click");
    if (name && email && phoneNumber && enrolledCourse) {
      axios
        .post("https://64c88e5ca1fe0128fbd5e6f1.mockapi.io/crud-react", {
          name: name,
          email: email,
          phoneNumber: phoneNumber,
          enrolledCourse: enrolledCourse, // Include the new field
        })
        .then((response) => {
          const { id } = response.data;
          localStorage.setItem("id", id);
          localStorage.setItem("name", name);
          localStorage.setItem("email", email);
          localStorage.setItem("phoneNumber", phoneNumber);
          localStorage.setItem("enrolledCourse", enrolledCourse);
          history("/read");
        })
        .catch((error) => {
          console.error("Create Error:", error);
        });
    } else {
      alert("Enter all the values");
    }
  };

  return (
    <>
      <div className="mys-customer-container">
        <div className="d-flex justify-content-between m-2 mys-custom-container">
          <h2>Create</h2>
          <Link to="/read">
            <button type="submit" className="btn mys-custom-btn-primary">
              Show Data
            </button>
          </Link>
        </div>
        <form>
          <div className="mb-3 mys-custom-form-group">
            <label className="form-labels">Name</label>
            <input
              type="text"
              className="mys-form-control" placeholder="Enter the Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3 mys-custom-form-group">
            <label className="form-labels">Email address</label>
            <input
              type="email"
              className="mys-form-control" placeholder="Enter the Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3 mys-custom-form-group">
            <label className="form-labels">Phone Number</label>
            <input
              type="text"
              className="mys-form-control" placeholder="Enter the Phone Number"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <div className="mb-3 mys-custom-form-group">
            <label className="form-labels">Enrolled Course</label>
            <input
              type="text"
              className="mys-form-control" placeholder="Enter the Enrolled Course"
              onChange={(e) => setEnrolledCourse(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn mys-custom-btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;

