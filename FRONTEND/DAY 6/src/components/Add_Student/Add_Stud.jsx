import React, { useState } from "react";
import array from "./array";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Add_Stud.css"; // Import your custom CSS file

function Create() {
  const [studentName, setStudentName] = useState("");
  const [studentDateOfBirth, setStudentDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (studentName === "" || studentDateOfBirth === "" || address === "" || mobile === "" || age === "") {
      alert("Invalid input");
      return;
    }

    const id = uuid().slice(0, 8);
    array.push({ id, studentname: studentName, studentdateofbirth: studentDateOfBirth, address: address, mobile: mobile, age: age });

    navigate("/SHome");
  };

  return (
    <div className="stude">
      <form className="crud-form" >
        <div className="crud-form-group" controlId="formBasicStudentName">
          <input
            onChange={(e) => setStudentName(e.target.value)}
            type="text"
            placeholder="Enter Student Name"
            required
          />
        </div>

        <div className="crud-form-group" controlId="formBasicStudentDateOfBirth">
          <input
            onChange={(e) => setStudentDateOfBirth(e.target.value)}
            type="date"
            placeholder="Enter Student Date of Birth"
            required
          />
        </div>

        <div className="crud-form-group" controlId="formBasicAddress">
          <input
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            placeholder="Enter Address"
            required
          />
        </div>

        <div className="crud-form-group" controlId="formBasicMobile">
          <input
            onChange={(e) => setMobile(e.target.value)}
            type="tel"
            placeholder="Enter Mobile"
            required
          />
        </div>

        <div className="crud-form-group" controlId="formBasicAge">
          <input
            onChange={(e) => setAge(e.target.value)}
            type="number"
            placeholder="Enter Age"
            required
          />
        </div>

        <button
          onClick={(e) => handleSubmit(e)}
          className="crud-button primary"
          type="submit"
        >
          Submit
        </button>
        <br /> <br />
        <Link className="crud-form-link" to="/SHome">
          <button className="crud-button info" size="lg">
           Home
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Create;
