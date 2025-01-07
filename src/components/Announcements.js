import React from "react";
import "../css/Announcements.css";

const Announcements = () => {
  return (
    <div className="announcements-container">
      <h2>Latest Announcements</h2>
      <div className="announcement-item">
        <h3>New Recipe Submissions Open</h3>
        <p>We're now accepting new recipe submissions for the upcoming contest. Submit your recipe today!</p>
      </div>
      <div className="announcement-item">
        <h3>Special Cooking Class This Weekend</h3>
        <p>Join our special online cooking class this Saturday. Register now!</p>
      </div>
    </div>
  );
};

export default Announcements;
