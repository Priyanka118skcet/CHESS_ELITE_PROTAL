// Update.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import '../styles/Updatestyle.css';

const Update = () => {
  const { id } = useParams();
  const [recordDetails, setRecordDetails] = useState({});
  const [institudename, setInstitudename] = useState("");
  const [institudedescription, setInstitudedescription] = useState("");
  const [institudeaddress, setInstitudeaddress] = useState("");
  const [institudeemail, setInstitudeemail] = useState("");
  const [institudemobile, setInstitudemobile] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchRecordDetails = async () => {
      try {
        const response = await axios.get(`https://64c88e5ca1fe0128fbd5e6f1.mockapi.io/crud-react/${id}`);
        setRecordDetails(response.data);
        setInstitudename(response.data.institudename);
        setInstitudedescription(response.data.institudedescription);
        setInstitudeaddress(response.data.institudeaddress || "");
        setInstitudeemail(response.data.institudeemail || "");
        setInstitudemobile(response.data.institudemobile || "");
      } catch (error) {
        console.error("Error fetching record details:", error);
      }
    };

    fetchRecordDetails();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`https://64c88e5ca1fe0128fbd5e6f1.mockapi.io/crud-react/${id}`, {
        institudename,
        institudedescription,
        institudeaddress,
        institudeemail,
        institudemobile,
      });

      setShowPopup(true);

      console.log("Record updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating record:", error);
    }
  };

  return (
    <div className="exam">
    <div className="mys-customer-container">
      <div className="d-flex justify-content-between m-2 mys-custom-container">
        <h2 className="create">Update Record</h2>
        <Link to="/read">
          <button type="submit" className="btn mys-custom-btn-primary">
            Back to Read
          </button>
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 mys-custom-form-group">
          <label className="form-labels">Institute Name</label>
          <input type="text" className="mys-form-control" value={institudename} onChange={(e) => setInstitudename(e.target.value)} />
        </div>
        <div className="mb-3 mys-custom-form-group">
          <label className="form-labels">Institute Description</label>
          <input type="text" className="mys-form-control" value={institudedescription} onChange={(e) => setInstitudedescription(e.target.value)} />
        </div>
        <div className="mb-3 mys-custom-form-group">
          <label className="form-labels">Institute Address</label>
          <input type="text" className="mys-form-control" value={institudeaddress} onChange={(e) => setInstitudeaddress(e.target.value)} />
        </div>
        <div className="mb-3 mys-custom-form-group">
          <label className="form-labels">Institute Email</label>
          <input type="email" className="mys-form-control" value={institudeemail} onChange={(e) => setInstitudeemail(e.target.value)} />
        </div>
        <div className="mb-3 mys-custom-form-group">
          <label className="form-labels">Institute Mobile</label>
          <input type="text" className="mys-form-control" value={institudemobile} onChange={(e) => setInstitudemobile(e.target.value)} />
        </div>
        <button type="submit" className="btn mys-custom-btn-primary">
          Update
        </button>
      </form>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={() => setShowPopup(false)}>&times;</span>
            <p>Record for {institudename} updated successfully!</p>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Update;
