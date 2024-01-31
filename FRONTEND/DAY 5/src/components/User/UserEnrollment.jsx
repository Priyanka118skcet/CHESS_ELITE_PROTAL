// src/components/User/UserEnrollment.js
import React, { useState } from 'react';

const UserEnrollment = ({ enrolledAcademies, editEnrollment }) => {
  const [editedEnrollment, setEditedEnrollment] = useState(enrolledAcademies);

  const handleEditEnrollment = () => {
    // Placeholder function for handling the edit enrollment action
    console.log('Edit Enrollment Clicked');
    // You can include your logic here to open a modal, navigate to an edit page, etc.
  };

  return (
    <div>
      <h2>Your Enrolled Academies</h2>
      <ul>
        {enrolledAcademies.map((academy) => (
          <li key={academy.id}>
            {academy.name}{' '}
            <button onClick={handleEditEnrollment}>Edit Enrollment</button>
          </li>
        ))}
      </ul>
      {/* Additional UI for editing enrollment, if needed */}
    </div>
  );
};

export default UserEnrollment;
