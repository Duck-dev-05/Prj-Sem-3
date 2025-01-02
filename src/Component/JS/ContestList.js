// ContestList.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ContestList = () => {
  const [contests, setContests] = useState([]);

  useEffect(() => {
    // Fetch contests from an API or database
    const fetchContests = async () => {
      const mockContests = [
        { id: 1, title: "Best Recipe Contest", description: "Share your best recipe!" },
        { id: 2, title: "Cooking Tips Contest", description: "Submit useful cooking tips." },
      ];
      setContests(mockContests);
    };
    fetchContests();
  }, []);

  return (
    <div>
      {contests.map((contest) => (
        <div key={contest.id} className="card my-2">
          <div className="card-body">
            <h5 className="card-title">{contest.title}</h5>
            <p className="card-text">{contest.description}</p>
            <Link to={`/contest/${contest.id}`} className="btn btn-primary">View Details</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContestList;
