// Read.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../styles/ShowRead.css'; // Change the CSS file name

const Read = () => {
  const [data, setData] = useState([]);
  const [inputText, setInputText] = useState("");

  function getData() {
    axios
      .get("https://64c88e5ca1fe0128fbd5e6f1.mockapi.io/crud-react")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  const inputHandler = (e) => {
    setInputText(e.target.value.toLowerCase());
  };

  return (
    <div className="show-pic">
    <div className="attractive-read-container">
      <center><h2>Read</h2></center>
      <div className="search-bar">
        <input
          type="search"
          className="form-control attractive-search-input"
          placeholder="Type here"
          onChange={inputHandler}
        />
      </div>

      <div className="attractive-grid-container">
        {data
          .filter((el) => {
            const lowerCaseName = el.cousename ? el.cousename.toLowerCase() : "";
            const lowerCaseDescription = el.coursedescription ? el.coursedescription.toLowerCase() : "";
            const lowerCaseDuration = el.courseduration ? el.courseduration.toLowerCase() : "";

            return (
              lowerCaseName.includes(inputText) ||
              lowerCaseDescription.includes(inputText) ||
              lowerCaseDuration.includes(inputText)
            );
          })
          .map((eachData) => (
            <div key={eachData.id} className="attractive-grid-item">
              <p>Course Name: {eachData.cousename}</p>
              <p>Course Description: {eachData.coursedescription}</p>
              <p>Course Duration: {eachData.courseduration}</p>
              <div className="action-buttons">
                <Link to="/EnrollCourse">
                  <button className="btn enroll-btn">
                    Enroll
                  </button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
    </div>
  );
};

export default Read;
