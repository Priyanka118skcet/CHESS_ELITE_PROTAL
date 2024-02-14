import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Add_Stud.css"; // Import your custom CSS file

function Create() {
  const [studentName, setStudentName] = useState("");
  const [studentDOB, setStudentDOB] = useState("");
  const [studentAddress, setStudentAddress] = useState("");
  const [studentMobile, setStudentMobile] = useState("");
  const [studentAge, setStudentAge] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      studentName === "" ||
      studentDOB === "" ||
      studentAddress === "" ||
      studentMobile === "" ||
      studentAge === ""
    ) {
      alert("Invalid input");
      return;
    }

    try {
      const token = localStorage.getItem('token');
      console.log(token);
      if (!token) {
        throw new Error("No token found. User may not be authenticated.");
      }

      const response = await axios.post("http://localhost:8081/students/", {
        studentName,
        studentDOB,
        studentAddress,
        studentMobile,
        studentAge,
      },{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      
      console.log(response.data); // log response for debugging
      navigate("/SHome");
    } catch (error) {
      console.error("Error creating student:", error);
    }
  };

  // Function to format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className="stude">
      <form className="crud-form">
        <div className="crud-form-group" controlId="formBasicStudentName">
          <input
            onChange={(e) => setStudentName(e.target.value)}
            type="text"
            placeholder="Enter Student Name"
            required
          />
        </div>

        <div className="crud-form-group" controlId="formBasicStudentDOB">
          <input
            onChange={(e) => setStudentDOB(e.target.value)}
            type="date"
            placeholder="Enter Student Date of Birth"
            required
            value={studentDOB} // Display only the date part
          />
        </div>

        <div className="crud-form-group" controlId="formBasicStudentAddress">
          <input
            onChange={(e) => setStudentAddress(e.target.value)}
            type="text"
            placeholder="Enter Address"
            required
          />
        </div>

        <div className="crud-form-group" controlId="formBasicStudentMobile">
          <input
            onChange={(e) => setStudentMobile(e.target.value)}
            type="tel"
            placeholder="Enter Mobile"
            required
          />
        </div>

        <div className="crud-form-group" controlId="formBasicStudentAge">
          <input
            onChange={(e) => setStudentAge(e.target.value)}
            type="number"
            placeholder="Enter Age"
            required
          />
        </div>

        <button
          onClick={(e) => handleSubmit(e)}
          className="crud-button primary"
          type="submit"
        >
          Submit
        </button>
        <br /> <br />
        <Link className="crud-form-link" to="/SHome">
          <button className="crud-button info" size="lg">
            Home
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Create;
