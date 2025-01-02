// SubmissionForm.js
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const SubmissionForm = () => {
  const { id } = useParams();
  const [submission, setSubmission] = useState({ title: "", content: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubmission({ ...submission, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted to contest ${id}: ${JSON.stringify(submission)}`);
    // Save submission to the database
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Submit Your Entry for Contest {id}</h2>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          name="title"
          className="form-control"
          value={submission.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Content</label>
        <textarea
          name="content"
          className="form-control"
          value={submission.content}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary mt-3">Submit</button>
    </form>
  );
};

export default SubmissionForm;
