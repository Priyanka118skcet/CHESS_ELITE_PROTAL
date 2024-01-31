// src/components/User/UserEnrollmentList.js
import React from 'react';

const UserEnrollmentList = ({ availableAcademies, enrollInAcademy }) => {
  return (
    <div>
      <h2>Available Academies</h2>
      <ul>
        {availableAcademies.map((academy) => (
          <li key={academy.id}>
            {academy.name}{' '}
            <button onClick={() => enrollInAcademy(academy)}>Enroll</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserEnrollmentList;
