import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import '../../styles/Institude/Add_Ins.css';

function ICreate() {
  const [image, setImage] = useState("");
  const [instituteName, setInstituteName] = useState("");
  const [instituteDescription, setInstituteDescription] = useState("");
  const [instituteAddress, setInstituteAddress] = useState("");
  const [instituteEmail, setInstituteEmail] = useState("");
  const [instituteMobile, setInstituteMobile] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      instituteName === "" ||
      instituteDescription === "" ||
      instituteAddress === "" ||
      instituteEmail === "" ||
      instituteMobile === ""||
      image === ""
    ) {
      alert("Invalid input");
      return;
    }

    try {
      const token = localStorage.getItem('token');
      console.log(token);
      const response = await axios.post("http://localhost:8081/institutes/", {
        instituteName,
        instituteDescription,
        instituteAddress,
        instituteEmail,
        instituteMobile,
        image,
      },{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      console.log(response.data); // log response for debugging
      navigate("/IHome");
    } catch (error) {
      console.error("Error creating institute:", error);
    }
  };

  return (
    <div className="moonpic">
      <form className="moon-form" onSubmit={handleSubmit}>
        
      <div className="moon-form-group" >
          <input
            onChange={(e) => setImage(e.target.value)}
            type="text"
            placeholder="Enter Image Url"
            required
          />
        </div>
     

        <div className="moon-form-group" >
          <input
            onChange={(e) => setInstituteName(e.target.value)}
            type="text"
            placeholder="Enter Celestial Institute Name"
            required
          />
        </div>

        <div className="moon-form-group" >
          <input
            onChange={(e) => setInstituteDescription(e.target.value)}
            type="text"
            placeholder="Enter Celestial Institute Description"
            required
          />
        </div>

        <div className="moon-form-group" >
          <input
            onChange={(e) => setInstituteAddress(e.target.value)}
            type="text"
            placeholder="Enter Celestial Institute Address"
            required
          />
        </div>

        <div className="moon-form-group" >
          <input
            onChange={(e) => setInstituteEmail(e.target.value)}
            type="email"
            placeholder="Enter Celestial Institute Email"
            required
          />
        </div>

        <div className="moon-form-group" >
          <input
            onChange={(e) => setInstituteMobile(e.target.value)}
            type="tel"
            placeholder="Enter Celestial Institute Mobile"
            required
          />
        </div>

        <button className="moon-button primary" type="submit">
          Submit
        </button>
        <br/><br/>
        <Link className="moon-form-link" to="/IHome">
          <button className="moon-button info" size="lg">
            Home
          </button>
        </Link>
      </form>
    </div>
  );
}

export default ICreate;
