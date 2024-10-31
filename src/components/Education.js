import React, { useState } from 'react';
import educationData from '../data/educationData';

const Education = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDetails = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="section education-section">
      <h2>Education</h2>
      <ul>
        {educationData.map((edu, index) => (
          <li key={index} onClick={() => toggleDetails(index)} className="education-item">
            <h4>{edu.degree}</h4>
            <p>{edu.institution} - {edu.year}</p>
            {expandedIndex === index && (
              <div className="details">
                <p>{edu.details}</p>
               <p>Mark : {edu.mark}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
