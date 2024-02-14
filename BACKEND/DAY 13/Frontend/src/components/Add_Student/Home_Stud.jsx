// Home.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Home_Stud.css"; // Import your custom CSS file

function Home() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchStudents() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get("http://localhost:8081/students/",{
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        const formattedStudents = response.data.map(student => ({
          ...student,
          studentDOB: new Date(student.studentDOB).toLocaleDateString()
        }));
        setStudents(formattedStudents);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    }
  
    fetchStudents();
  }, []);
  

  const deleteStudent = async (id) => {
    console.log("Deleting student with ID:", id); // Add this line to log the ID
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:8081/students/${id}`,{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      setStudents(students.filter(student => student.studentId !== id)); // Update student.id to student.studentId
    } catch (error) {
      console.error("Error deleting student:", error.response); 
    }
  };

  return (
    <div className="wels">
      <div className="earth-container">
        <div className="enrollment-details">
          <h2>Student Enrollment Details</h2>
        </div>
        <table className="earth-table">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Date of Birth</th>
              <th>Address</th>
              <th>Mobile</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {students.map((student) => (
            <tr key={student.studentId}> {/* Update this line */}
              <td>{student.studentName}</td>
              <td>{new Date(student.studentDOB).toLocaleDateString()}</td>
              <td>{student.studentAddress}</td>
              <td>{student.studentMobile}</td>
              <td>{student.studentAge}</td>
              <td>
                <Link to={`/SEdit/${student.studentId}`}> {/* Update this line */}
                  <button className="earth-update-btn">
                    Update
                  </button>
                </Link>
                <button onClick={() => deleteStudent(student.studentId)} className="earth-delete-btn">
                  Delete
                </button>
              </td>
            </tr>
          ))}
          
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
