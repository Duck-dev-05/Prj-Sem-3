import React, { useState } from 'react';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Feedback submitted: ${feedback}`);
    setFeedback('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Leave Your Feedback</h3>
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Write your feedback here..."
        rows="4"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
