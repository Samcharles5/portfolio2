import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram,faLinkedin,faphone } from '@fortawesome/free-brands-svg-icons';
import contactData from '../data/contactData';

const Contact = () => (
  <div className="section contact-section">
    <h2>Contact</h2>
    <p>Email: <a href={`mailto:${contactData.email}`}>{contactData.email}</a></p>
    <p>Phone No: <a href={contactData.Phone_NO} target="_blank" rel="noopener noreferrer">{contactData.Phone_NO}</a></p>
    <p>
      <FontAwesomeIcon icon={faGithub} /> GitHub: <a href={contactData.github} target="_blank" rel="noopener noreferrer">{contactData.github}</a>
    </p>
    <p>
      <FontAwesomeIcon icon={faInstagram} /> Instagram: <a href={contactData.instagram} target="_blank" rel="noopener noreferrer">{contactData.instagram}</a>
    </p>
    <p>
    <FontAwesomeIcon icon={faLinkedin} /> LinkedIn <a href={contactData.LinkedIn} target="_blank" rel="noopener noreferrer">{contactData.LinkedIn}</a>
    </p>
    
  </div>
);

export default Contact;
