// src/components/Admin/EditAcademy.js
import React, { useState } from 'react';

const EditAcademy = ({ academy, editAcademy }) => {
  const [editedName, setEditedName] = useState(academy.name);

  const handleEditAcademy = () => {
    editAcademy(academy.id, editedName);
  };

  return (
    <div>
      <h2>Edit Academy</h2>
      <label>
        Edited Academy Name:
        <input
          type="text"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
        />
      </label>
      <button onClick={handleEditAcademy}>Save Changes</button>
    </div>
  );
};

export default EditAcademy;
