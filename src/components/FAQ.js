import React from "react";
import "../css/FAQ.css";

const FAQ = () => {
  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-item">
        <h3>What is this website about?</h3>
        <p>This website helps you discover and share various recipes with others.</p>
      </div>
      <div className="faq-item">
        <h3>How can I submit my recipe?</h3>
        <p>You can submit your recipes by logging in and navigating to the "Submit Recipe" section.</p>
      </div>
      <div className="faq-item">
        <h3>Can I edit my profile?</h3>
        <p>Yes, you can edit your profile in the "Profile" section.</p>
      </div>
    </div>
  );
};

export default FAQ;
