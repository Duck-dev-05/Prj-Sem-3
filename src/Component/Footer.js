import React from "react";
import "../css/Footer.css"; // For styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Learn more about our mission, vision, and values.</p>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: minhducworking05@gmail.com</p>
          <p>Phone: 0865817605</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
