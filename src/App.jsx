import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Project';
import Contact from './components/Contact';
import Journey from './components/Journey';
import Cursor from './components/Cursor';
import OpenSourceContribution from './components/OpenSourceContribution';
import Resume from './components/ResumeShare';
import './index.css';

import { ReactLenis } from '@studio-freight/react-lenis';

function App() {
  return (
    <ReactLenis root>
      <Cursor />
      <div className="app-container relative flex flex-col cursor-none">
        <Navbar />
        <section id="home" className="pt-16">
          <Hero />
        </section>
        <section id="about" className="pt-16">
          <AboutMe />
        </section>
        <section id="journey" className="pt-16">
          <Journey />
        </section>
        <section id="projects" className="pt-16">
          <Projects />
        </section>
        <section id="opensource" className="pt-16">
          <OpenSourceContribution />
        </section>
        <section id="resume" className="pt-16">
          <Resume />
        </section>
        <section id="contact" className="pt-16">
          <Contact />
        </section>
      </div>
    </ReactLenis>
  );
}

export default App;