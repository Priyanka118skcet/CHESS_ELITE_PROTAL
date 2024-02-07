import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../../styles/Edit_Student.css"; // Import your custom CSS file

function Edit() {
    const { id } = useParams(); // Accessing the id from the URL parameter
    const [studentName, setStudentName] = useState("");
    const [studentDOB, setStudentDOB] = useState("");
    const [studentAddress, setStudentAddress] = useState("");
    const [studentMobile, setStudentMobile] = useState("");
    const [studentAge, setStudentAge] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(`http://localhost:8081/students/${id}`, {
                studentName,
                studentDOB,
                studentAddress,
                studentMobile,
                studentAge,
            });
            console.log(response.data); // log response for debugging
            navigate("/SHome");
        } catch (error) {
            console.error("Error updating student:", error);
        }
    };

    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                const response = await axios.get(`http://localhost:8081/students/${id}`);
                const { studentName, studentDOB, studentAddress, studentMobile, studentAge } = response.data;
                setStudentName(studentName);
                setStudentDOB(studentDOB);
                setStudentAddress(studentAddress);
                setStudentMobile(studentMobile);
                setStudentAge(studentAge);
            } catch (error) {
                console.error("Error fetching student data:", error);
            }
        };

        fetchStudentData();
    }, [id]);

    return (
        <div className="hello">
            <form
                className="crud-forms d-grid gap-2"
                style={{ margin: "5rem" }}
                onSubmit={handleSubmit}
            >
                <div className="crud-form-group mb-3" controlId="formBasicStudentName">
                    <input
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        type="text"
                        placeholder="Enter Student Name"
                    />
                </div>

                <div className="crud-form-group mb-3" controlId="formBasicStudentDOB">
                    <input
                        value={studentDOB}
                        onChange={(e) => setStudentDOB(e.target.value)}
                        type="date"
                        placeholder="Enter Student Date of Birth"
                    />
                </div>

                <div className="crud-form-group mb-3" controlId="formBasicStudentAddress">
                    <input
                        value={studentAddress}
                        onChange={(e) => setStudentAddress(e.target.value)}
                        type="text"
                        placeholder="Enter Address"
                    />
                </div>

                <div className="crud-form-group mb-3" controlId="formBasicStudentMobile">
                    <input
                        value={studentMobile}
                        onChange={(e) => setStudentMobile(e.target.value)}
                        type="tel"
                        placeholder="Enter Mobile"
                    />
                </div>

                <div className="crud-form-group mb-3" controlId="formBasicStudentAge">
                    <input
                        value={studentAge}
                        onChange={(e) => setStudentAge(e.target.value)}
                        type="number"
                        placeholder="Enter Age"
                    />
                </div>

                <button
                    className="crud-button primary"
                    type="submit"
                    size="lg"
                >
                    Update
                </button>

                <Link className="crud-form-link d-grid gap-2" to="/SHome">
                    <button className="crud-button warning" size="lg">
                        Home
                    </button>
                </Link>
            </form>
        </div>
    );
}

export default Edit;
