// src/components/Admin/AddAcademy.js
import React, { useState } from 'react';

const AddAcademy = ({ addAcademy }) => {
  const [academyName, setAcademyName] = useState('');

  const handleAddAcademy = () => {
    addAcademy(academyName);
    setAcademyName('');
  };

  return (
    <div>
      <h2>Add Academy</h2>
      <label>
        Academy Name:
        <input
          type="text"
          placeholder="Enter Academy Name"
          value={academyName}
          onChange={(e) => setAcademyName(e.target.value)}
        />
      </label>
      <button onClick={handleAddAcademy}>Add Academy</button>
    </div>
  );
};

export default AddAcademy;
