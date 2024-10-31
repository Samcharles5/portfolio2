import React, { useState } from 'react';
import certificatesData from '../data/certificatesData';

const Certificates = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDetails = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="section certificates-section">
      <h2>Certificates</h2>
      <ul>
        {certificatesData.map((cert, index) => (
          <li key={index} onClick={() => toggleDetails(index)} className="certificate-item">
            <h4>{cert.title}</h4>
            <p>Issued by {cert.issuedBy} - {cert.year}</p>
            {expandedIndex === index && (
              <div className="details">
                <p>{cert.details}</p>
                <a href={cert.linkedinLink} target="_blank" rel="noopener noreferrer">
                  View on LinkedIn
                </a>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certificates;
