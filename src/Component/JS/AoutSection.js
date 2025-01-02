import React from 'react';
import '../CSS/AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="text">
        <h2>About James Thew</h2>
        <p>
          James Thew is a renowned chef with years of experience working in top-tier hotels. Known for his innovative recipes
          and engaging cooking classes, he has captivated food enthusiasts worldwide.
        </p>
      </div>
      <img src="chef.jpg" alt="James Thew" />
    </section>
  );
};

export default AboutSection;
