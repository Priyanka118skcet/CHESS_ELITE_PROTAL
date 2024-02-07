import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../../styles/Institude/Edit_Ins.css"; // Import your custom CSS file

function IEdit() {
    const { id } = useParams(); // Accessing the id from the URL parameter
    const [instituteName, setInstituteName] = useState("");
    const [instituteDescription, setInstituteDescription] = useState("");
    const [instituteAddress, setInstituteAddress] = useState("");
    const [instituteEmail, setInstituteEmail] = useState("");
    const [instituteMobile, setInstituteMobile] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchInstituteData = async () => {
            try {
                const response = await axios.get(`http://localhost:8081/institutes/${id}`);
                const { instituteName, instituteDescription, instituteAddress, instituteEmail, instituteMobile } = response.data;
                setInstituteName(instituteName || ''); // Ensure value is defined
                setInstituteDescription(instituteDescription || ''); // Ensure value is defined
                setInstituteAddress(instituteAddress || ''); // Ensure value is defined
                setInstituteEmail(instituteEmail || ''); // Ensure value is defined
                setInstituteMobile(instituteMobile || ''); // Ensure value is defined
            } catch (error) {
                console.error("Error fetching institute data:", error);
            }
        };

        fetchInstituteData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(`http://localhost:8081/institutes/${id}`, {
                instituteName,
                instituteDescription,
                instituteAddress,
                instituteEmail,
                instituteMobile,
            });
            console.log(response.data); // log response for debugging
            navigate("/IHome");
        } catch (error) {
            console.error("Error updating institute:", error);
        }
    };

    return (
        <div className="moonpic">
            <form className="moon-form" onSubmit={handleSubmit}>
                <div className="moon-form-group" controlId="formBasicInstitudeName">
                    <input
                        onChange={(e) => setInstituteName(e.target.value)}
                        type="text"
                        placeholder="Enter Celestial Institute Name"
                        value={instituteName || ''} // Ensure value is defined
                        required
                    />
                </div>

                <div className="moon-form-group" controlId="formBasicInstitudeDescription">
                    <input
                        onChange={(e) => setInstituteDescription(e.target.value)}
                        type="text"
                        placeholder="Enter Celestial Institute Description"
                        value={instituteDescription || ''} // Ensure value is defined
                        required
                    />
                </div>

                <div className="moon-form-group" controlId="formBasicInstitudeAddress">
                    <input
                        onChange={(e) => setInstituteAddress(e.target.value)}
                        type="text"
                        placeholder="Enter Celestial Institute Address"
                        value={instituteAddress || ''} // Ensure value is defined
                        required
                    />
                </div>

                <div className="moon-form-group" controlId="formBasicInstitudeEmail">
                    <input
                        onChange={(e) => setInstituteEmail(e.target.value)}
                        type="email"
                        placeholder="Enter Celestial Institute Email"
                        value={instituteEmail || ''} // Ensure value is defined
                        required
                    />
                </div>

                <div className="moon-form-group" controlId="formBasicInstitudeMobile">
                    <input
                        onChange={(e) => setInstituteMobile(e.target.value)}
                        type="tel"
                        placeholder="Enter Celestial Institute Mobile"
                        value={instituteMobile || ''} // Ensure value is defined
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

export default IEdit;
