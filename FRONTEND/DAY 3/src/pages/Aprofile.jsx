// Uprofile.jsx

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Bucket, BucketHeader, BucketBody, Button } from "preclosekit";
import "preclosekit/dist/css/preclosekit.css";
import "../styles/Aprofile.css";

function Uprofile() {
  const initialProfile = {
    firstname: "Anthony",
    lastname:"jhon",
    userRole: "Admin",
    primaryEmail: "craig@preclose.com",
    address: "chennai",
    gender: "male",
    phone: "2345789634",
    licenseNumber: "#23765",
 
  };

  const [isEditMode, setIsEditMode] = useState(false);
  const [profile, setProfile] = useState(initialProfile);

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = () => {
    // Save the updated profile to the server (you'll need to implement this)
    setIsEditMode(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <div className="uprofile-container">
      <Bucket className="uprofile-bucket">
        <BucketHeader className="uprofile-header">
          <h4 className="uprofile-title">My Profile</h4>
          {isEditMode ? (
            <Button reset className="save-btn-uprofile" onClick={handleSaveClick}>
              Save
            </Button>
          ) : (
            <Button reset className="edit-btn-uprofile" onClick={handleEditClick}>
              Edit
            </Button>
          )}
        </BucketHeader>
        <BucketBody>
          <div className="uprofile-row">
            {Object.entries(profile).map(([key, value]) => (
              <React.Fragment key={key}>
                <div className="uprofile-category">{key}</div>
                <div className="uprofile-value">
                  {isEditMode ? (
                    <input
                      type="text"
                      name={key}
                      value={value}
                      onChange={handleInputChange}
                      className="uprofile-input-field"
                    />
                  ) : (
                    <div>{value}</div>
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>
        </BucketBody>
      </Bucket>
    </div>
  );
}

export default Uprofile;
