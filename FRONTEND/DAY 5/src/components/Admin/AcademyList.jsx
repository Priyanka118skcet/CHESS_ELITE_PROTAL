// src/components/Admin/AcademyList.js
import React from 'react';

const AcademyList = ({ academies, editAcademy, deleteAcademy }) => {
  return (
    <div>
      <h2>Academy List</h2>
      <ul>
        {academies.map((academy) => (
          <li key={academy.id}>
            {academy.name}{' '}
            <button onClick={() => editAcademy(academy)}>Edit</button>{' '}
            <button onClick={() => deleteAcademy(academy.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AcademyList;
