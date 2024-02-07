// Create.jsx
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../styles/Createstyle.css';

const Create = () => {
  const [institudename, setInstitudename] = useState("");
  const [institudedescription, setInstitudedescription] = useState("");
  const [institudeaddress, setInstitudeaddress] = useState("");
  const [institudeemail, setInstitudeemail] = useState("");
  const [institudemobile, setInstitudemobile] = useState("");

  const [successMessage, setSuccessMessage] = useState(null);

  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (institudename && institudedescription && institudeaddress && institudeemail && institudemobile) {
      axios
        .post("https://64c88e5ca1fe0128fbd5e6f1.mockapi.io/crud-react", {
          id: institudename.toLowerCase(),
          institudename: institudename,
          institudedescription: institudedescription,
          institudeaddress: institudeaddress,
          institudeemail: institudeemail,
          institudemobile: institudemobile,
        })
        .then((response) => {
          const uploadedInstitutionName = response.data.institudename;

          setSuccessMessage(`Institution "${uploadedInstitutionName}" uploaded successfully!`);

          setTimeout(() => {
            setSuccessMessage(null);
          }, 3000);
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
    <div className="exam"> 
      <div className="mys-customer-container">
        <div className="d-flex justify-content-between m-2 mys-custom-container">
          <h2 className="create">Create</h2>
          <Link to="/read">
            <button type="submit" className="btn mys-custom-btn-primary">
              Show Data
            </button>
          </Link>
        </div>

        {successMessage && (
          <div className="alert alert-success" role="alert">
            {successMessage}
          </div>
        )}

        <form>
          <div className="mb-3 mys-custom-form-group">
            <label className="form-labels">Institute Name</label>
            <input
              type="text"
              className="mys-form-control"
              placeholder="Enter the Institute Name"
              onChange={(e) => setInstitudename(e.target.value)}
            />
          </div>

          <div className="mb-3 mys-custom-form-group">
            <label className="form-labels">Institute Description</label>
            <input
              type="text"
              className="mys-form-control"
              placeholder="Enter the Institute Description"
              onChange={(e) => setInstitudedescription(e.target.value)}
            />
          </div>

          <div className="mb-3 mys-custom-form-group">
            <label className="form-labels">Institute Address</label>
            <input
              type="text"
              className="mys-form-control"
              placeholder="Enter the Institute Address"
              onChange={(e) => setInstitudeaddress(e.target.value)}
            />
          </div>

          <div className="mb-3 mys-custom-form-group">
            <label className="form-labels">Institute Email</label>
            <input
              type="text"
              className="mys-form-control"
              placeholder="Enter the Institute Email"
              onChange={(e) => setInstitudeemail(e.target.value)}
            />
          </div>

          <div className="mb-3 mys-custom-form-group">
            <label className="form-labels">Institute Mobile</label>
            <input
              type="text"
              className="mys-form-control"
              placeholder="Enter the Institute Mobile"
              onChange={(e) => setInstitudemobile(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn mys-custom-btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
      </div>
    </>
  );
};

export default Create;
