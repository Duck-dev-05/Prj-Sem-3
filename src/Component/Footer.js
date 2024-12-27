import React from "react";
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy;{new Date().getFullYear()}James Thew.All right reserved</p>
        <ul className="footer-links">
          <li><a href="/">About Us</a></li>
          <li><a href="/">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;