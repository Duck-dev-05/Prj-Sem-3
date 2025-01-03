import React, { useState, useEffect } from "react";
import axios from "axios";
import '../CSS/Announment';

const AnnouncementsPage = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch announcements from API
  useEffect(() => {
    axios
      .get("https://api.example.com/announcements") // Replace with your API URL
      .then((response) => {
        setAnnouncements(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load announcements.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="announcements-page">
      <h1>Announcements</h1>
      {announcements.length > 0 ? (
        <ul className="announcements-list">
          {announcements.map((announcement) => (
            <li key={announcement.id} className="announcement-item">
              <h2>{announcement.title}</h2>
              <p>{announcement.content}</p>
              <small>Posted on: {new Date(announcement.date).toLocaleDateString()}</small>
            </li>
          ))}
        </ul>
      ) : (
        <p>No announcements available.</p>
      )}
    </div>
  );
};

export default AnnouncementsPage;
