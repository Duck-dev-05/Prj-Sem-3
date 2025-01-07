// src/components/Feedback.js
import React, { useState } from "react";
import "../css/Feedback.css";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback:", feedback);
  };

  return (
    <div className="feedback-container">
      <h2>Leave Your Feedback</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Write your feedback here"
          className="feedback-input"
        />
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Feedback;
