// Create.jsx
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../styles/ECreateStyle.css'; // Change the CSS file name

const Create = () => {
  const [cousename, setCousename] = useState(""); // Updated state variable
  const [coursedescription, setCoursedescription] = useState(""); // Updated state variable
  const [courseduration, setCourseduration] = useState(""); // Updated state variable

  const history = useNavigate();

  const header = { "Access-Control-Allow-Origin": "*" };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("click");
    if (cousename && coursedescription && courseduration) {
      axios
        .post("https://64c88e5ca1fe0128fbd5e6f1.mockapi.io/crud-react", {
          cousename: cousename, // Updated field name
          coursedescription: coursedescription, // Updated field name
          courseduration: courseduration, // Updated field name
        })
        .then((response) => {
          const { id } = response.data;
          localStorage.setItem("id", id);
          localStorage.setItem("cousename", cousename); // Updated field name
          localStorage.setItem("coursedescription", coursedescription); // Updated field name
          localStorage.setItem("courseduration", courseduration); // Updated field name
          history("/ERead");
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
      <div className="beautiful-customer-container">
        <div className="d-flex justify-content-between m-2 beautiful-custom-container">
          <h2>Create</h2>
          <Link to="/ERead">
            <button type="submit" className="btn beautiful-custom-btn-primary">
              Show Data
            </button>
          </Link>
        </div>
        <form>
          <div className="mb-3 beautiful-custom-form-group">
            <label className="beautiful-form-labels">Course Name</label>
            <input
              type="text"
              className="beautiful-form-control" placeholder="Enter the Course Name"
              onChange={(e) => setCousename(e.target.value)}
            />
          </div>

          <div className="mb-3 beautiful-custom-form-group">
            <label className="beautiful-form-labels">Course Description</label>
            <input
              type="text"
              className="beautiful-form-control" placeholder="Enter the Course Description"
              onChange={(e) => setCoursedescription(e.target.value)}
            />
          </div>

          <div className="mb-3 beautiful-custom-form-group">
            <label className="beautiful-form-labels">Course Duration</label>
            <input
              type="text"
              className="beautiful-form-control" placeholder="Enter the Course Duration"
              onChange={(e) => setCourseduration(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn beautiful-custom-btn-primary"
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
