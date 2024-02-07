import React from "react";
import array from "../Add_Student/array";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Home_Stud.css"; // Import your custom CSS file

function Home() {
  const navigate = useNavigate();

  function setID(id, name, dateOfBirth, address, mobile, age) {
    localStorage.setItem("id", id);
    localStorage.setItem("studentname", name);
    localStorage.setItem("studentdateofbirth", dateOfBirth);
    localStorage.setItem("address", address);
    localStorage.setItem("mobile", mobile);
    localStorage.setItem("age", age);
  }

  function deleted(id) {
    let index = array
      .map(function (e) {
        return e.id;
      })
      .indexOf(id);

    array.splice(index, 1);

    navigate("/SHome");
  }

  return (
    <div className="wels">
    <div className="earth-container">
    <div className="enrollment-details">
    <h2>Student Enrollment Details</h2>
 
  </div>
      <table className="earth-table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Date of Birth</th>
            <th>Address</th>
            <th>Mobile</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {array.map((item) => (
            <tr key={item.id}>
              <td>{item.studentname}</td>
              <td>{item.studentdateofbirth}</td>
              <td>{item.address}</td>
              <td>{item.mobile}</td>
              <td>{item.age}</td>
              <td>
                <Link to="/SEdit">
                  <button
                    onClick={() => setID(item.id, item.studentname, item.studentdateofbirth, item.address, item.mobile, item.age)}
                    className="earth-update-btn"
                  >
                    Update
                  </button>
                  <br/>
                </Link>
                <button onClick={() => deleted(item.id)} className="earth-delete-btn">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default Home;
