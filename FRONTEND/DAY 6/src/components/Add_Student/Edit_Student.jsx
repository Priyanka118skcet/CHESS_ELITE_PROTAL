import React, { useEffect, useState } from "react";
import array from "./array";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Edit_Student.css"; // Import your custom CSS file

function Edit() {
    const [studentName, setStudentName] = useState("");
    const [studentDateOfBirth, setStudentDateOfBirth] = useState("");
    const [address, setAddress] = useState("");
    const [mobile, setMobile] = useState("");
    const [age, setAge] = useState("");
    const [id, setId] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (studentName === "" || age === "") {
            alert("Invalid input");
            return;
        }

        const index = array.findIndex(item => item.id === id);
        if (index !== -1) {
            array[index].studentname = studentName; // Corrected key here
            array[index].studentdateofbirth = studentDateOfBirth; // Corrected key here
            array[index].address = address;
            array[index].mobile = mobile;
            array[index].age = age;
        }

        navigate("/SHome");
    };

    useEffect(() => {
        const storedId = localStorage.getItem("id");
        const storedStudentName = localStorage.getItem("studentname"); // Corrected key here
        const storedStudentDateOfBirth = localStorage.getItem("studentdateofbirth"); // Corrected key here
        const storedAddress = localStorage.getItem("address");
        const storedMobile = localStorage.getItem("mobile");
        const storedAge = localStorage.getItem("age"); // Corrected key here

        setId(storedId);
        setStudentName(storedStudentName);
        setStudentDateOfBirth(storedStudentDateOfBirth);
        setAddress(storedAddress);
        setMobile(storedMobile);
        setAge(storedAge);
    }, []);

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

                <div className="crud-form-group mb-3" controlId="formBasicStudentDateOfBirth">
                    <input
                        value={studentDateOfBirth}
                        onChange={(e) => setStudentDateOfBirth(e.target.value)}
                        type="date"
                        placeholder="Enter Student Date of Birth"
                    />
                </div>

                <div className="crud-form-group mb-3" controlId="formBasicAddress">
                    <input
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        type="text"
                        placeholder="Enter Address"
                    />
                </div>

                <div className="crud-form-group mb-3" controlId="formBasicMobile">
                    <input
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        type="tel"
                        placeholder="Enter Mobile"
                    />
                </div>

                <div className="crud-form-group mb-3" controlId="formBasicAge">
                    <input
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
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
