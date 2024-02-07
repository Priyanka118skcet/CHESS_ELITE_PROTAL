import React, { useState } from "react";
import array from "../Admin_Course/Course_array";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Course/Home_Course.css"; // Import your custom CSS file

function Home() {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const navigate = useNavigate();

  function setID(id, name, description, duration) {
    localStorage.setItem("id", id);
    localStorage.setItem("coursename", name);
    localStorage.setItem("coursedescription", description);
    localStorage.setItem("courseduration", duration);
  }

  function deleted(id) {
    let index = array.findIndex((item) => item.id === id);

    if (index !== -1) {
      array.splice(index, 1);
    }

    navigate("/CHome");
  }

  // Filter the array based on the search query
  const filteredArray = array.filter(item =>
    item.coursename.toLowerCase().includes(searchQuery.toLowerCase())
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
        {/* Render each record */}
        {filteredArray.map((item) => (
          <div key={item.id} className="star-record">
            <div className="star-record-content">
              <div><strong>Course Name:</strong> {item.coursename}</div>
              <div><strong>Description:</strong> {item.coursedescription}</div>
              <div><strong>Duration:</strong> {item.courseduration}</div>
              <div>
                <Link to="/CEdit">
                  <button
                    onClick={() => setID(item.id, item.coursename, item.coursedescription, item.courseduration)}
                    className="star-update-btn"
                  >
                    Update
                  </button>
                </Link>
                <button onClick={() => deleted(item.id)} className="star-delete-btn">
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
