import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../../styles/Course/Edit_Course.css";

function Edit() {
    const { id } = useParams();
    const [courseName, setCourseName] = useState("");
    const [courseDescription, setCourseDescription] = useState("");
    const [courseDuration, setCourseDuration] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem('token');
            
            if (!token) {
              throw new Error("No token found. User may not be authenticated.");
            }

            const response = await axios.put(`http://localhost:8081/courses/${id}`, {
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
            console.error("Error updating course:", error);
            if (error.response) {
              console.error("Server responded with:", error.response.status);
            }
        }
    };

    useEffect(() => {
        const fetchCourseData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`http://localhost:8081/courses/${id}`,{
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });
                const { courseName, courseDescription, courseDuration } = response.data;
                setCourseName(courseName);
                setCourseDescription(courseDescription);
                setCourseDuration(courseDuration);
            } catch (error) {
                console.error("Error fetching course data:", error);
            }
        };

        fetchCourseData();
    }, [id]);

    return (
        <div className="xyzt">
            <h1 className="pri">Update Course Details</h1>
            <div className="power-crud-container"> 
                <form className="power-crud-form" onSubmit={handleSubmit}>
                    <div className="power-crud-form-group" controlId="formBasicCourseName">
                        <input
                            value={courseName}
                            onChange={(e) => setCourseName(e.target.value)}
                            type="text"
                            placeholder="Enter Course Name"
                            required
                        />
                    </div>

                    <div className="power-crud-form-group" controlId="formBasicCourseDescription">
                        <input
                            value={courseDescription}
                            onChange={(e) => setCourseDescription(e.target.value)}
                            type="text"
                            placeholder="Enter Course Description"
                            required
                        />
                    </div>

                    <div className="power-crud-form-group" controlId="formBasicCourseDuration">
                        <input
                            value={courseDuration}
                            onChange={(e) => setCourseDuration(e.target.value)}
                            type="text"
                            placeholder="Enter Course Duration"
                            required
                        />
                    </div>

                    <button
                        className="power-crud-button primary"
                        type="submit"
                    >
                        Update
                    </button>

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

export default Edit;
