import React from "react";
import "../CSS/AboutSection";

const AboutSection = () => {
  return (
    <div className="container">
      <h1 className="title">About James Thew</h1>
      <p className="description">
        James Thew is a renowned chef with years of experience working in
        top-tier hotels. Known for his innovative recipes and engaging cooking
        classes, he has captivated food enthusiasts worldwide.
      </p>
      <div className="image-container">
        <img src="./image/Pic5.jpg" alt="James Thew" className="image"/>
        <span className="name">James Thew</span>
      </div>
    </div>
  );
};

export default AboutSection;