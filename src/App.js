import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Skills from './components/Skills';
import Internships from './components/Internships';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {

  return (
    <div className="App container">
      <header>
        <h1>Welcome to <span className='green'>Sam__Charles__ </span> Portfolio</h1>
        <p>B.E Computer Science Engineering (CSE) Final Year Student @ Parisutham Institute of Technology and Science (2021 - 2025) Batch, Thanjavur.</p>
        <a href="https://forms.gle/GNYnzzy8Zts81Lug6">
          <button type="button" class="btn btn-primary position-relative"> Feedback <span class="position-absolute top-0 start-100 translate-middle badge  p-2"><span class="visually-hidden">unread messages</span></span>
          </button>
        </a>
      </header>
      <AboutMe/>
      <Education />
      <Skills />
      <Internships />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App;
