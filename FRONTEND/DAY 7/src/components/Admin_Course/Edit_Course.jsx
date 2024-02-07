import React, { useEffect, useState } from "react";
import array from "../Admin_Course/Course_array";
import { Link, useNavigate } from "react-router-dom";
import '../../styles/Course/Add_Course.css';

function Edit() {
    const [courseName, setCourseName] = useState("");
    const [courseDescription, setCourseDescription] = useState("");
    const [courseDuration, setCourseDuration] = useState("");
    const [id, setId] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (courseName === "" || courseDescription === "" || courseDuration === "") {
            alert("Invalid input");
            return;
        }

        const index = array.findIndex(item => item.id === id);
        if (index !== -1) {
            array[index].coursename = courseName;
            array[index].coursedescription = courseDescription;
            array[index].courseduration = courseDuration;
        }

        navigate("/CHome");
    };

    useEffect(() => {
        const storedId = localStorage.getItem("id");
        const storedCourseName = localStorage.getItem("coursename");
        const storedCourseDescription = localStorage.getItem("coursedescription");
        const storedCourseDuration = localStorage.getItem("courseduration");

        setId(storedId);
        setCourseName(storedCourseName);
        setCourseDescription(storedCourseDescription);
        setCourseDuration(storedCourseDuration);
    }, []);

    return (
        <div className="xyzt"> 
        <h1 className="pri">Update Your Details</h1>
        <div className="power-crud-container">
            <form
                className="power-crud-form d-grid gap-2"
                onSubmit={handleSubmit}
            >
                <div className="power-crud-form-group mb-3" controlId="formBasicCourseName">
                    <input
                        value={courseName}
                        onChange={(e) => setCourseName(e.target.value)}
                        type="text"
                        placeholder="Enter Course Name"
                    />
                </div>

                <div className="power-crud-form-group mb-3" controlId="formBasicCourseDescription">
                    <input
                        value={courseDescription}
                        onChange={(e) => setCourseDescription(e.target.value)}
                        type="text"
                        placeholder="Enter Course Description"
                    />
                </div>

                <div className="power-crud-form-group mb-3" controlId="formBasicCourseDuration">
                    <input
                        value={courseDuration}
                        onChange={(e) => setCourseDuration(e.target.value)}
                        type="text"
                        placeholder="Enter Course Duration"
                    />
                </div>

                <button
                    className="power-crud-button primary"
                    type="submit"
                    size="lg"
                >
                    Update
                </button>

                <Link className="power-crud-form-link " to="/CHome">
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
