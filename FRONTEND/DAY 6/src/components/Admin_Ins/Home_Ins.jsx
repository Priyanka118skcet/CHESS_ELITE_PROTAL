import React, { useState } from "react";
import Iarray from "../Admin_Ins/Ins_array";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Institude/Stude_Home.css"; // Import your custom CSS file


function IHome() {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const navigate = useNavigate();

  function setID(id, name, description, address, email, mobile) {
    localStorage.setItem("id", id);
    localStorage.setItem("institudename", name);
    localStorage.setItem("institudedescription", description);
    localStorage.setItem("institudeaddress", address);
    localStorage.setItem("institudeemail", email);
    localStorage.setItem("institudemobile", mobile);
  }

  function deleted(id) {
    let index = Iarray.findIndex((item) => item.id === id);

    if (index !== -1) {
      Iarray.splice(index, 1);
    }

    navigate("/IHome");
  }

  // Filter the array based on the search query
  const filteredArray = Iarray.filter(item =>
    item.institudename.toLowerCase().includes(searchQuery.toLowerCase())
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
        {filteredArray.map((item) => (
          <div key={item.id} className="sun-record">
            <div className="sun-record-content">
              {/* Display uploaded image */}
              <div><img src={item.image} alt="Institute" className="sun-image" /></div>
              <div><strong>Institute Name:</strong> {item.institudename}</div>
              <div><strong>Description:</strong> {item.institudedescription}</div>
              <div><strong>Address:</strong> {item.institudeaddress}</div>
              <div><strong>Email:</strong> {item.institudeemail}</div>
              <div><strong>Mobile:</strong> {item.institudemobile}</div>
              <div>
                <Link to="/IEdit">
                  <button
                    onClick={() => setID(item.id, item.institudename, item.institudedescription, item.institudeaddress, item.institudeemail, item.institudemobile)}
                    className="sun-update-btn"
                  >
                    Update
                  </button>
                </Link>
                <button onClick={() => deleted(item.id)} className="sun-delete-btn">
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
