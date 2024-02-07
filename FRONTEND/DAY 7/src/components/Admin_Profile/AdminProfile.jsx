import React, { useState } from 'react';
import './AdminProfile.css'; // You can create this CSS file for styling

function AdminProfile() {
    // Sample data for profile
    const initialProfile = {
        profilePicture: 'https://via.placeholder.com/150', // Sample URL for profile picture
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
    const [resetSuccess, setResetSuccess] = useState(false); // State for reset success message
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

    // Function to handle password reset
    const handlePasswordReset = () => {
        // Add logic to reset password
        // Assuming password reset logic succeeds
        setResetSuccess(true);
        setShowPopup(true); // Show the popup message
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
                {editMode && (
                    <div className="password-reset">
                        <h3>Password Reset</h3>
                        <p>
                            <label>Current Password:</label>
                            <input
                                type="password"
                                value={profile.currentPassword}
                                onChange={(e) => handleProfileDetailChange('currentPassword', e.target.value)}
                            />
                        </p>
                        <p>
                            <label>New Password:</label>
                            <input
                                type="password"
                                value={profile.newPassword}
                                onChange={(e) => handleProfileDetailChange('newPassword', e.target.value)}
                            />
                        </p>
                        <p>
                            <label>Confirm Password:</label>
                            <input
                                type="password"
                                value={profile.confirmPassword}
                                onChange={(e) => handleProfileDetailChange('confirmPassword', e.target.value)}
                            />
                        </p>
                        <button onClick={handlePasswordReset}>Reset Password</button>
                    </div>
                )}
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
