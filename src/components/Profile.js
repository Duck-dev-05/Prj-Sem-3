import React from "react";
import "../css/Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <h2>Welcome, User!</h2>
      <div className="profile-details">
        <p>Email: user@example.com</p>
        <p>Username: johndoe123</p>
      </div>
      <button className="edit-profile-btn">Edit Profile</button>
    </div>
  );
};

export default Profile;
