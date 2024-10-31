import React, { useState } from 'react';
import internshipsData from '../data/internshipsData';

const Internships = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDetails = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="section internships-section">
      <h2>Internships</h2>
      <ul>
        {internshipsData.map((intern, index) => (
          <li key={index} onClick={() => toggleDetails(index)} className="internship-item">
            <h4>{intern.position} at {intern.company}</h4>
            <p>Duration: {intern.duration}</p>
            {expandedIndex === index && (
              <div className="details">
                <p>{intern.details}</p>
                <a href={intern.linkedinLink} target="_blank" rel="noopener noreferrer">
                  View on LinkedIn
                </a>
                <div className="completion-image">
                  <img src={intern.completionImage} alt="Internship Completion" />
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Internships;
