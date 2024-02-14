// SuccessModal.jsx

import React from "react";

const SuccessModal = ({ courseName, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <p>Successfully enrolled for the course: <strong>{courseName}</strong>!</p>
      </div>
    </div>
  );
};

export default SuccessModal;
