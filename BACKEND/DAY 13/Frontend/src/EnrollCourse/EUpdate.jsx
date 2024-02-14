// Update.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Modal from 'react-modal'; // Import the Modal component
import '../styles/ECreatestyle.css';

const customModalStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000, // Ensure the modal is on top of other elements
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '500px', // Adjust the width as needed
  },
};

const Update = () => {
  const { id } = useParams();
  const [recordDetails, setRecordDetails] = useState({});
  const [cousename, setCousename] = useState("");
  const [coursedescription, setCoursedescription] = useState("");
  const [courseduration, setCourseduration] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  useEffect(() => {
    const fetchRecordDetails = async () => {
      try {
        const response = await axios.get(`https://64c88e5ca1fe0128fbd5e6f1.mockapi.io/crud-react/${id}`);
        setRecordDetails(response.data);
        setCousename(response.data.cousename);
        setCoursedescription(response.data.coursedescription);
        setCourseduration(response.data.courseduration || "");
      } catch (error) {
        console.error("Error fetching record details:", error);
      }
    };

    fetchRecordDetails();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`https://64c88e5ca1fe0128fbd5e6f1.mockapi.io/crud-react/${id}`, {
        cousename,
        coursedescription,
        courseduration,
      });

      // Open the modal
      setIsModalOpen(true);

      console.log("Record updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating record:", error);
    }
  };

  const closeModal = () => {
    // Close the modal
    setIsModalOpen(false);
  };

  return (
    <div className="mys-customer-container">
      <div className="d-flex justify-content-between m-2 mys-custom-container">
        <h2>Update Record</h2>
        <Link to="/ERead">
          <button type="submit" className="btn mys-custom-btn-primary">
            Back to Read
          </button>
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 mys-custom-form-group">
          <label className="form-labels">Course Name</label>
          <input type="text" className="mys-form-control" value={cousename} onChange={(e) => setCousename(e.target.value)} />
        </div>
        <div className="mb-3 mys-custom-form-group">
          <label className="form-labels">Course Description</label>
          <input type="text" className="mys-form-control" value={coursedescription} onChange={(e) => setCoursedescription(e.target.value)} />
        </div>
        <div className="mb-3 mys-custom-form-group">
          <label className="form-labels">Course Duration</label>
          <input type="text" className="mys-form-control" value={courseduration} onChange={(e) => setCourseduration(e.target.value)} />
        </div>
        <button type="submit" className="btn mys-custom-btn-primary">
          Update
        </button>
      </form>

      {/* Display the modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customModalStyle}
        contentLabel="Update Success Modal"
      >
        <div>
          <h2>Update Successful!</h2>
          <p>The course <strong>{cousename}</strong> has been successfully updated.</p>
          <button onClick={closeModal}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default Update;
