import React, { useState } from "react";
import array from "../Admin_Course/Course_array";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Course/Add_Course.css"; // Import your custom CSS file

function Create() {
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseDuration, setCourseDuration] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (courseName === "" || courseDescription === "" || courseDuration === "") {
      alert("Invalid input");
      return;
    }

    const id = uuid().slice(0, 8);
    array.push({ id, coursename: courseName, coursedescription: courseDescription, courseduration: courseDuration });

    navigate("/CHome");
  };

  return (
    <div className="xyzt">
   <h1 className="pri">Course Creation </h1>
    <div className="power-crud-container"> 
      <form className="power-crud-form" >
        <div className="power-crud-form-group" controlId="formBasicCourseName">
          <input
            onChange={(e) => setCourseName(e.target.value)}
            type="text"
            placeholder="Enter Course Name"
            required
          />
        </div>

        <div className="power-crud-form-group" controlId="formBasicCourseDescription">
          <input
            onChange={(e) => setCourseDescription(e.target.value)}
            type="text"
            placeholder="Enter Course Description"
            required
          />
        </div>

        <div className="power-crud-form-group" controlId="formBasicCourseDuration">
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
