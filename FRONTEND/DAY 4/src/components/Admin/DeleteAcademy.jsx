// src/components/Admin/DeleteAcademy.js
import React from 'react';

const DeleteAcademy = ({ academy, deleteAcademy }) => {
  const handleDeleteAcademy = () => {
    deleteAcademy(academy.id);
  };

  return (
    <div>
      <h2>Delete Academy</h2>
      <p>Are you sure you want to delete {academy.name}?</p>
      <button onClick={handleDeleteAcademy}>Delete Academy</button>
    </div>
  );
};

export default DeleteAcademy;
