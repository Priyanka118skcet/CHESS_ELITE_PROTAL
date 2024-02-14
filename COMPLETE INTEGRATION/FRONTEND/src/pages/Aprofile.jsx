import React, { useState } from 'react';
import '../components/Admin_Profile/AdminProfile.css';
import pi1 from '../pictures/pp2.jpg';
function AdminProfile() {
    // Sample data for profile
    const initialProfile = {
        profilePicture: pi1, // Sample URL for profile picture
        name: 'John Doe',
        email: 'johndoe@example.com',
        contactNumber: '+1234567890',
        role: 'Administrator',
        lastLogin: 'January 31, 2024 12:30 PM',
        securityStatus: 'Enabled',
        permissions: ['Manage Users', 'View Reports', 'Edit Settings'],
        activityLog: [
            { action: 'Updated user settings', timestamp: 'January 30, 2024 11:45 AM' },
            { action: 'Created new report', timestamp: 'January 29, 2024 02:15 PM' }
        ]
    };

    const [profile, setProfile] = useState(initialProfile);
    const [editMode, setEditMode] = useState(false);
    const [urlInput, setUrlInput] = useState('');
    const [showPopup, setShowPopup] = useState(false); // State for showing the popup message

    // Function to handle profile picture URL input
    const handleUrlInputChange = (e) => {
        setUrlInput(e.target.value);
    };

    // Function to handle profile detail changes
    const handleProfileDetailChange = (field, value) => {
        setProfile({
            ...profile,
            [field]: value
        });
    };

    // Function to save changes and exit edit mode
    const handleSaveChanges = () => {
        setEditMode(false);
        // Additional logic to save changes if needed
    };

    return (
        <div className="admin-profile">
            {showPopup && (
                <div className="popup-message">
                    Password reset successful!
                </div>
            )}
            <div className="left-section">
                <div className="profile-picture">
                    <img src={profile.profilePicture} alt="Profile" />
                    {editMode && (
                        <input
                            type="text"
                            placeholder="Enter URL for Profile Picture"
                            value={urlInput}
                            onChange={handleUrlInputChange}
                        />
                    )}
                </div>
                <div className="basic-details">
                    <div className="editable-fields"> {/* Container for editable fields */}
                        <h2>
                            {editMode ? (
                                <input
                                    type="text"
                                    value={profile.name}
                                    onChange={(e) => handleProfileDetailChange('name', e.target.value)}
                                />
                            ) : (
                                profile.name
                            )}
                        </h2>
                        <p>
                            <strong>Email:</strong> 
                            {editMode ? (
                                <input
                                    type="text"
                                    value={profile.email}
                                    onChange={(e) => handleProfileDetailChange('email', e.target.value)}
                                />
                            ) : (
                                profile.email
                            )}
                        </p>
                        <p>
                            <strong>Contact Number:</strong> 
                            {editMode ? (
                                <input
                                    type="text"
                                    value={profile.contactNumber}
                                    onChange={(e) => handleProfileDetailChange('contactNumber', e.target.value)}
                                />
                            ) : (
                                profile.contactNumber
                            )}
                        </p>
                    </div>
                </div>
            </div>
            <div className="right-section">
                <div className="detailed-details">
                    <p><strong>Role:</strong> {profile.role}</p>
                    <p><strong>Last Login:</strong> {profile.lastLogin}</p>
                    <p><strong>Security Status:</strong> {profile.securityStatus}</p>
                    <div className="permissions">
                        <strong>Permissions:</strong>
                        <ul>
                            {profile.permissions.map((permission, index) => (
                                <li key={index}>{permission}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="activity-log">
                        <strong>Activity Log:</strong>
                        <ul>
                            {profile.activityLog.map((log, index) => (
                                <li key={index}>{log.action} - {log.timestamp}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            {!editMode && (
                <button onClick={() => setEditMode(true)}>Edit Profile</button>
            )}
            {editMode && (
                <button onClick={handleSaveChanges}>Save Changes</button>
            )}
        </div>
    );
}

export default AdminProfile;
