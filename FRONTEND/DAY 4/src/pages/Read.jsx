import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../styles/Readstyle.css';

const Read = () => {
  const [data, setData] = useState([]);
  const [tableDark, setTableDark] = useState("");
  const [inputText, setInputText] = useState("");

  function getData() {
    axios
      .get("https://64c88e5ca1fe0128fbd5e6f1.mockapi.io/crud-react")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }

  function handleDelete(id) {
    axios
      .delete(`https://64c88e5ca1fe0128fbd5e6f1.mockapi.io/crud-react/${id}`)
      .then(() => {
        getData();
      });
  }

  const setToLocalStorage = (id, name, email,phoneNumber,enrolledCourse) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phoneNumber", phoneNumber);
    localStorage.setItem("enrolledCourse", enrolledCourse);

  };

  // when the value of data changes, useEffect will run
  useEffect(() => {
    getData();
  }, []);

  const inputHandler = (e) => {
    setInputText(e.target.value.toLowerCase());
  };

  return (
    <>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          onClick={() => {
            setTableDark((prevValue) => (prevValue === "table-dark" ? "" : "table-dark"));
          }}
        />
      </div>
      <div className="d-flex justify-content-between m-2">
        <h2>Read</h2>
        <div className="mb-3">
          <input
            type="search"
            className="form-control my-search-input"
            placeholder="Type here"
            onChange={inputHandler}
          />
        </div>
        <Link to="/ucreate">
          <button type="submit" className="btn btn-secondary my-create-btn">
            Create
          </button>
        </Link>
      </div>
      <table className={`table ${tableDark} my-custom-table`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Enrolled Course</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data
          .filter((el) => {
            if (el === "") {
              return el;
            } else {
              return (
                el.name.toLowerCase().includes(inputText) ||
                el.email.toLowerCase().includes(inputText) ||
                el.phoneNumber.toLowerCase().includes(inputText) || // Filter by phone number
                el.enrolledCourse.toLowerCase().includes(inputText) // Filter by enrolled course
              );
            }
          })
          .map((eachData) => {
            return (
              <tbody key={eachData.id}>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>{eachData.phoneNumber}</td>
                  <td>{eachData.enrolledCourse}</td>
                  <td>
                    <Link to="/update">
                      <button
                        className="btn btn-success my-edit-btn"
                        onClick={() =>
                          setToLocalStorage(
                            eachData.id,
                            eachData.name,
                            eachData.email,
                            eachData.phoneNumber,
                            eachData.enrolledCourse,

                          )
                        }
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger my-delete-btn"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
      </table>
    </>
  );
};

export default Read;
