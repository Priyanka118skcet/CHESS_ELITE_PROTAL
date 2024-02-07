import React, { useState } from "react";
import Iarray from "../Admin_Ins/Ins_array";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Institude/Add_Ins.css";

function ICreate() {
  const [institudeName, setInstitudeName] = useState("");
  const [institudeDescription, setInstitudeDescription] = useState("");
  const [institudeAddress, setInstitudeAddress] = useState("");
  const [institudeEmail, setInstitudeEmail] = useState("");
  const [institudeMobile, setInstitudeMobile] = useState("");
  const [image, setImage] = useState(null); // New state for image
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      institudeName === "" ||
      institudeDescription === "" ||
      institudeAddress === "" ||
      institudeEmail === "" ||
      institudeMobile === "" ||
      image === null
    ) {
      alert("Invalid input");
      return;
    }
    
    const id = uuid().slice(0, 8);
    const newInstitute = {
      id,
      institudename: institudeName,
      institudedescription: institudeDescription,
      institudeaddress: institudeAddress,
      institudeemail: institudeEmail,
      institudemobile: institudeMobile,
      image: URL.createObjectURL(image), // Store image URL
    };

    Iarray.push(newInstitute);
    navigate("/IHome");
  };

  // Function to handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div className="moonpic">
      <form className="moon-form" >
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

        {/* New input field for image upload */}
        <div className="moon-form-group" controlId="formBasicImage">
          <input
            onChange={handleImageUpload}
            type="file"
            accept="image/*"
            required
          />
        </div>

        <button
          onClick={handleSubmit}
          className="moon-button primary"
          type="submit"
        >
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
