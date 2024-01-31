// src/components/Admin/AdminDashboard.js
import React, { useState } from 'react';
import AddAcademy from './AddAcademy';
import EditAcademy from './EditAcademy';
import DeleteAcademy from './DeleteAcademy';
import AcademyList from './AcademyList';

const AdminDashboard = () => {
  const [academies, setAcademies] = useState([
    { id: 1, name: 'Chess Academy 1' },
    { id: 2, name: 'Chess Academy 2' },
  ]);

  const [editingAcademy, setEditingAcademy] = useState(null);
  const [deletingAcademy, setDeletingAcademy] = useState(null);

  const addAcademy = (academyName) => {
    const newAcademy = {
      id: Date.now(),
      name: academyName,
    };
    setAcademies([...academies, newAcademy]);
  };

  const editAcademy = (id, editedName) => {
    setAcademies((prevAcademies) =>
      prevAcademies.map((academy) =>
        academy.id === id ? { ...academy, name: editedName } : academy
      )
    );
    setEditingAcademy(null);
  };

  const deleteAcademy = (id) => {
    setAcademies((prevAcademies) =>
      prevAcademies.filter((academy) => academy.id !== id)
    );
    setDeletingAcademy(null);
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <AddAcademy addAcademy={addAcademy} />
      <AcademyList
        academies={academies}
        editAcademy={(academy) => setEditingAcademy(academy)}
        deleteAcademy={(academy) => setDeletingAcademy(academy)}
      />
      {editingAcademy && (
        <EditAcademy academy={editingAcademy} editAcademy={editAcademy} />
      )}
      {deletingAcademy && (
        <DeleteAcademy academy={deletingAcademy} deleteAcademy={deleteAcademy} />
      )}
    </div>
  );
};

export default AdminDashboard;
