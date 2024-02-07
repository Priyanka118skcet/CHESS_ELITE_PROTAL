import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function IHome() {
  const [institutes, setInstitutes] = useState([]); // State for storing institute data
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchInstitutes() {
      try {
        const response = await axios.get("http://localhost:8081/institutes/");
        setInstitutes(response.data);
      } catch (error) {
        console.error("Error fetching institutes:", error);
      }
    }

    fetchInstitutes();
  }, []);

  const deleteInstitute = async (instituteId) => {
    console.log("Deleting institute with ID:", instituteId);
    try {
      await axios.delete(`http://localhost:8081/institutes/${instituteId}`);
      setInstitutes(institutes.filter((institute) => institute.instituteId !== instituteId));
    } catch (error) {
      console.error("Error deleting institute:", error.response);
    }
  };

  // Filter the institutes based on the search query
  const filteredInstitutes = institutes.filter((institute) =>
    institute && institute.instituteName && institute.instituteName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="design">
      <div className="sun-container">
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search by Institute Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="sun-search-bar"
        />

        <div className="sun-records">
          {/* Render each record */}
          {filteredInstitutes.map((institute) => (
            <div key={institute.instituteId} className="sun-record">
              <div className="sun-record-content">
                {/* Display institute details */}
                <div><strong>Institute Name:</strong> {institute.instituteName}</div>
                <div><strong>Description:</strong> {institute.instituteDescription}</div>
                <div><strong>Address:</strong> {institute.instituteAddress}</div>
                <div><strong>Email:</strong> {institute.instituteEmail}</div>
                <div><strong>Mobile:</strong> {institute.instituteMobile}</div>
                <div>
                  <Link to={`/IEdit/${institute.instituteId}`}>
                    <button className="sun-update-btn">
                      Update
                    </button>
                  </Link>
                  <button onClick={() => deleteInstitute(institute.instituteId)} className="sun-delete-btn">
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

export default IHome;
