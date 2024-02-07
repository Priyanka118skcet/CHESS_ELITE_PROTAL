// Home_Course.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Course/Home_Course.css"; // Import your custom CSS file

function Home() {
  const [courses, setCourses] = useState([]); // State for storing course data
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await axios.get("http://localhost:8081/courses/");
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    }

    fetchCourses();
  }, []);

  const deleteCourse = async (courseId) => { // Updated argument name to courseId
    console.log("Deleting course with ID:", courseId); // Updated log message
    try {
      await axios.delete(`http://localhost:8081/courses/${courseId}`); // Updated endpoint
      setCourses(courses.filter(course => course.courseId !== courseId)); // Updated filtering
    } catch (error) {
      console.error("Error deleting course:", error.response);
    }
  };

  // Filter the courses based on the search query
  const filteredCourses = courses.filter(course =>
    course && course.courseName && course.courseName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="like">
      <center><h1 className="he1">The Most Popular Courses</h1></center>
      <div className="star-container">
        <input
          type="text"
          placeholder="Search by Course Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="star-search-bar"
        />

        <Link className="star-create-link" to="/CCreate">
          <button className="star-create-btn" size="lg">
            Create
          </button>
        </Link>

        <div className="star-records">
          {/* Render each course */}
          {filteredCourses.map((course) => (
            <div key={course.courseId} className="star-record"> 
              <div className="star-record-content">
                <div><strong>Course Name:</strong> {course.courseName}</div> 
                <div><strong>Description:</strong> {course.courseDescription}</div> 
                <div><strong>Duration:</strong> {course.courseDuration}</div> 
                <div>
                  <Link to={`/CEdit/${course.courseId}`}> 
                    <button className="star-update-btn">
                      Update
                    </button>
                  </Link>
                  <button onClick={() => deleteCourse(course.courseId)} className="star-delete-btn"> 
                    Delete
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

export default Home;
