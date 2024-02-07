import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/EnrollDisplay.css"; // Import your custom CSS file

function HomeEnrollCourse() {
  const [enrollments, setEnrollments] = useState([]); // State for storing enrollment data

  useEffect(() => {
    async function fetchEnrollments() {
      try {
        const response = await axios.get("http://localhost:8081/enrollments/");
        setEnrollments(response.data);
      } catch (error) {
        console.error("Error fetching enrollments:", error);
      }
    }

    fetchEnrollments();
  }, []);

  const deleteEnrollment = async (courseId) => {
    console.log("Deleting enrollment with ID:", courseId);
    try {
      await axios.delete(`http://localhost:8081/enrollments/${courseId}`);
      setEnrollments(enrollments.filter(enrollment => enrollment.courseId !== courseId));
    } catch (error) {
      console.error("Error deleting enrollment:", error.response);
    }
  };

  return (
    <div className="likes">
    <br/><br/>
      <center><h1 className="he1s">Enrollments</h1></center>
      <br/><br/><br/><br/>
      <div className="stars-container">
        <div className="stars-records">
          {/* Render each enrollment */}
          {enrollments.map((enrollment) => (
            <div key={enrollment.courseId} className="stars-record"> 
              <div className="stars-record-content">
                <div><strong>Name:</strong> {enrollment.name}</div> 
                <div><strong>Email:</strong> {enrollment.email}</div> 
                <div><strong>Course:</strong> {enrollment.course}</div> 
                <div><strong>Preferred Class Time:</strong> {enrollment.preferredClassTime}</div> 
                <br/>
                <div>
                  <button onClick={() => deleteEnrollment(enrollment.courseId)} className="stars-delete-btn"> 
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeEnrollCourse;
