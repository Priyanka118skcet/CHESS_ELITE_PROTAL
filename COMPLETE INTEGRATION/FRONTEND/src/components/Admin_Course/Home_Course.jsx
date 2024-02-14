import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Course/Home_Course.css";

function Home() {
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCourses() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get("http://localhost:8081/courses/",{
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    }

    fetchCourses();
  }, []);

  const deleteCourse = async (courseId) => {
    console.log("Deleting course with ID:", courseId);
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:8081/courses/${courseId}`,{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }); 
      setCourses(courses.filter(course => course.courseId !== courseId));
    } catch (error) {
      console.error("Error deleting course:", error.response);
    }
  };

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
