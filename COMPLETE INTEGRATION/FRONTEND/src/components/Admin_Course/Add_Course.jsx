import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Course/Add_Course.css";

function Create() {
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseDuration, setCourseDuration] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (courseName === "" || courseDescription === "" || courseDuration === "") {
      alert("Invalid input");
      return;
    }
  
    try {
      const token = localStorage.getItem('token');
      console.log(token);
      if (!token) {
        throw new Error("No token found. User may not be authenticated.");
      }

      const response = await axios.post("http://localhost:8081/courses/", {
        courseName,
        courseDescription,
        courseDuration,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      console.log(response.data);
      navigate("/CHome");
    } catch (error) {
      console.error("Error creating course:", error);
      if (error.response) {
        console.error("Server responded with:", error.response.status);
      }
    }
  };

  return (
    <div className="xyzt">
      <h1 className="pri">Course Creation</h1>
      <div className="power-crud-container"> 
        <form className="power-crud-form">
          <div className="power-crud-form-group">
            <input
              onChange={(e) => setCourseName(e.target.value)}
              type="text"
              placeholder="Enter Course Name"
              required
            />
          </div>

          <div className="power-crud-form-group">
            <input
              onChange={(e) => setCourseDescription(e.target.value)}
              type="text"
              placeholder="Enter Course Description"
              required
            />
          </div>

          <div className="power-crud-form-group">
            <input
              onChange={(e) => setCourseDuration(e.target.value)}
              type="text"
              placeholder="Enter Course Duration"
              required
            />
          </div>

          <button
            onClick={(e) => handleSubmit(e)}
            className="power-crud-button primary"
            type="submit"
          >
            Submit
          </button>
          <br />
          <Link className="power-crud-form-link" to="/CHome">
            <button className="power-crud-button info" size="lg">
              Home
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Create;
