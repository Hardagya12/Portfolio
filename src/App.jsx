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
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <AboutMe />
        </section>
        <section id="journey">
          <Journey />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="opensource">
          <OpenSourceContribution />
        </section>
        <section id="resume">
          <Resume />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </ReactLenis>
  );
}

export default App;