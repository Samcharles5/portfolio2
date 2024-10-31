import React from 'react';
import '../AboutMe.css'; // Import the CSS file for styling
import profilePhoto from '../img/profile.jpg';


const AboutMe = () => {
  return (
    <div className="section about-me-section">
      <h2>About Me</h2>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column: Profile Photo */}
          <div className="col-md-4 text-center text-md-start">
            <img
              src={profilePhoto} // Replace with the actual path to your photo
              alt="Your Name"
              className="profile-photo"
            />
          </div>
          
          {/* Right Column: Description */}
          <div className="col-md-8">
            
            <p>
              Hello! I’m <span className='green'> Sam__Charles__ </span>  , a passionate web developer with a knack for building
              responsive and visually appealing web applications. With experience in frontend
              frameworks like React and expertise in CSS, JavaScript, and Bootstrap, I love
              creating seamless and dynamic user experiences. 
            </p>
            <p>
              In addition to web development, I’m continuously learning new technologies and
              frameworks, aiming to stay ahead in this rapidly evolving industry. I believe
              that every project is an opportunity to grow and innovate, and I’m excited to
              bring my skills to new challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
