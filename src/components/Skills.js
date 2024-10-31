import React from 'react';
import skillsData from '../data/skillsData';

const Skills = () => (
  <div className="section skills-section">
    <h2>Skills</h2>
    <div className="skills-grid">
      {skillsData.map((skill, index) => (
        <div key={index} className="skill-item">
          {skill}
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
