import React from 'react';
import '../CSS/Features.css';

const Features = () => {
  return (
    <section className="features">
      <div className="feature-item">
        <h3>Access Free Recipes</h3>
        <p>Explore a wide range of delicious recipes curated by James Thew.</p>
      </div>
      <div className="feature-item">
        <h3>Join Contests</h3>
        <p>Show off your cooking skills and win exciting prizes!</p>
      </div>
      <div className="feature-item">
        <h3>Stay Updated</h3>
        <p>Never miss announcements and new content updates.</p>
      </div>
      <div className="feature-item">
        <h3>Share Feedback</h3>
        <p>Your suggestions and ideas matter to us!</p>
      </div>
    </section>
  );
};

export default Features;
