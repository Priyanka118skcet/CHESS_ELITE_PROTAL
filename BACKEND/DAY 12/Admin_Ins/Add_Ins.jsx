import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import '../../styles/Institude/Add_Ins.css';

function ICreate() {
  const [institudeName, setInstitudeName] = useState("");
  const [institudeDescription, setInstitudeDescription] = useState("");
  const [institudeAddress, setInstitudeAddress] = useState("");
  const [institudeEmail, setInstitudeEmail] = useState("");
  const [institudeMobile, setInstitudeMobile] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      institudeName === "" ||
      institudeDescription === "" ||
      institudeAddress === "" ||
      institudeEmail === "" ||
      institudeMobile === ""
    ) {
      alert("Invalid input");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8081/institutes/", {
        instituteName: institudeName,
        instituteDescription: institudeDescription,
        instituteAddress: institudeAddress,
        instituteEmail: institudeEmail,
        instituteMobile: institudeMobile,
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
        <div className="moon-form-group" controlId="formBasicInstitudeName">
          <input
            onChange={(e) => setInstitudeName(e.target.value)}
            type="text"
            placeholder="Enter Celestial Institute Name"
            required
          />
        </div>

        <div className="moon-form-group" controlId="formBasicInstitudeDescription">
          <input
            onChange={(e) => setInstitudeDescription(e.target.value)}
            type="text"
            placeholder="Enter Celestial Institute Description"
            required
          />
        </div>

        <div className="moon-form-group" controlId="formBasicInstitudeAddress">
          <input
            onChange={(e) => setInstitudeAddress(e.target.value)}
            type="text"
            placeholder="Enter Celestial Institute Address"
            required
          />
        </div>

        <div className="moon-form-group" controlId="formBasicInstitudeEmail">
          <input
            onChange={(e) => setInstitudeEmail(e.target.value)}
            type="email"
            placeholder="Enter Celestial Institute Email"
            required
          />
        </div>

        <div className="moon-form-group" controlId="formBasicInstitudeMobile">
          <input
            onChange={(e) => setInstitudeMobile(e.target.value)}
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
