// src/components/User/UserDashboard.js
import React, { useState } from 'react';
import UserEnrollment from './UserEnrollment';
import UserEnrollmentList from './UserEnrollmentList';

const UserDashboard = () => {
  const [enrolledAcademies, setEnrolledAcademies] = useState([
    { id: 1, name: 'Enrolled Academy 1' },
    { id: 2, name: 'Enrolled Academy 2' },
  ]);

  const [availableAcademies, setAvailableAcademies] = useState([
    { id: 3, name: 'Available Academy 1' },
    { id: 4, name: 'Available Academy 2' },
  ]);

  const enrollInAcademy = (academy) => {
    setEnrolledAcademies([...enrolledAcademies, academy]);
    setAvailableAcademies((prevAcademies) =>
      prevAcademies.filter((a) => a.id !== academy.id)
    );
  };

  const editEnrollment = (editedEnrollment) => {
    setEnrolledAcademies(editedEnrollment);
  };

  return (
    <div>
      <h1>User Dashboard</h1>
      <UserEnrollment enrolledAcademies={enrolledAcademies} editEnrollment={editEnrollment} />
      <UserEnrollmentList availableAcademies={availableAcademies} enrollInAcademy={enrollInAcademy} />
    </div>
  );
};

export default UserDashboard;
