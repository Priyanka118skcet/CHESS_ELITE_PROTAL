// Read.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../styles/Readstyle.css';

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

  function handleDelete(id) {
    axios
      .delete(`https://64c88e5ca1fe0128fbd5e6f1.mockapi.io/crud-react/${id}`)
      .then(() => {
        getData(); // Refresh data after successful delete
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  const inputHandler = (e) => {
    setInputText(e.target.value.toLowerCase());
  };

  return (
    <div className="cia">
      <div className="mys-custom-container">
        <center><h2>Read</h2></center>
        <div className="mb-3 texts-center">
          <input
            type="search"
            className="form-control mys-search-input"
            placeholder="Type here"
            onChange={inputHandler}
          />
        </div>

        <div className="record-container">
          {data
            .filter((el) => {
              const lowerCaseInstituteName = el.institudename ? el.institudename.toLowerCase() : "";
              const lowerCaseDescription = el.institudedescription ? el.institudedescription.toLowerCase() : "";
              const lowerCaseAddress = el.institudeaddress ? el.institudeaddress.toLowerCase() : "";
              const lowerCaseEmail = el.institudeemail ? el.institudeemail.toLowerCase() : "";
              const lowerCaseMobile = el.institudemobile ? el.institudemobile.toLowerCase() : "";

              return (
                lowerCaseInstituteName.includes(inputText) ||
                lowerCaseDescription.includes(inputText) ||
                lowerCaseAddress.includes(inputText) ||
                lowerCaseEmail.includes(inputText) ||
                lowerCaseMobile.includes(inputText)
              );
            })
            .map((eachData) => (
              <div key={eachData.id} className="record-box">
                <img src="https://via.placeholder.com/150" alt="Institute Image" className="record-image" />
                <div className="details-section">
                  <h3>Details</h3>
                  <p>Institute Name: {eachData.institudename}</p>
                  <p>Institute Description: {eachData.institudedescription}</p>
                  <p>Institute Address: {eachData.institudeaddress}</p>
                  <p>Institute Email: {eachData.institudeemail}</p>
                  <p>Institute Mobile: {eachData.institudemobile}</p>
                </div>
                <div className="buttons-container">
                  <Link to={`/update/${eachData.id}`}>
                    <button className="btn btns-success my-edit-btn">
                      Edit
                    </button>
                  </Link>
                  <button
                    className="btn btn-danger mys-delete-btn"
                    onClick={() => handleDelete(eachData.id)} // Pass id to handleDelete
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Read;
